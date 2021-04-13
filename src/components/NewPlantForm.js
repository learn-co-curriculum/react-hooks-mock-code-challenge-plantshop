import React, { useState } from "react";

function NewPlantForm({ renderNewPlant }) {

  const[newPlantName, setNewPlantName] = useState("")
  const[newPlantImage, setNewPlantImage] = useState("")
  const[newPlantPrice, setNewPlantPrice] = useState(0)

  const newPlant = {
    name: newPlantName,
    image: newPlantImage,
    price: newPlantPrice
  }

  function handleSubmit(e){
    e.preventDefault()
    // fetch is updating the backend: it is adding the new plant into our database
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(newPlantObj => 
      // `renderNewPlant` is sending the informtion to parent `PlantPage` and updating the frontend so we're able to see the new plant on the browser
      renderNewPlant(newPlantObj))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" value={newPlantName} onChange={e => setNewPlantName(e.target.value)} placeholder="Plant name" />
        <input type="text" name="image" value={newPlantImage} onChange={e => setNewPlantImage(e.target.value)} placeholder="Image URL" />
        <input type="number" name="price" step="0.01" value={newPlantPrice} onChange={e => setNewPlantPrice(e.target.value)} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
