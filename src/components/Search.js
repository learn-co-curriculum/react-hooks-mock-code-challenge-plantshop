import React, {useState} from "react"

function Search({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => {
    const searchedPlant = e.target.value
    setSearchTerm(searchedPlant)
    onSearch(searchedPlant)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  )
}

export default Search
