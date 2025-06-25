import React from "react"
import PlantCard from "./PlantCard"

function PlantList({plants, onDelete}) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default PlantList
