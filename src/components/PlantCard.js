import React, { useState } from "react"

function PlantCard({ plant, updatePlant }) {
  const { name, image, price } = plant
  const [soldOut, setSoldOut] = useState(plant.isSoldOut)
  const [newPrice, setNewPrice] = useState(price)

  const handleSoldOut = (e) => {
    e.preventDefault()
    updatePlant("edit", plant, "isSoldOut", !soldOut)
    setSoldOut(!soldOut)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputPrice = e.target.elements.price.value
    setNewPrice(inputPrice)
    updatePlant(plant, "price", parseInt(inputPrice))
    e.target.elements.price.value = ""
  }

  const handleDelete = (e) => {
    e.preventDefault()
    updatePlant("delete", plant)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {newPrice}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Enter New Price"
        />
        <button type="submit">Update Price</button>
      </form>
      {!soldOut ? (
        <button onClick={handleSoldOut} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleSoldOut}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete Plant</button>
    </li>
  )
}

export default PlantCard
