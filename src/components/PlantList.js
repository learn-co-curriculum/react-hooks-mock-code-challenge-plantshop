import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantCard,currentPlants,onDeletePlant}) {
    
  const renderPlantCard=plantCard.map((onePlant)=>(
    <PlantCard 
      key={onePlant.id} 
      id={onePlant.id}
      plant={currentPlants} 
      name={onePlant.name} 
      image={onePlant.image} 
      price={onePlant.price} 
      onDeletePlant={onDeletePlant}
    />
  ))

  return (
    <ul className="cards">
      {renderPlantCard}
    </ul>
  );
}

export default PlantList;
