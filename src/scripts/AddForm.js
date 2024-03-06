import React, { useState } from "react";
import axios from "axios";
import "../style/Form.css";

const BASE_API_URL = "http://localhost:5000";

const drinkUrl = () => `${BASE_API_URL}/drinks`;
const snackUrl = () => `${BASE_API_URL}/snacks`;

function AddForm() {
  const initialState = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
    item: "" // added "item" property to initial state
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.name === "") {
        alert("Item name is missing. Try again");
        return;
      }

      const id = formData.name.toLowerCase(); // generate id from name
      const url = formData.item === "drink" ? drinkUrl() : snackUrl();
      const dataToSend = { id, ...formData }; // place id on top
      await axios.post(url, dataToSend);
      setFormData(initialState);
      window.alert("Item was added");
    } catch (err) {
      console.error(err);
      alert("An error occurred while adding the item. Try again");
    }
  };

  return (
    <div className="FoodForm">
      <h2 className="FoodForm-title">Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item"></label>
        <select
          id="item"
          name="item"
          value={formData.item}
          onChange={handleChange}
        >
          <option value="">Select Item Type</option> {/* added a default option */}
          <option value="snack">Entrée</option>
          <option value="drink">CockTail</option>
        </select>
        <br />
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description"></label>
        <input
          id="description"
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="recipe"></label>
        <input
          id="recipe"
          type="text"
          name="recipe"
          placeholder="Recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="serve"></label>
        <input
          id="serve"
          type="text"
          name="serve"
          placeholder="Serve"
          value={formData.serve}
          onChange={handleChange}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddForm;
