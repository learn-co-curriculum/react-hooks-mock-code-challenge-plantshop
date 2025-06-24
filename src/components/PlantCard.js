import React, {useState} from "react"

function PlantCard({name, image, price}) {
  const [isAvailable, setIsAvailable] = useState(true)

  const handleAvailableClick = () => {
    setIsAvailable(!isAvailable)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isAvailable ? (
        <button onClick={handleAvailableClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleAvailableClick}>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard
