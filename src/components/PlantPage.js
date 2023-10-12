import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {v4 as uuid} from 'uuid'

function PlantPage() {
  const [allPlants, setAllPlants] = useState([]);

  function fetchPlants(){
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setAllPlants(data))
  }


  useEffect(() => {
    fetchPlants()
  }, [])


  const [newPlantData, setNewPlantData] = useState({
    id: 0,
    name: "",
    image: "",
    price: ""
  })

  function updatePrice(e){
    // console.log(e.target.parentNode.id)
    // console.log(e.target.parentNode.querySelector("input").value)
    if(e.target.parentNode.querySelector("input").value){
      fetch("http://localhost:6001/plants/" + e.target.parentNode.id, {
        method: "PATCH",
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          price: parseFloat(e.target.parentNode.querySelector("input").value)
        })
      }).then(r => r.json())
      .then(data => fetchPlants())
    }else{
      alert("Use A Number!")
    }

  }

  const [plantSearch, setPlantSearch] = useState("")

  function updateSearch(e){
    setPlantSearch(e.target.value);
  }


  function handleAddPlant(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlantData)
    }).then(res => res.json())
      .then(data => setAllPlants(allPlants.concat(newPlantData)))

    e.target.reset();
  }

  function handleNewPlantInput(e) {
    setNewPlantData({
      ...newPlantData,
      id : uuid(),
      [e.target.name]: e.target.value
    })

    // console.log(newPlantData)
  }

  function handleDelete(e){
    // console.log(e.target.parentNode.id)

    if(window.confirm("Are you sure?")){
    fetch("http://localhost:6001/plants/" + e.target.parentNode.id, {
      method: "DELETE"
    }).then(r => r.json())
    .then(data => fetchPlants())
    }
  }

  // console.log(allPlants)

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} handleNewPlantInput={handleNewPlantInput} />
      <Search updateSearch={updateSearch}/>
      <PlantList allPlants={allPlants} plantSearch={plantSearch} handleDelete={handleDelete} updatePrice={updatePrice}/>
    </main>
  );
}

export default PlantPage;
