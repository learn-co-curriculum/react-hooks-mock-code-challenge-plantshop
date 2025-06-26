import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isPlants, setIsPlants] = useState(false);
  const [isEditingPrice, setEditingPrice] = useState(false);
  function handleClick() {
    setEditingPrice(!isEditingPrice);
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isPlants ? (
        <button onClick={handleClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}> Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
