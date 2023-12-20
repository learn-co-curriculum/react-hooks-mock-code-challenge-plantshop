import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList( {plantArray}) {

  const displayArray = plantArray.map((plant)=>{ 
    return(
      <PlantCard key={plant.id} plant={plant}/>
    )
  })

  return (
    <ul className="cards">{displayArray}</ul>
  );
}

export default PlantList;
