import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const renderPlants = () =>
    plants.map((plant) => <PlantCard key={plant.id} plant={plant} />);

  return <ul className="cards">{renderPlants()}</ul>;
}

export default PlantList;
