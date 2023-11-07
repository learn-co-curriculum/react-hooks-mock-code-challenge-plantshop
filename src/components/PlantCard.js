import React from "react";
import MarkAsSold from "./MarkAsSold";

function PlantCard() {
  return (
    <li className="card">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h4>{"plant name"}</h4>
      <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}

      <MarkAsSold />
    </li>
  );
}

export default PlantCard;
