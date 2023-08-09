import React, { useState } from "react";

function Search({ searchInput, onSearchInput }) {
  // const[searchInput, setSearchInput]
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchInput}
        placeholder="Type a name to search..."
        onChange={(e) => onSearchInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
