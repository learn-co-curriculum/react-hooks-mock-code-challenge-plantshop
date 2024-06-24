import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plants, updatePlant }) {
  const displayPlants = () =>
    plants.map((plant) => (
      <PlantCard key={plant.id} plant={plant} updatePlant={updatePlant} />
    ))

  return <ul className="cards">{displayPlants()}</ul>
}

export default PlantList
