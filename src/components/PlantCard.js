import React, {useState} from "react";

function PlantCard({name, image, price, url, id, onClickDelete}) {
  // USESTATES
  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState(price)

  // INPUT HANDLERS
  function handleInStock() {
    setInStock(prev => !prev)
  }

  function handleNewPrice(e) {
    setNewPrice(e.target.value)
  }

  // PRICE UPDATE FORM & POST REQUEST
  function handleSubmit(e) {
    e.preventDefault();

    const updatedPrice = {
      price: e.target.newPrice.value
    }

    // PATCH REQUEST
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : 'application/json'
      },
      body: JSON.stringify(updatedPrice)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  // DELETION HANDLER
  function plantDeletion(e) {
      onClickDelete(id)
  }


  // RETURNS
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {newPrice}</p>
      <form onSubmit={handleSubmit}>
        <input type="number" step="0.01" name="price" value={newPrice} onChange={handleNewPrice}/>
      </form>
      {inStock ? (
        <button onClick={handleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
      <button onClick={plantDeletion}>DELETE</button>
    </li>
  );
}

export default PlantCard;
