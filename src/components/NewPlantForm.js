import { useState } from "react";

const NewPlantForm = ({ handleAddPlant }) => {
  const [formData, setFormData] = useState({ name: "", image: "", price: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = { ...formData, price: Number(formData.price) };
    const isValid = Object.values(newPlant).every((el) => el);
    if (isValid) {
      fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant),
      })
        .then((resp) => resp.json())
        .then((plant) => {
          handleAddPlant(plant);
          setFormData({ name: "", image: "", price: 0 });
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill out entire form.");
    }
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Plant name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          step="0.01"
          placeholder="Price"
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};

export default NewPlantForm;
