import React, { useState, useEffect } from "react";

const EditPlantForm = ({ plant, editPlant, setIsEditing }) => {
  const [name, setName] = useState(plant.name);
  const [image, setImage] = useState(plant.image);
  const [price, setPrice] = useState(plant.price);

  useEffect(() => {
    setName(plant.name);
    setImage(plant.image);
    setPrice(plant.price);
  }, [plant]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedPlant = {
      name: name,
      image: image,
      price: parseFloat(price),
    };
    editPlant(plant.id, editedPlant);
  };

  return (
    <div className="plant-form">
      <h2>Edit Plant</h2>
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
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditPlantForm;
