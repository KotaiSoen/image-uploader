const express = require('express');
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({})

const app = express();

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

var storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "demo",
    allowedFormats: ['jpg', 'png'],
});

const parser = multer({ storage: storage });

app.post("/uploads", parser.single('file'), (req, res) => {
    const image_url = req.file.path;
    res.json(image_url);
})

const port = 3000;

app.listen(port, () => console.log(`Server running on port ${3000}`));



