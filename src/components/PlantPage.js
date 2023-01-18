import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //setter
  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant]=useState('')


  //import all plants useEffect so it doesnt rerender only one fetch
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(setPlants)
  }, [])


const addNewPlant = (addedPlant)=>{
  setPlants([...plants, addedPlant])
}

const searchFilter = (searchInput) =>{
  setSearchPlant(searchInput)
}
let filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchPlant))


  return (
    <main>
      <NewPlantForm 
      addNewPlant={addNewPlant}
      />
      <Search 
      searchPlant={searchPlant}
      searchFilter={searchFilter}
      />
      <PlantList
        plants={filteredPlants}
      />
    </main>
  );
}

export default PlantPage;
