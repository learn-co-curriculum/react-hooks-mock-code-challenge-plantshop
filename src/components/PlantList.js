import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant, onUpdatePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard
            key={plant.id}
            plant={plant}
            onDeletePlant={onDeletePlant}
            onUpdatePlant={onUpdatePlant}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;
