import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plants) => {
        console.log(plants);
        setPlants(plants);
      });
  }, []);

  function onAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function onSearchInput(searchText) {
    setSearchInput(searchText);
  }

  const plantsToDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchInput={searchInput} onSearchInput={onSearchInput} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
