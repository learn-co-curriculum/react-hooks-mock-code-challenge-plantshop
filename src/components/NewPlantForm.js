import React from "react";

function NewPlantForm({ handleAddPlant, handleNewPlantInput }) {
  return (
    <div className="new-plant-form">
      <h2><span className="logo" role="img">
          🌱
        </span>
        {" "}
        New Plant
      </h2>
      
      <form onSubmit={handleAddPlant}>
        <input onChange={handleNewPlantInput} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleNewPlantInput} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleNewPlantInput} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
