# Book Matching Web App

This web application allows users to discover books that match their personality traits and favorite moods.
The application uses a basic form to collect user input, which is then compared to a database of books scored on different criteria.
The matching process is based on the difference of vectors, and the results are displayed visually.

## Technologies Used

### Front-end

- **React.js:** User interface development.
- **Bootstrap:** Styling components.
- **Axios:** Handling HTTP requests.

### Back-end

- **Node.js and Express:** Server-side development.
- **MongoDB:** Database for storing book information.
- **Multer:** Handling file uploads (book covers).
- **Cloudinary:** Cloud-based image storage.

## Front-end Overview

The user interface consists of a single page with the following components:

- **Fixed Navigation Bar:** A navigation bar for easy navigation.
- **Form:** A form with two inputs where users answer questions related to their personality traits and favorite moods.
- **Visual Representation:** A frame that displays a visual representation of the matching results.

## Back-end Overview

### Database Structure

- **Book Model:** Schema for storing book information, including title, author, genre, mood, book cover, genre criteria, and mood criteria.

### Server-side Functionality

#### Add Book Endpoint (`/books`)

- Parses the request body to extract book details.
- Validates required fields.
- Calculates genre and mood criteria based on predefined values.
- Creates a new book instance and saves it to the MongoDB database.

#### Book Matching Endpoint (`/books/match`)

- Retrieves the user's desired trait and favorite mood from the request body.
- Validates input fields and returns errors if necessary.
- Retrieves all books from the database.
- Calculates the difference vectors between user input and each book in the database.
- Filters books based on a specified threshold and returns matching books.

## Difference of Vectors

The difference of vectors is calculated by comparing the user's vector (desired trait and favorite mood) with the vectors of each book in the database. The absolute difference between corresponding components of the vectors is taken, and books are considered a match if all differences are below a specified threshold.

## Running the Application

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and Cloudinary account, updating the configuration accordingly.
4. Run the server using `npm start`.
5. Access the web app in your browser.

## Examples

### Example User Input

```json
{
  "desiredTrait": "9",
  "favoriteMood": "9"
}
```

### Example User Input

```json
[
  {
    "author": "Samantha Lee",
    "bookcover": "https://res.cloudinary.com/dv3f0qq73/image/upload/v1702211991/bookmatch/imt3tyuvxgrnchse3mum.jpg",
    "genre": "Thriller",
    "genre_criteria": 11,
    "mood": "Suspenseful",
    "mood_criteria": 11,
    "title": "The Art of Deception",
    "__v": 0,
    "_id": "6575b1979b8e4c8b17e094da"
  },
  {
    "_id": "6575b2829b8e4c8b17e094de",
    "title": "Love Beyond Time",
    "author": "David Brown",
    "genre": "Romance",
    "mood": "Romantic"
  },
  {
    "_id": "6575b2979b8e4c8b17e094e0",
    "title": "Echoes of History",
    "author": "Michael Williams",
    "genre": "History",
    "mood": "Historical"
  }
]
```
