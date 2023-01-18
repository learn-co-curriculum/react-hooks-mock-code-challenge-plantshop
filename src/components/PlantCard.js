import React, { useState } from "react";

function PlantCard({plant}) {
  const [isInStock, setIsInStock] = useState(true)

  // toggle isInStock
  const handleInStock = () => {
    setIsInStock(isInStock => !isInStock)
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={handleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
