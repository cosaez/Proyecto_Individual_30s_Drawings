const Image = require('../models/image.model.js');

module.exports.createImage = (req, res) => {
    console.log(req.body)
    Image.create(req.body)
    .then((newImage) => {
        res.json({image: newImage})
    })
    .catch((err) => {
        res.status(400).json({errors: err})
    })
}

module.exports.getAll = (req, res) => {
    Image.find()
    .then(images => {
        res.json({images: images})
    })
    .catch(err => res.json({ message: "Something went wrong", error: err}));
}

module.exports.findImage = (req, res) => {
    Image.findOne({ _id: req.params.id })
        .then(oneImage => res.json({ image: oneImage }))
        .catch(err => res.json(err));
}

module.exports.updateImage = (req, res) => {
    Image.findOneAndUpdate({'_id': req.params.id}, req.body)
    .then(image => {
        res.json({image: image})
    })
    .catch((err) => {
        res.json({msg: "Failed to update"})
    })
}

module.exports.deleteImage = (req, res) => {
    Image.findOneAndDelete({'_id': req.params.id})
    .then(image => {
        res.json({image: image})
    })
    .catch((err) => {
        res.json({msg: "Failed to delete"})
    })
}