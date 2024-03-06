import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/Form.css";

const BASE_API_URL = "http://localhost:5000";

const drinkUrl = () => `${BASE_API_URL}/drinks`;
const snackUrl = () => `${BASE_API_URL}/snacks`;

function DeleteForm() {
  const [formData, setFormData] = useState({
    item: "",
    name: ""
  });
  const [itemIds, setItemIds] = useState([]);

  useEffect(() => {
    if (formData.item) {
      fetchItemIds();
    }
  }, [formData.item]);

  const fetchItemIds = async () => {
    try {
      const url = formData.item === "drink" ? drinkUrl() : snackUrl();
      const response = await axios.get(url);
      const ids = response.data.map((item) => item.id);
      setItemIds(ids);
    } catch (error) {
      console.error("Error fetching item IDs:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const url =
        formData.item === "drink" ? drinkUrl() : snackUrl();
      await axios.delete(`${url}/${formData.name}`);
      alert("Item deleted successfully");
      setFormData({ item: "", name: "" });
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred while deleting the item");
    }
  };

  return (
    <div className="FoodForm">
      <h2 className="FoodForm-title">Delete an Item</h2>
      <form onSubmit={handleDelete}>
        <label htmlFor="item"></label>
        <select
          id="item"
          name="item"
          value={formData.item}
          onChange={handleChange}
        >
          <option value="">Select Item Type</option>
          <option value="snack">Entrées</option>
          <option value="drink">CockTails</option>
        </select>
        <br />
        <label htmlFor="name"></label>
        <select
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        >
          <option value="">Select Item</option>
          {itemIds.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteForm;
