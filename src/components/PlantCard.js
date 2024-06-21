import React, { useState } from "react"

function PlantCard({ onUpdatePlant, setPlants, plants, plant }) {
  const { name, image, price, id } = plant
  const [soldOut, setSoldOut] = useState(true)
  const [newPrice, setNewPrice] = useState(price)

  function handleSoldOutClick() {
    setSoldOut((prevSoldOut) => !prevSoldOut)
  }

  function handlePriceOnChange(event) {
    setNewPrice(event.target.value)
  }

  function handlePriceChangeClick(event) {
    event.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: newPrice,
      }),
    })
      .then((r) => r.json())
      .then((updatedPlants) => {
        onUpdatePlant(updatedPlants)
        setNewPrice("")
      })
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(handleDelete(id))
  }

  function handleDelete(deletedPlant) {
    const updatedListings = plants.filter((plant) => plant.id !== deletedPlant)
    setPlants(updatedListings)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick={handleSoldOutClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleSoldOutClick}>Out of Stock</button>
      )}
      <br></br>
      <button onClick={handleDeleteClick}>Delete Plant</button>
      <form onSubmit={handlePriceChangeClick}>
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Change price..."
          value={newPrice}
          onChange={handlePriceOnChange}
        />
        <button type="submit" className="primary">
          Submit Price Change
        </button>
      </form>
    </li>
  )
}

export default PlantCard
