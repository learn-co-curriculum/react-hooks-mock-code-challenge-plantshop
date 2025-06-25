import { useState } from "react";

function NewPlantForm({ addPlant }) {
  const defaultState = {
    name: "",
    image: "",
    price: 0,
  };
  const [plantData, setPlantData] = useState(defaultState);
  const updatePlantData = (e) => {
    setPlantData((currData) => {
      const newData = { ...currData };
      newData[e.target.name] =
        e.target.name === "price"
          ? Number.parseFloat(e.target.value)
          : e.target.value;
      return newData;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      plantData &&
      plantData.name.length > 0 &&
      plantData.image.length > 0 &&
      plantData.price >= 0
    ) {
      addPlant(plantData);
      setPlantData(defaultState);
    } else {
      alert("Missing information!");
    }
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantData.name}
          onChange={updatePlantData}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={plantData.image}
          onChange={updatePlantData}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantData.price}
          onChange={updatePlantData}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
