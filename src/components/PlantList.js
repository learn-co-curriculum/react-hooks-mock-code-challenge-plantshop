import React from "react"
import PlantCard from "./PlantCard"

function PlantList({plants, onDelete, onPriceChange}) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onDelete={onDelete}
          onPriceChange={onPriceChange}
        />
      ))}
    </ul>
  )
}

export default PlantList
