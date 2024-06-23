import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plantsList, setPlantsList] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const filteredPlants = plantsList.filter((plant) =>
    plant.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plantData) => setPlantsList(plantData))
  }, [])

  function handlePlantSearch(search) {
    setSearchInput(search)
  }

  function handleSubmitForm(newPlant) {
    setPlantsList([...plantsList, newPlant])
  }

  function handlePriceUpdate(updatedPlant) {
    const updatedPlantList = plantsList.map((plant) => {
      return plant.id === updatedPlant.id ? updatedPlant : plant
    })
    setPlantsList(updatedPlantList)
  }

  function handleDeletePlant(id) {
    const updatedPlantList = plantsList.filter((plant) => plant.id !== id)
    setPlantsList(updatedPlantList)
  }

  return (
    <main>
      <NewPlantForm onHandleSubmitForm={handleSubmitForm} />
      <Search onSearch={handlePlantSearch} />
      <PlantList
        plantsList={filteredPlants}
        onPlantDelete={handleDeletePlant}
        onUpdatePrice={handlePriceUpdate}
      />
    </main>
  )
}

export default PlantPage
