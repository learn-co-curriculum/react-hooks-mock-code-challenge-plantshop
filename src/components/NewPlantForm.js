import React, { useState } from "react";

function NewPlantForm({ handleNewPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPlant = {
      name,
      image,
      price,
    };
    handleNewPlant(newPlant);

    setName("");
    setImage("");
    setPrice("");
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Plant name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
