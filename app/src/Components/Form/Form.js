import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
  const [form, setForm] = useState({
    favoriteGenre: "",
    desiredMood: "",
  });

  const handleFavoriteGenreChange = (event) => {
    setForm({ ...form, favoriteGenre: event.target.value });
  };

  const handleDesiredMoodChange = (event) => {
    setForm({ ...form, desiredMood: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div
      className="container d-flex flex-column align-items-center mt-5"
      style={{ marginBottom: "20%" }}
    >
      <form className="text-start" onSubmit={handleSubmit}>
        <h4 className="mb-4 text-center">
          Discover a book that suits your personality.
        </h4>

        <div className="mb-4">
          <label className="form-label mb-3 fw-bold">
            Please select your favorite literary genre
          </label>
          <select
            value={form.favoriteGenre}
            onChange={handleFavoriteGenreChange}
            className="form-select"
          >
            <option value="">Select Genre</option>
            <option value="Mystery">Mystery</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
            <option value="Action">Action</option>
            <option value="Non-fiction">Non-fiction</option>
            <option value="Biography">Biography</option>
            <option value="Poetry">Poetry</option>
            <option value="Memoir">Memoir</option>
            <option value="Science">Science</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label mb-3 fw-bold">
            What kind of mood or atmosphere are you looking for in a book?
          </label>
          <select
            value={form.desiredMood}
            onChange={handleDesiredMoodChange}
            className="form-select"
          >
            <option value="">Select Mood</option>
            <option value="Uplifting">Uplifting</option>
            <option value="Thrilling">Thrilling</option>
            <option value="Relaxing">Relaxing</option>
            <option value="Mysterious">Mysterious</option>
            <option value="Romantic">Romantic</option>
            <option value="Thought-provoking">Thought-provoking</option>
            <option value="Adventurous">Adventurous</option>
            <option value="Nostalgic">Nostalgic</option>
            <option value="Whimsical">Whimsical</option>
            <option value="Inspiring">Inspiring</option>
          </select>
        </div>

        <div className="text-center">
          <button className="btn btn-primary btn-sm" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
