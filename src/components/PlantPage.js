import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API = "http://localhost:6001/plants"
function PlantPage() {

  const[plants, setPlants] = useState([])
  const[searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      // take the data from the fetch and set it to the state of plants 
      setPlants(data)
    })
  }, [])

  // take the state of `searchTerm` and filter plants based on that term
  function filterPlantsBySearch() {
    return plants.filter((plant) => {
      return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

  function renderNewPlant(newPlantFromPlantForm) {
    // 1. use the information from the newPlantForm component - newPlantFromPlantForm
    // 2. add it to the collection of existing plant - our state:  plants from line 9 

    const updatedPlantList = [...plants, newPlantFromPlantForm]
    
    //3. update plants state
    setPlants(updatedPlantList)
    // console.log(newPlantFromPlantForm)
  }

  return (
    <main>
      <NewPlantForm renderNewPlant={renderNewPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filterPlantsBySearch()} />
    </main>
  );
}

export default PlantPage;

// we want to change the list of plants that's rendered on the browser based on the search term -- search term is coming from user input
// 1. get the user input search term from the `Search` component to the `PlantPage`
  // grab the user input and change the state of `searchTerm` by `setSearchTerm` which lives in `PlantPage`
// 2. take the searchTerm state and filter which plants gets passed down to PlantList `filterPlantsBySearch`

