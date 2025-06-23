import React, { useState } from "react"

const NewPlantForm = ({ handleAddPlant, url }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: 0.0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(newPlant => {
        handleAddPlant(newPlant);
        setFormData({ name: '', image: '', price: 0.0 });
      })
  }

  return (
    <div className="new-plant-form" onSubmit={handleSubmit}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm;
