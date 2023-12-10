const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  mood: String,
  bookcover: String,
  genre_criteria: Number,
  mood_criteria: Number,
});

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;
