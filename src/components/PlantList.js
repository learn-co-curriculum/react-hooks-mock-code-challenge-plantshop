import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchedPlant, setPlants, url }) {
  const renderPlants = () =>
    filteredPlants.map((plant) => (
      <PlantCard
        key={plant.id}
        plant={plant}
        handleDelete={handleDelete}
        url={url}
        handlePriceUpdate={handlePriceUpdate}
      />
    ));

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchedPlant.toLowerCase())
  );

  const handleDelete = (id) => {
    fetch(`${url}${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => deletePlant(id));
  };

  const deletePlant = (id) => {
    const updatedplants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedplants);
  };

  const handlePriceUpdate = (updatedPlant) => {
    const updatedPlants = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    );
    setPlants(updatedPlants);
  };

  return <ul className="cards">{renderPlants()}</ul>;
}

export default PlantList;
