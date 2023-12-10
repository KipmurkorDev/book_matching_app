const Book = require("../Model/bookModel");
const { genres, moods } = require("../Helpers/moodGenres");
const bookModel = require("../Model/bookModel");
const addBook = async (req, res) => {
  try {
    const { title, author, genre, mood } = JSON.parse(req.body.data);

    if (!title || !author || !genre || !mood) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const genre_criteria = genres[genre] || 10;
    const mood_criteria = moods[mood] || 10;
    const newBook = new Book({
      title,
      author,
      genre,
      mood,
      bookcover: req.file.path,
      genre_criteria,
      mood_criteria,
    });

    await newBook.save();

    res.status(201).json({ message: "Book added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
const bookMatch = async (req, res) => {
  try {
    const { desiredTrait, favoriteMood } = req.body;
    const errors = {};

    if (!desiredTrait) {
      errors.trait = "Trait field is required in the request body";
    }

    if (!favoriteMood) {
      errors.mood = "Favorite Mood field is required in the request body";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const userVector = [desiredTrait, favoriteMood];
    const books = await bookModel.find({});

    const bookVectors = books.map(({ genre_criteria, mood_criteria }) => [
      genre_criteria || 0,
      mood_criteria || 0,
    ]);

    const differences = bookVectors.map((bookVector) =>
      bookVector.map((value, index) => Math.abs(value - userVector[index]))
    );

    const threshold = 5;

    const matchingBooks = books.filter((_, index) =>
      differences[index].every((value) => value <= threshold)
    );

    res.status(201).json({ matchingBooks });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addBook,
  bookMatch,
};
