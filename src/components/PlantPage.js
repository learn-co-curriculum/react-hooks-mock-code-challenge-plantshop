import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({}) {
  const url = "http://localhost:6001/plants";

  const [plants, setPlants] = useState([]);
  const [searchedPlant, setSearchedPlant] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
      });
  }, []);

  const handleNewPlant = (newplant) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newplant),
    })
      .then((res) => res.json())
      .then((newplant) => {
        setPlants([...plants, newplant]);
      });
  };

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search setSearchedPlant={setSearchedPlant} />
      <PlantList plants={plants} searchedPlant={searchedPlant} />
    </main>
  );
}

export default PlantPage;
