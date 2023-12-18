import React from "react";

function Search({ updateSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={updateSearch}
      />
    </div>
  );
}

export default Search;
