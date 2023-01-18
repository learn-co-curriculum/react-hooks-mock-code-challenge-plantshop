import React, {useState} from "react";

function NewPlantForm({url, addNewPlant}) {
  // USESTATES
  const [plantName, setPlantName] = useState("")
  const [plantImageUrl, setPlantImageUrl] = useState("")
  const [plantPrice, setPlantPrice] = useState(0)

  // INPUT HANDLER FUNCTIONS
   function handlePlantName(e) {
    setPlantName(e.target.value)
   }

   function handlePlantImageUrl(e) {
    setPlantImageUrl(e.target.value)
   }

   function handlePlantPrice(e) {
    setPlantPrice(e.target.value)
   }

   // SUBMISSION HANDLER & POST REQUEST

   function handleSubmit(e) {
    e.preventDefault()
    const newPlant = {
      name: plantName,
      image: plantImageUrl,
      price: plantPrice,
    }

    // POST REQUEST
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(addNewPlant)
   }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <input type="text" name="name" placeholder="Plant name" value={plantName} onChange={handlePlantName} />
        <input type="text" name="image" placeholder="Image URL" value={plantImageUrl} onChange={handlePlantImageUrl} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantPrice} onChange={handlePlantPrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
