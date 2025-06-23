import React from "react"
import PlantCard from "./PlantCard"

const PlantList = ({ handleUpdatePlant, plants }) => {

  const renderPlants = plants.map(({id, image, name, price}) => (
    <PlantCard
      key={id}
      id={id}
      image={image}
      name={name}
      price={price}
      handleUpdatePlant={handleUpdatePlant}
    />
  ))

  return (
    <ul className="cards">{plants && renderPlants}</ul>
  )
}

export default PlantList
