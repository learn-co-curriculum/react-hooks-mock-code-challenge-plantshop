import React, {useEffect,useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantCard,setPlantCard]=useState([])
  // const[newForm,setNewForm]=useState(false) 

  const [searchPlant,setSearchPlant]=useState("")


  function loadData(){
    fetch ('http://localhost:6001/plants')
      .then((resp)=>resp.json())
      .then((data)=>setPlantCard(data))
  }

  useEffect(() =>{loadData()},[])

  function handleAddPlant(newPlant){
    const updatePlants=[...plantCard,newPlant];
    setPlantCard(updatePlants);
  }

  const currentPlants=plantCard.filter(plant=>{
    return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  })

  function handleDeletePlant(id){
    const updatedPlantsArray=plantCard.filter((plant)=>plant.id !==id);
    setPlantCard(updatedPlantsArray)
  }
  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search searchPlant={searchPlant} setSearchPlant={setSearchPlant} />
      <PlantList plantCard={plantCard} currentPlants={currentPlants} onDeletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
