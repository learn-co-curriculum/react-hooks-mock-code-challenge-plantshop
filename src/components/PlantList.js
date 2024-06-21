import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plants, setPlants }) {
  function handleUpdatePlant(updatedPlant) {
    const updatedPlants = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    )
    setPlants(updatedPlants)
  }

  const displayAllPlants = plants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plants={plants}
        plant={plant}
        onUpdatePlant={handleUpdatePlant}
        setPlants={setPlants}
      />
    )
  })

  return <ul className="cards">{displayAllPlants}</ul>
}

export default PlantList
