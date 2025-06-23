import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, selectPlant, deletePlant }) {
  return (
    <ul className="cards">
      {plantList.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          selectPlant={selectPlant}
          deletePlant={deletePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
