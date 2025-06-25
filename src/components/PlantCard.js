import React, {useState} from "react"

function PlantCard({plant, onDelete, onPriceChange}) {
  const [isAvailable, setIsAvailable] = useState(true)
  const [newPrice, setNewPrice] = useState("")

  const handleAvailableClick = () => {
    setIsAvailable(!isAvailable)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(plant.id))
  }

  const handleChangePriceClick = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({price: newPrice}),
    })
      .then((r) => r.json())
      .then((updatedPlant) => {
        onPriceChange(updatedPlant)
        setNewPrice("")
      })
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price: {plant.price}
        <input
          type="number"
          step="0.01"
          value={newPrice}
          placeholder="Enter New Price"
          onChange={(e) => setNewPrice(parseFloat(e.target.value) || 0)}
        />
        <button onClick={handleChangePriceClick} value="price">
          Update Price
        </button>
      </p>
      {isAvailable ? (
        <button onClick={handleAvailableClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleAvailableClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  )
}

export default PlantCard
