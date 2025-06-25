import React from "react"

function Search({ searchTerm, setSearchTerm }) {
  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  )
}

export default Search
