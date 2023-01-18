import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

 const [plants, setPlants] = useState([])
 const [search, setSearch] = useState("")

 useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then((res) => res.json())
  .then(data => setPlants(data))
 },[])


 const addPlant = (newPlant) => {
  const updatedPlants = [...plants, newPlant];
  setPlants(updatedPlants)
 }

 const handleDeletePlant = (id) => {
  const updatedPlantsArray = plants.filter(plant => plant.id !== id)
  setPlants(updatedPlantsArray)
 }
 const filteredPlants = plants.filter(plant => {
  return plant.name.toLowerCase().includes(search.toLowerCase())
 });

function handleUpdatePlant(updatedPlant) {
  const updatedPlantsArray = plants.map(plant => {
    if (plant.id === updatedPlant.id) {
      return updatedPlant
    } else {
      return plant;
    }

  })
  setPlants(updatedPlantsArray)
 }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants = {filteredPlants} onDeletePlant={handleDeletePlant} onUpdatedPlant={handleUpdatePlant} />
    </main>
  );
}

export default PlantPage;
