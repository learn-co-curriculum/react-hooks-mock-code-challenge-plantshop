import React, { useState } from "react";

function NewPlantForm({ onPlantSubmit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0.0);

  function handlePlantSubmit(e) {
    e.preventDefault();

    const plant = {
      name: name,
      image: image,
      price: parseFloat(price),
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Successfully posted => ", data);
        onPlantSubmit(data);
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePlantSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
