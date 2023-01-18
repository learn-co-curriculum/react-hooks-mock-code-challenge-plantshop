import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState('')
  const filterPlants = plants.filter((plant) => plant.name.includes(searchPlant))


  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setPlants(data))
  }, [])

  const handleNewPlant = (addNewPlant) => {
    setPlants([...plants, addNewPlant])
  }



  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search searchPlant={searchPlant} onChangeSearch={setSearchPlant} />
      <PlantList plants={filterPlants}/>
    </main>
  );
}

export default PlantPage;
