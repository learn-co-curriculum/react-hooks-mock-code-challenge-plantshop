import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
//setter
const  [plants, setPlants]= useState([])


//import all plants 
useEffect(()=>{
  fetch('http://localhost:6001/plants')
  .then(res => res.json())
  .then(setPlants)
},[])




  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList
      plants={plants}
       />
    </main>
  );
}

export default PlantPage;
