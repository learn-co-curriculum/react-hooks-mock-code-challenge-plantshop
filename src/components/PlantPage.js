import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import EditPlantForm from "./EditPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const fetchUrl = "http://localhost:6001/plants/";
  const [plantList, setPlantList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState({});

  useEffect(() => {
    fetch(fetchUrl)
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

  const selectPlant = (plantObj) => {
    setSelectedPlant(plantObj);
    setIsEditing(true);
  };

  const editPlant = (id, editedPlant) => {
    fetch(fetchUrl + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPlant),
    })
      .then((r) => r.json())
      .then((result) => {
        const plantListCopy = [...plantList];
        setPlantList(
          plantListCopy.map((plant) =>
            plant.id === result.id ? result : plant
          )
        );
      });
  };

  return (
    <main>
      {isEditing ? (
        <EditPlantForm
          plant={selectedPlant}
          editPlant={editPlant}
          setIsEditing={setIsEditing}
        />
      ) : (
        <NewPlantForm addPlant={addPlant} />
      )}
      <Search searchPlants={searchPlants} />
      <PlantList
        plantList={isSearching ? searchResults : plantList}
        selectPlant={selectPlant}
      />
    </main>
  );
}

export default PlantPage;
