import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [originalPlants, setOriginalPlants] = useState([])

  const getPlants = () => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plants) => {
        setPlants(plants)
        setOriginalPlants(plants)
      })
  }

  useEffect(() => {
    getPlants()
  }, [])

  return (
    <main>
      <NewPlantForm
        plants={plants}
        setPlants={setPlants}
        originalPlants={originalPlants}
      />
      <Search
        plants={plants}
        setPlants={setPlants}
        originalPlants={originalPlants}
      />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  )
}

export default PlantPage
