import React from "react";

function Search({ renderSearch, searchTerm, setSearchTerm }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm} // controlled by from state
        onChange={(e) => setSearchTerm(e.target.value)} // changes state
      />
    </div>
  );

}

export default Search;
