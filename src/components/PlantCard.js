import React, { useState } from "react";

function PlantCard({ plant, handleDelete, url, handlePriceUpdate }) {
  const { name, image, price, id } = plant;
  const [stock, setStock] = useState(true);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const handleStock = () => {
    setStock(!stock);
  };

  const handlePlantDelete = () => handleDelete(id);

  const handleUpdatedPrice = () => {
    fetch(`${url}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: Number(updatedPrice) }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => handlePriceUpdate(updatedPlant));
  };

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>
        Price: {price}
        <input
          type="number"
          value={updatedPrice}
          onChange={(event) => setUpdatedPrice(event.target.value)}
          onBlur={handleUpdatedPrice}
        />
        <button onClick={handleUpdatedPrice}>Update Price</button>
      </p>
      <button onClick={handleStock} className={`${stock ? "primary" : ""}`}>
        {stock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={() => handlePlantDelete(id)}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
