import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState(null)
  const [searchedPlants, setSearchedPlants] = useState(null)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((r) => setPlants(r))
  }, [])

  const filterPlants = (search) => {
    setSearchedPlants(
      plants.filter((plant) => plant.name.toLowerCase().includes(search))
    )
  }

  const createPlant = (newPlant) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newPlant),
    }
    fetch("http://localhost:6001/plants", options)
      .then((resp) => resp.json())
      .then((r) => setPlants([...plants, r]))
  }

  const editPlant = (plant, key, value) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...plant, [key]: value }),
    }
    fetch(`http://localhost:6001/plants/${plant.id}`, options).then((resp) =>
      resp.json()
    )
  }

  const deletePlant = (plant) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
    fetch(`http://localhost:6001/plants/${plant.id}`, options).then(
      setPlants(plants.filter((item) => item !== plant))
    )
  }

  const updatePlant = (change, plant, key, value) => {
    if (change === "delete") {
      deletePlant(plant)
    } else if (change === "edit") {
      editPlant(plant, key, value)
    }
  }

  if (!plants) return <h1>loading...</h1>
  return (
    <main>
      <NewPlantForm createPlant={createPlant} />
      <Search filterPlants={filterPlants} />
      <PlantList
        plants={searchedPlants ? searchedPlants : plants}
        updatePlant={updatePlant}
      />
    </main>
  )
}

export default PlantPage
