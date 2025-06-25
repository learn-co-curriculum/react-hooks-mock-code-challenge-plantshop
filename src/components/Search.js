function Search({ filterPlants }) {
  const updateSearchResults = (e) => {
    filterPlants(e.target.value);
  };
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={updateSearchResults}
      />
    </div>
  );
}

export default Search;
