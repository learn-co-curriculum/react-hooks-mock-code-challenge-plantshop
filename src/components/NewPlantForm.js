import React, { useState } from "react"

function NewPlantForm({ createPlant }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0,
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setNewPlant({ ...newPlant, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
