import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, url, onClickDelete}) {

  const plantCards = plantList.map(plant => {
   return <PlantCard
     id={plant.id}
    name={plant.name}
    image={plant.image}
    price={plant.price}
    key={plant.id}
    url={url}
    onClickDelete={onClickDelete}
    />
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
