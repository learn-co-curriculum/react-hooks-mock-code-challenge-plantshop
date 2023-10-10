import { useState } from "react";

const PlantCard = ({ name, image, price }) => {
  const [isInStock, setIsInStock] = useState(true);
  const handleClick = () => setIsInStock((prev) => !prev);

  return (
    <li className="card" onClick={handleClick}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
};

export default PlantCard;
