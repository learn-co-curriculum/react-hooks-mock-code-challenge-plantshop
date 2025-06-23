import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, selectPlant }) {
  return (
    <ul className="cards">
      {plantList.map((plant) => (
        <PlantCard key={plant.id} plant={plant} selectPlant={selectPlant} />
      ))}
    </ul>
  );
}

export default PlantList;
