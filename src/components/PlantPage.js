import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // USESTATES
  const [plantList, setPlantList] = useState([])
  const [searchPlant, setSearchPlant] = useState("")

  function handleSearchPlant(e) {
    setSearchPlant(e.target.value)
  }

  const searchPlantList = plantList.filter(plant => {
    return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  })

  // GET REQUEST
  const url =  "http://localhost:6001/plants"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPlantList(data))
  })

  function addNewPlant(newPlant) {
    const newData = [...plantList, newPlant]
    setPlantList(newData)
  }

  // COMPONENTS BEING RETURNED
  return (
    <main>
      <NewPlantForm url={url} addNewPlant={addNewPlant}/>
      <Search searchPlant={searchPlant} onSearchPlant={handleSearchPlant}/>
      <PlantList plantList={searchPlantList} />
    </main>
  );
}

export default PlantPage;
