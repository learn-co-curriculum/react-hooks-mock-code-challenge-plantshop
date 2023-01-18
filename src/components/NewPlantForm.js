import React,{useState} from "react";

function NewPlantForm({addPlant}) {

  const [plantForm, setPlantForm] = useState({
    name:"",
    image:"",
    price:""
  })

  function handleChange (e) {
    setPlantForm({
      ...plantForm,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit() {
    const newPlant = {
      name:plantForm.name,
      image:plantForm.image,
      price:plantForm.price
    }

    fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlant)
    })
    .then(response=> response.json())
    .then(addPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        value={plantForm.name}
        onChange={handleChange}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={plantForm.image}
        onChange={handleChange}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={plantForm.price}
        onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
