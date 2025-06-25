import React, {useState, useEffect} from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants))
  }, [])

  const handleNewPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  const filteredPlants = plants.filter((plant) => plant.name.includes(search))

  const handleDelete = (deletedPlantId) => {
    const updatedPlants = plants.filter((plant) => plant.id !== deletedPlantId)
    setPlants(updatedPlants)
  }

  const handlePriceChange = (updatedPlant) => {
    const updatedPlants = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    )
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleNewPlant} />
      <Search onSearch={setSearch} />
      <PlantList
        plants={filteredPlants}
        onDelete={handleDelete}
        onPriceChange={handlePriceChange}
      />
    </main>
  )
}

export default PlantPage
