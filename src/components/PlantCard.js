import React, { useState } from "react"

function PlantCard({ plant, onUpdate }) {
  const [isInStock, setIsInStock] = useState(true)
  const [isEditingPrice, setIsEditingPrice] = useState(false)

  const toggleIsInStock = () => {
    setIsInStock(!isInStock)
  }

  const handleClick = () => {
    setIsEditingPrice(!isEditingPrice)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const value = document.querySelector("#price-input").value

    fetch("http://localhost:6001/plants/" + plant.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: parseFloat(value) }),
    })
      .then((response) => response.json())
      .then(onUpdate)
      .then(() => setIsEditingPrice(!isEditingPrice))
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={handleClick}>Edit Price</button>

      {isEditingPrice && (
        <form onSubmit={handleSubmit}>
          <input id={"price-input"} defaultValue={plant.price} />
          <button type="submit">Save</button>
        </form>
      )}

      {isInStock ? (
        <button onClick={toggleIsInStock} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={toggleIsInStock}>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard
