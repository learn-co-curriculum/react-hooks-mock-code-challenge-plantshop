import React, {useState, useEffect} from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants))
  }, [])

  const handleNewPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]

    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleNewPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  )
}

export default PlantPage
