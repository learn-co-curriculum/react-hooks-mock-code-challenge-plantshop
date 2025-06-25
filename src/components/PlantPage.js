import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getAllPlants().then(setPlants);
  }, []);

  const getAllPlants = async () => {
    return await fetch("http://localhost:6001/plants").then((r) => r.json());
  };

  const addPlant = (plantData) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      body: JSON.stringify(plantData),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((data) => setPlants((currPlants) => [...currPlants, data]));
  };

  const updatePlant = (id, updatedFields) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedFields),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((updatedPlant) => {
        setPlants((plants) =>
          plants.map((p) => (p.id === id ? updatedPlant : p)),
        );
      });
  };

  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPlants((currPlants) => currPlants.filter((p) => p.id !== id));
    });
  };

  const filterPlants = (searchTerm) => {
    getAllPlants().then((allPlants) => {
      const filteredPlants = allPlants.filter(
        (plant) =>
          plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          searchTerm === "",
      );
      setPlants(filteredPlants);
    });
  };

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search filterPlants={filterPlants} />
      <PlantList
        plants={plants}
        updatePlant={updatePlant}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;
