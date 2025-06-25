import React, {useState} from "react"

function PlantCard({plant, onDelete}) {
  const [isAvailable, setIsAvailable] = useState(true)

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

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
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
