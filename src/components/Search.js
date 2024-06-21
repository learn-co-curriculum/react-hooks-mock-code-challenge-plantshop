import React, { useState } from "react"

function Search({ plants, setPlants, originalPlants }) {
  const [search, setSearch] = useState("")

  function handleSearchChange(event) {
    const newSearchValue = event.target.value
    setSearch(newSearchValue)
    if (newSearchValue === "") {
      setPlants(originalPlants)
    } else {
      const plantsToDisplay = plants.filter((plant) =>
        plant.name.includes(search)
      )
      setPlants(plantsToDisplay)
    }
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Search
