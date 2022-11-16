import React from 'react';
import '../index.css';
import './searchbar.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
  
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
        className="input"
      />
      {value && <button className='btn' onClick={clearSearch}>Erase search</button>}
      <button className='btn'>Find Article</button>
    </form>
  </div>
);

export default SearchBar;