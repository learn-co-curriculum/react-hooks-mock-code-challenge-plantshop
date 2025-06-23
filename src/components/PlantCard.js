import React, { useState } from "react"
import InStockBtn from "./InStockBtn"

const PlantCard = ({ handleUpdatePlant, id, image, name, price}) => {
  const [isInStock, setIsInStock] = useState(true)
  const [isEditingPrice, setIsEditingPrice] = useState(false)

  const handleStockChange = () => {
    setIsInStock(!isInStock)
  }

  const togglePriceField = () => {
    setIsEditingPrice(prev => !prev);
  }

  const updatePlantPrice = (e) => {
    const newPrice = parseFloat(e.target.value)

    if (newPrice !== price) {
      fetch(`http://localhost:6001/plants/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ price: newPrice })
      })
        .then(res => res.json())
        .then(updatedPlant => {
          setIsEditingPrice(false)
          handleUpdatePlant(updatedPlant)
        })
    }
  }

  return (
    <li className="card" id={id}>
      <img src={image ? image : "https://via.placeholder.com/400"} alt={name ? name : "plant name"} />
      <h4>{name && name}</h4>
      <p>
        {isEditingPrice ? (
          <input
            type="number"
            defaultValue={price}
            onBlur={(e) => updatePlantPrice(e)}
          />
        ) : (
          <span  onClick={togglePriceField}>
            Price: ${price ? price : "no price listed"}
          </span>
        )}
      </p>
      <InStockBtn handleStockChange={handleStockChange} isInStock={isInStock}/>
    </li>
  );
}

export default PlantCard
