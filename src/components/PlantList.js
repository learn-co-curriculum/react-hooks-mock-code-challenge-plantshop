import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArr }) {
  return (
    <ul className="cards">
      {plantArr.map((plant) => (
        <PlantCard plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
