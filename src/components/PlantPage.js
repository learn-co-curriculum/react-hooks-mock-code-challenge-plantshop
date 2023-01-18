import React,{useState, useEffect}from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search,setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(setPlants)
  },[])

  function addPlant(newPlant) {
    setPlants([
      ...plants,
      newPlant
    ])
  }

 const searchedPlant= plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
    
  function deletePlant(plantToDelete) {
    setPlants(plants.filter(plant => plant.id !== plantToDelete.id))
  }
function updatePrice(priceToUpdate) {
  setPlants(plants.map(plant => plant.id === priceToUpdate.id?  priceToUpdate : plants.price))
}
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search ={search} setSearch={setSearch}/>
      <PlantList 
      plants={searchedPlant} 
      deletePlant={deletePlant} 
      updatePrice={updatePrice}
     />
    </main>
  );
}

export default PlantPage;
