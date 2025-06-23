import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isStocked, setIsStocked] = useState(true);

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStocked ? (
        <button className="primary" onClick={() => setIsStocked(!isStocked)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => setIsStocked(!isStocked)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
