import React, { useState } from "react";

function PlantCard({ plant, selectPlant }) {
  const [isStocked, setIsStocked] = useState(true);

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <div id="button-group">
        {isStocked ? (
          <button className="primary" onClick={() => setIsStocked(!isStocked)}>
            In Stock
          </button>
        ) : (
          <button onClick={() => setIsStocked(!isStocked)}>Out of Stock</button>
        )}
        <button onClick={() => selectPlant(plant)}>Edit</button>
        <button id="delete-button">x</button>
      </div>
    </li>
  );
}

export default PlantCard;
