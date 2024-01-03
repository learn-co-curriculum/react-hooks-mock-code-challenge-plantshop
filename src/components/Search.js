import React, { useState } from "react";

function Search( {handleFilter} ) {

  const [searchString, setSearchString] = useState("")

  function handleChange(event){
    handleFilter(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
