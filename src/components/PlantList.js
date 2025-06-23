import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList }) {
  return (
    <ul className="cards">
      {plantList.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
