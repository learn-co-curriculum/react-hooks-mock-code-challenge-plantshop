import React from "react";
import PlantCard from "./PlantCard";

function PlantList({allPlants, plantSearch, handleDelete, updatePrice}) {

  let plantsToShow = allPlants.filter(plant => plant.name.toLowerCase().startsWith(plantSearch.toLowerCase()))
  return (
    <ul className="cards">{/* render PlantCards components in here */}
      {plantsToShow.map(plant => {
          return <PlantCard 
            handleDelete={handleDelete}
            updatePrice={updatePrice}
            key={plant.id} 
            id={plant.id}
            name={plant.name}
            image={plant.image}
            price = {plant.price}
            />  
      })}
    </ul>
  );
}

export default PlantList;
