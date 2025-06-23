import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchedPlant }) {
  const renderPlants = () =>
    filteredPlants.map((plant) => <PlantCard key={plant.id} plant={plant} />);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchedPlant.toLowerCase())
  );

  return <ul className="cards">{renderPlants()}</ul>;
}

export default PlantList;
