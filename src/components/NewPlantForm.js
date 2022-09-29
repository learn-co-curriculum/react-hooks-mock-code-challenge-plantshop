import React,{useState} from "react";


//I can add a new Plant to the page by submitting the form
  //have listener and handler for each input
  //inputs onChange
  //create state for the inputs
  //value atribute on the input is assigned to the state
  //state is updated to what was changed in the input

  //have listner and handler for form
  //form submit
  //render PlantCard to DOM info from form by updating state of plants in the plant page
  //post to db to persist and get id

    //create a function to pass to the NewPlantForm that will update the state of plants.
    //the new state of plants will be an array of the old state plus an newObject that is added to the end of the array
      //new object is going to be the response data from the post

  

function NewPlantForm({handleAddPlant}) {

    const[name,setName]= useState("")
    const[image,setImage]=useState("")
    const [price,setPrice]=useState("")

    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:6001/plants",{
          method: "POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({
            name:name,
            image:image,
            price: price,
          }),
        })
        .then(res=>res.json())
        .then((newPlant)=>{handleAddPlant(newPlant)})
    }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="name" 
            placeholder="Plant name" 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
        <input 
            type="text" 
            name="image" 
            placeholder="Image URL" 
            value={image}
            onChange={(e)=>setImage(e.target.value)}
          />
        <input 
            type="number" 
            name="price" 
            step="0.01" 
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
