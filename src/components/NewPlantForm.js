import React, { useEffect, useState } from "react";

function NewPlantForm( {addNewPlant} ) {

let initObj = {
  "name": "",
  "image": "",
  "price": 0
}

const [formData, setFormData] = useState(initObj)

function handleChange(event){
  const {name, value} = event.target
  setFormData({...formData, [name] : value})
}

function submitChange(event){
  event.preventDefault()
  
  fetch("http://localhost:6001/plants",{
    method : "POST",
    headers : {
      "Content-type" : "application/json"},
    body : JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => addNewPlant(data))
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitChange}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
