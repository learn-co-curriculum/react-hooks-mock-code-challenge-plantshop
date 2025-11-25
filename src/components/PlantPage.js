import React from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, onToggleSoldOut, searchTerm, onSearchChange }) {
  return (
    <main>
      <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <NewPlantForm onAddPlant={onAddPlant} />
      <PlantList plants={plants} onToggleSoldOut={onToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
