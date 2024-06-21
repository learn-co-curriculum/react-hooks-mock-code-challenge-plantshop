import React, { useState } from "react"

function NewPlantForm({ originalPlants, setPlants }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: null,
  })

  function handleOnChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const plantData = {
      name: formData.name,
      image: formData.image,
      price: formData.price,
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((r) => r.json())
      .then((newPlant) => handleAddPlant(newPlant))
  }

  function handleAddPlant(newPlant) {
    setPlants([...originalPlants, newPlant])
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleOnChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handleOnChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
