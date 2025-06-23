import React, { useState } from "react";

function Search({ searchPlants }) {
  const [search, setSearch] = useState("");

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          searchPlants(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
