import React, { useState } from "react";

const Search = ({ handleSearch, searchInput }) => {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
