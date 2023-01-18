import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {
  const plantCards = plantList.map(plant => {
   return <PlantCard
    name={plant.name}
    image={plant.image}
    price={plant.price}
    key={plant.id}
    />
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
