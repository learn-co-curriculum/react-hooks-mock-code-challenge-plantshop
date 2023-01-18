import React from "react";

function Search({searchPlant, onSearchPlant}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={(e) => {
          console.log("Searching...");
          onSearchPlant
        }}
      />
    </div>
  );
}

export default Search;
