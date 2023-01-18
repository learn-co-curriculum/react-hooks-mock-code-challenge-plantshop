import React,{useState} from "react";

function PlantCard({plant,deletePlant, updatePrice}) {
  const [soldOut, setSoldOut] = useState(true)
  const {name, price, image,id} = plant
  const [newPrice, setNewPrice] = useState(price)
 
  function handleClick() {
    setSoldOut(prev => !prev)
  }

 
  function handleDelete() {
   fetch(`http://localhost:6001/plants/${id}`,{
    method: 'DELETE',
   })
   .then(response => response.json())
   .then(deletePlant(plant))
  }

  function priceClick(e) {
    setNewPrice(e.target.value)
  }

  function handleSubmit() {
    const changedPrice ={
      price: parseInt(newPrice)
    }
    fetch(`http://localhost:6001/plants/${id}`,{
      method:'PATCH', 
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(changedPrice)
    })
    .then(response => response.json())
    .then(updatePrice)
  }
  return (
    <li className="card" >
      <img src={image} alt={name} />
      <h4>{name}</h4>
      
        <form onSubmit={handleSubmit}> Price: $
          <input name="price" value={newPrice} onChange={priceClick}/>
          <button>Change Price </button>
        </form>
  
      {soldOut ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={(e) => handleDelete(e)}>Delete</button>
    </li>
  );
}

export default PlantCard;
