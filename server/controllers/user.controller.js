const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt.config')

module.exports.checkAuth = (req, res) => {
  jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
    if (err) {
      res.status(400).json({ verified: false });
    } else {
      console.log(payload);
      User.findOne({ _id: payload._id })
      .then(user => {
        res.json({ msg: "success!", user:{email:user.email} });
      })
    }
  });
}
/* With the registration form in the front end this will store the new user */
module.exports.registerUser = (req, res) => {
  console.log(req.body)
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.json({ msg: "Registered successfully", user: user });
    })
    .catch(err => res.status(400).json(err));
}

module.exports.loginUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user === null) {
        res.status(400).json({ msg: "User not found" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then(passwordIsValid => {
            console.log('compared passwords')
            console.log(passwordIsValid)
            if (passwordIsValid) {

              const newJWT = jwt.sign({
                _id: user._id
              }, secret)

              console.log(newJWT)
              res
                .cookie("usertoken", newJWT, {
                  httpOnly: true
                })
                .json({ msg: "success!", user:{email:user.email} });
            } else {
              res.status(400).json({ msg: "passwords do not match" });
            }
          })
          .catch(err => res.status(400).json({ msg: "invalid login attempt" }));
      }
    })
    .catch(err => res.status(400).json(err));
}