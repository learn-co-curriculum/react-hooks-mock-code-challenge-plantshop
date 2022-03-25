import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]) 
  //plants = what the data is 
  //setPlants = what changed value is
  //useState to empty version of that 
  const url = "http://localhost:6001/plants"
 

  
  useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, []) 
  //what going to have 

  return (
    <main>
  
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
