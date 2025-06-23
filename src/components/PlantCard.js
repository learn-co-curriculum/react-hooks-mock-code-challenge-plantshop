import React, { useState } from "react";

function PlantCard({ plant, handleDelete }) {
  const { name, image, price, id } = plant;
  const [stock, setStock] = useState(true);

  const handleStock = () => {
    setStock(!stock);
  };

  const handlePlantDelete = () => handleDelete(id);

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleStock} className={`${stock ? "primary" : ""}`}>
        {stock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={() => handlePlantDelete(id)}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
