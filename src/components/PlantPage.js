import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //setter
  const [plants, setPlants] = useState([])


  //import all plants useEffect so it doesnt rerender only one fetch
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(setPlants)
  }, [])


const addNewPlant = (addedPlant)=>{
  setPlants([...plants, addedPlant])
}

  return (
    <main>
      <NewPlantForm 
      addNewPlant={addNewPlant}
      />
      <Search />
      <PlantList
        plants={plants}
      />
    </main>
  );
}

export default PlantPage;
