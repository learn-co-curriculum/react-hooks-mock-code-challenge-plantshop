import React, { useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm onSubmit={handleSubmit} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} setPlants={setPlants} />
    </main>
  )
}

export default PlantPage
