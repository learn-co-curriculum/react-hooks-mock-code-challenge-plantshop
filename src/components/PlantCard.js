import React, { useState } from "react";

function PlantCard( { plant }) {

  const [buttonToggle, setButtonToggle] = useState(true)

  function handleClick(){
    setButtonToggle(!buttonToggle)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {buttonToggle ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
