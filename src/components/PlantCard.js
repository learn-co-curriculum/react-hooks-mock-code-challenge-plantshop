import React, { useState } from "react";

function PlantCard({ name, price, image }) {

  const[isNotSold, setIsNotSold] = useState(true)

  function handleClick() {
    console.log("clicked!")
    setIsNotSold(!isNotSold)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isNotSold ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );

}

export default PlantCard;
