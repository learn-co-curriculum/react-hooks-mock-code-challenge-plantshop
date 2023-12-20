import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantArray, setPlantArray] = useState([])
  const [filteredPlantArray, setFilteredPlantArray] = useState(plantArray)

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(setPlantArray)
  },[])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(setFilteredPlantArray)
  },[])

  function addNewPlant(plant){
    setPlantArray([...plantArray, plant])
  }

  function handleFilter(filterString){
    setFilteredPlantArray(plantArray.filter((plant) => 
    (plant.name.toLowerCase().startsWith(filterString.toLowerCase()))))
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search handleFilter={handleFilter}/>
      <PlantList plantArray={filteredPlantArray}/>
    </main>
  );
}

export default PlantPage;
