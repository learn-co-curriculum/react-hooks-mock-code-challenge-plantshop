import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ handleAddPlants }) {
  const [plants, setPlants] = useState([]);
  const [newPlants, setNewPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm
        newPlants={plants}
        savedNewPlant={handleAddPlants}
        setNewPlants={setPlants}
      />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
