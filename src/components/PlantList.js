import React from "react"
import PlantCard from "./PlantCard"

const PlantList = ({ plants }) => {

  const renderPlants = plants.map(({id, image, name, price}) => (
    <PlantCard
      key={id}
      id={id}
      image={image}
      name={name}
      price={price}
    />
  ))

  return (
    <ul className="cards">{plants && renderPlants}</ul>
  )
}

export default PlantList
