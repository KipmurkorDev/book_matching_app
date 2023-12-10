const express = require("express");
const { storage } = require("../Helpers/cloudinary");
const { addBook, bookMatch } = require("../Controllers/bookController");
const bookRouter = express.Router();
const multer = require("multer");

const upload = multer({ storage });

bookRouter.post("/", upload.single("bookcover"), addBook);

bookRouter.post("/match", bookMatch);

module.exports = bookRouter;
