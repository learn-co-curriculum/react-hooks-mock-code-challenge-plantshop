import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(setPlants)
  }, []);
  
  const addNewPlant = (addedPlant) => {
    setPlants([...plants, addedPlant])
  }

  const deletePlant = (id) => {
    const updatedPlants = plants.filter((plant) => plant.id !== id)
    setPlants(updatedPlants)
  }

  const updateSearch = (searchInput) => {
    setSearchTerm(searchInput)
  }

  let filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search searchTerm={searchTerm} updateSearch={updateSearch}/>
      <PlantList 
      plants={filteredPlants}
      onDeletePlants={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
