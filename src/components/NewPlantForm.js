import React, { useState } from "react"

function NewPlantForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  const handleChange = ({ target: { name, value, type } }) => {
    if (type === "number") value = parseFloat(value)

    setFormData({ ...formData, [name]: value })
  }

  // ** Functionally the same as above **
  // const handleChange = (event) => {
  //   // if I type the letter "a" into the image input:
  //   const name = event.target.name // "image" (name of the input)
  //   let value = event.target.value // "a" (new value of the input)

  //   // When the user types into the price input,
  //   // turn the value into a Float
  //   if (event.target.type === "number") value = parseFloat(value)

  //   const newFormData = { ...formData, [name]: value }
  //   // newFormData = { name: "", image: "a", price: "" }
  //   setFormData(newFormData)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:6001/plants/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((plant) => onSubmit(plant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Plant name"
          value={formData.name}
        />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="Image URL"
          value={formData.image}
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          step="0.01"
          placeholder="Price"
          value={formData.price}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
