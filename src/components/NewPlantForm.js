import React, { useState } from "react";

function NewPlantForm({ updatePlants }) {
  // create states for input values : name, image, price

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const [isEmpty, setIsEmpty] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let newPlant = { name, image, price };
    console.log(newPlant);

    if ((name.length > 0) & (image.length > 0) & (price.length > 0)) {
      fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "content-type": "Application/json",
        },
        body: JSON.stringify(newPlant),
      })
        .then((res) => res.json())
        .then((data) => updatePlants(data));
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }

  function handleImage(e) {
    setImage(e.target.value);
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={handleImage}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>

      <p style={{ color: "red" }}>
        {isEmpty ? "* Fields cannot be empty" : ""}
      </p>
    </div>
  );
}

export default NewPlantForm;
