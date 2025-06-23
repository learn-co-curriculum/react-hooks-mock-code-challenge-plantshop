import React, { useState } from "react"
import InStockBtn from "./InStockBtn"

const PlantCard = ({ id, image, name, price}) => {
  const [isInStock, setIsInStock] = useState(true)

  const handleStockChange = () => {
    setIsInStock(!isInStock)
  }

  return (
    <li className="card" id={id}>
      <img src={image ? image : "https://via.placeholder.com/400"} alt={name ? name : "plant name"} />
      <h4>{name && name}</h4>
      <p>Price: {price ? price : "no price listed"}</p>
      <InStockBtn handleStockChange={handleStockChange} isInStock={isInStock}/>
    </li>
  );
}

export default PlantCard
