import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const allPlants = plants.map((plant) => {
    return <PlantCard key={plant.id} {...plant} />
  })

  return (
    <ul className="cards">{allPlants}</ul>
  );
}

export default PlantList;
