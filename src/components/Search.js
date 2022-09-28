import React from "react";
// import PlantCard from "./PlantCard";

function Search({searchPlant, setSearchPlant}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={(e)=> setSearchPlant(e.target.value)}
      />
    </div>
  );
}

export default Search;
