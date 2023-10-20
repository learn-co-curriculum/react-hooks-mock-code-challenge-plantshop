import React, { useState } from "react";

function PlantCard(plant) {
  const [isInStock, setIsInStock] = useState(true)
  return (
    <li id={plant.id} className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: <span onClick={() => console.log("Price clicked!")}>{isInStock? [plant.price] : "Not In Stock"}</span></p>
      {isInStock ? (
        <button onClick = {() => setIsInStock(!isInStock)} className="primary">In Stock</button>
      ) : (
        <button onClick = {() => setIsInStock(!isInStock)}>Out of Stock</button>
      )}
      <button className="secondary" onClick={plant.handleDelete}>Delete</button>
      <br />
      <input type="number" placeholder="Enter New Price"></input> <button className="secondary" onClick={plant.updatePrice}>Update Price</button>
    </li>
  );
}

export default PlantCard;
