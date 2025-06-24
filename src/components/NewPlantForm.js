import React, {useState} from "react"

function NewPlantForm({onAddNewPlant}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const updatedForm = {...formData, [name]: value}
    setFormData(updatedForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => onAddNewPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Plant name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
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
