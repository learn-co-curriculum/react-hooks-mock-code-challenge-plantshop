import React, { useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  let host = 'http://localhost:6001'

  useEffect(()=>{
    fetch(`${host}/plants`)
    .then(res => res.json())
    .then(data => console.log(data))
  })
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
