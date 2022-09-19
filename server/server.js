const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

require("./config/mongoose.config");

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }));

const AllImageRoutes = require('./routes/image.routes');
const AllUserRoutes = require('./routes/user.routes');

AllImageRoutes(app);
AllUserRoutes(app);


app.listen(8000, () => console.log("Server is ready on port 8000"));