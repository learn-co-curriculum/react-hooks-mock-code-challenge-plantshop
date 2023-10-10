const Search = ({ searchTxt, handleSearchChange }) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchTxt}
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
