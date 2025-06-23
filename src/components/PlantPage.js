import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants/")
      .then((r) => r.json())
      .then((plants) => setPlantList(plants));
  }, []);

  const addPlant = (newPlant) => {
    const updatedList = [...plantList, newPlant];
    setPlantList(updatedList);
  };

  const searchPlants = (search) => {
    if (search !== "") {
      setIsSearching(true);
      setSearchResults(
        plantList.filter((plant) =>
          plant.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setIsSearching(false);
    }
  };

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchPlants={searchPlants} />
      <PlantList plantList={isSearching ? searchResults : plantList} />
    </main>
  );
}

export default PlantPage;
