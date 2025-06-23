import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

const PlantPage = () => {
  const [plants, setPlants] = useState([])
   const [searchInput, setSearchInput] = useState('')

  const url = 'http://localhost:6001/plants/'

  useEffect(() => {
    fetch(url)
      .then(res=>res.json())
      .then(setPlants)
  }, [])

  const handleAddPlant = (plant) => {
    setPlants([...plants, plant])
  }

  const handleSearch = (search) => {
    setSearchInput(search)
  }

  const handleUpdatePlant = (updatedPlant) => {
    setPlants(prev =>
      prev.map(p => p.id === updatedPlant.id ? updatedPlant : p)
    );
  }

  const filterPlants = plants.filter((plant) => (
      plant.name.toLowerCase().includes(searchInput.toLowerCase())
  ))

  let listingsToDisplay = searchInput ? filterPlants : plants

  return (
    <main>
      <NewPlantForm
        handleAddPlant={handleAddPlant}
        url={url}
      />
      <Search
        handleSearch={handleSearch}
        searchInput={searchInput}
      />
      <PlantList plants={listingsToDisplay} handleUpdatePlant={handleUpdatePlant}/>
    </main>
  );
}

export default PlantPage;
