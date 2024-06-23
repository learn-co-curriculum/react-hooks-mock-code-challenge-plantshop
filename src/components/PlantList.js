import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plantsList, onPlantDelete, onUpdatePrice }) {
  const displayPlants = plantsList.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        onPlantDelete={onPlantDelete}
        onUpdatePrice={onUpdatePrice}
      />
    )
  })

  return <ul className="cards">{displayPlants}</ul>
}

export default PlantList
