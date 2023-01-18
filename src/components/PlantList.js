import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDeletePlant, onUpdatedPlant}) {

  const plantCard = plants.map(card => <PlantCard key={card.id} card={card} onDeletePlant={onDeletePlant} onUpdatedPlant={onUpdatedPlant}/>);

  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
