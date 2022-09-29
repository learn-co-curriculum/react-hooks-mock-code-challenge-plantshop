import React,{useState} from "react";

function PlantCard({name,image,price,id,onDeletePlant}) {
  const [outOfStock,setOutOfStock]=useState(true)
  // const [isDelete,setIsDelete]=useState(true)

  function handleStock(){
    setOutOfStock((outOfStock)=>!outOfStock)
  }
  
  function handleDelete(id){
      fetch(`http://localhost:6001/plants/${id}`,{
        method:"DELETE",
      })
      onDeletePlant(id)
  }
  
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={() => (handleDelete(id))}>Delete</button>
      {outOfStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>sold out</button>
      )}
    </li>
  );
}

export default PlantCard;
