import React from "react";

function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Search created by dennis..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;