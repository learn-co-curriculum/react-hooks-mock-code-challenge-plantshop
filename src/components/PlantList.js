import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">{plants.map(plant => <PlantCard plant={plant} key={plant.id} />)}</ul>
  );
}

export default PlantList;
