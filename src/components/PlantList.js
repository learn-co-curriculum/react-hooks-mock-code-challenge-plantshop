import React from "react"
import PlantCard from "./PlantCard"

const PlantList = ({ handleUpdatePlant, plants, setPlants, url }) => {

  const renderPlants = plants.map(({id, image, name, price}) => (
    <PlantCard
      key={id}
      id={id}
      image={image}
      name={name}
      price={price}
      handleUpdatePlant={handleUpdatePlant}
      setPlants={setPlants}
      url={url}
    />
  ))

  return (
    <ul className="cards">{plants && renderPlants}</ul>
  )
}

export default PlantList
