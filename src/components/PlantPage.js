import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect is a function that takes two arguments: 1. callback function 2. dependency array

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function updatePlants(newPlant) {
    console.log(newPlant, "this came from a child and we have it here.");
    setPlants([...plants, newPlant]);
  }

  function onSearch(searchTerm) {
    setSearch(searchTerm);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm updatePlants={updatePlants} />
      <Search onSearch={onSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
