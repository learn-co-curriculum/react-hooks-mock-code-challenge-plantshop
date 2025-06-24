import React, {useState} from "react"

function Search({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => setSearchTerm(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className="searchbar" onSubmit={handleSubmit}>
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
