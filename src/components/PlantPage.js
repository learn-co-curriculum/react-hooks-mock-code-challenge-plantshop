import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {

  // fetch and render
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((plants) => {
      console.log(plants);
      setPlants(plants);
    });
  }, []);

  // this is the POST  
  function onAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }
  
  // this is the search deliverable
  const [searchInput, setSearchInput] = useState("");
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
