import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isStocked, setIsStocked] = useState(true);

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <div id="button-group">
        {isStocked ? (
          <button className="primary" onClick={() => setIsStocked(!isStocked)}>
            In Stock
          </button>
        ) : (
          <button onClick={() => setIsStocked(!isStocked)}>Out of Stock</button>
        )}
        <button>Edit</button>
        <button id="delete-button">x</button>
      </div>
    </li>
  );
}

export default PlantCard;
