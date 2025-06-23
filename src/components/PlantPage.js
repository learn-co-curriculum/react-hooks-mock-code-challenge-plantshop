import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const fetchUrl = "http://localhost:6001/plants/";
  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((r) => r.json())
      .then((plants) => setPlantList(plants));
  }, []);

  const addPlant = (newPlant) => {
    const updatedList = [...plantList, newPlant];
    setPlantList(updatedList);
  };

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search />
      <PlantList plantList={plantList} />
    </main>
  );
}

export default PlantPage;
