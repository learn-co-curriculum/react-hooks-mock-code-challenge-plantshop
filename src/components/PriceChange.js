import React, { useState } from "react"

function PriceChange({ id, currentPrice, onUpdatePrice }) {
  const [newPrice, setNewPrice] = useState(currentPrice)

  function handlePriceChange(event) {
    setNewPrice(parseFloat(event.target.value || 0))
  }

  function handlePriceUpdateChange() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlantData) => onUpdatePrice(updatedPlantData))
      .catch((error) => console.error("Fetch error:", error))
  }

  return (
    <div>
      <input
        type="number"
        name="price"
        step="0.01"
        placeholder={"Price"}
        onChange={handlePriceChange}
      />
      <button onClick={handlePriceUpdateChange}>Update Price</button>
    </div>
  )
}

export default PriceChange
