import React, { useEffect } from "react"
import PlantCard from "./PlantCard"

function PlantList({ onUpdate, plants, setPlants }) {
  useEffect(() => {
    fetch("http://localhost:6001/plants/")
      .then((response) => response.json())
      .then((plants) => setPlants(plants))
  }, [])

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} onUpdate={onUpdate} plant={plant} />
      ))}
    </ul>
  )
}

export default PlantList
