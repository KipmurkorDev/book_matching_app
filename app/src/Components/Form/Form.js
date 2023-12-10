import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Example traits data
const traits = [
  { trait: "Spontaneous", value: 1 },
  { trait: "Analytical", value: 2 },
  { trait: "Logical", value: 3 },
  { trait: "Disciplined", value: 4 },
  { trait: "Organized", value: 5 },
  { trait: "Adventurous", value: 6 },
  { trait: "Empathetic", value: 7 },
  { trait: "Resilient", value: 8 },
  { trait: "Creative", value: 9 },
  { trait: "Compassionate", value: 10 },
];

// Example moods data
const moods = [
  { mood: "Stressed", value: 1 },
  { mood: "Angry", value: 2 },
  { mood: "Sad", value: 3 },
  { mood: "Confused", value: 4 },
  { mood: "Calm", value: 5 },
  { mood: "Content", value: 6 },
  { mood: "Peaceful", value: 7 },
  { mood: "Happy", value: 8 },
  { mood: "Excited", value: 9 },
  { mood: "Surprised", value: 10 },
];

function Form() {
  const [formData, setFormData] = useState({
    favoriteMood: "",
    desiredTrait: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleFieldChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  };

  const renderDropdownOptions = (options) => (
    <>
      <option value="">Select {options.label}</option>
      {options.values.map((item, index) => (
        <option key={index} value={item.value}>
          {item[options.label.toLowerCase()]}
        </option>
      ))}
    </>
  );

  const renderError = (field) =>
    errors[field] && <div className="text-danger">{errors[field]}</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:80/books/match",
        formData
      );

      if (response.status === 201) {
        const matchingBooks = response.data.matchingBooks;
        navigate("/books", { state: { matchingBooks } });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Error during form submission:", error);
      }
    }
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
            Which mood do you most commonly experience?
          </label>
          <select
            value={formData.favoriteMood}
            onChange={({ target }) =>
              handleFieldChange("favoriteMood", target.value)
            }
            className="form-select"
          >
            {renderDropdownOptions({ values: moods, label: "Mood" })}
          </select>
          {renderError("mood")}
        </div>

        <div className="mb-4">
          <label className="form-label mb-3 fw-bold">
            Which trait describes you?
          </label>
          <select
            value={formData.desiredTrait}
            onChange={({ target }) =>
              handleFieldChange("desiredTrait", target.value)
            }
            className="form-select"
          >
            {renderDropdownOptions({ values: traits, label: "Trait" })}
          </select>
          {renderError("trait")}
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
