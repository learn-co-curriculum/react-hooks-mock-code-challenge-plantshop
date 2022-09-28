import React,{useState} from "react";

function PlantCard({name,image,price}) {
  const [outOfStock,setOutOfStock]=useState(true)

  function handleStock(){
    setOutOfStock((outOfStock)=>!outOfStock)
  }
  
  
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {outOfStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>sold out</button>
      )}
    </li>
  );
}

export default PlantCard;
