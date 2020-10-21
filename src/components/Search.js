import React from 'react';

var SearchBar = ({handleClick}) => (

  <div className="search-bar">
    <input type="text"
    placeholder="Search..." />
    <button
      className="search-button"
      type="submit"
      onClick={handleClick}>
      <span>Search</span>
    </button>
  </div>
)

export default SearchBar;