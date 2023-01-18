import React from "react";

function Search({searchPlant, onChangeSearch}) {

  const handleSearch = (e) => {
    onChangeSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
