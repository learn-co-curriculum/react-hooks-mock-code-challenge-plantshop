import React, { useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])

  const handleSubmit = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm onSubmit={handleSubmit} />
      <Search />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  )
}

export default PlantPage
