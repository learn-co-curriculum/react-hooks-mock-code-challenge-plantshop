import React, { useState } from "react"

function NewPlantForm({ onHandleSubmitForm }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleFormChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPlantData) => onHandleSubmitForm(newPlantData))
      .catch((error) => console.error("Fetch error:", error))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleFormChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handleFormChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
