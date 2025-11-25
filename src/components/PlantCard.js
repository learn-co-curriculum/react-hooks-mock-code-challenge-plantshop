import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  return (
    <div className="plant-card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      <button onClick={() => onToggleSoldOut(plant.id)}>
        {plant.soldOut ? "Out of Stock" : "In Stock"}
      </button>

      <button className="delete-btn">🗑️ Delete</button>
    </div>
  );
}

export default PlantCard;
