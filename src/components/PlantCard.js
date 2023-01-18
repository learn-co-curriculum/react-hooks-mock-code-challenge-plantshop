import React, {useState} from "react";

function PlantCard({card, onDeletePlant, onUpdatedPlant}) {
  const [inStock, setInStock] = useState("true")
  const {id, name, image, price} = card
  const [updatedPrice, setUpdatedPrice] = useState(price)

 const handleClick = () => {
  setInStock(!inStock);
 }

 function handleDeleteClick() {
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "DELETE",
  })
 onDeletePlant(id)
 }

 function handlePriceFormSubmit(e) {
  e.preventDefault()
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "PATCH",
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify({price: updatedPrice})
  })
  .then(response => response.json())
  .then(updatedPlant => onUpdatedPlant(updatedPlant))
 }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock? (
        <button className="primary" onClick={handleClick} >In Stock</button>
      ) : (
        <button onClick={handleClick}> Out Of Stock</button>
      )}
        <button onClick={handleDeleteClick}>Delete</button>
        <form onSubmit={handlePriceFormSubmit}>
          <label htmlFor="price">New Price</label>
          <input 
            type="number" 
            step="0.01" 
            id="price" 
            placeholder="New Price..."
            value={updatedPrice}
            onChange={e => setUpdatedPrice(parseFloat(e.target.value))}
            />
          <button type="submit">Update Price</button>
        </form>
    </li>
  );
}

export default PlantCard;
