import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const PlantPage = () => {
  const [allPlants, setAllPlants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:6001/plants")
        .then((resp) => resp.json())
        .then((data) => setAllPlants(data))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  const handleAddPlant = (plant) => setAllPlants([...allPlants, plant]);

  const handleSearchChange = (e) => setSearchTxt(e.target.value);

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search searchTxt={searchTxt} handleSearchChange={handleSearchChange} />
      <PlantList searchTxt={searchTxt} allPlants={allPlants} />
    </main>
  );
};

export default PlantPage;
