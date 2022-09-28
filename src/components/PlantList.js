import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantCard}) {
    
  const renderPlantCard=plantCard.map((onePlant)=>(
    <PlantCard key={onePlant.id} name={onePlant.name} image={onePlant.image} price={onePlant.price} />
  ))

  return (
    <ul className="cards">
      {renderPlantCard}
    </ul>
  );
}

export default PlantList;
