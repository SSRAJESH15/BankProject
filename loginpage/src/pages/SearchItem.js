import React from 'react'
import '../css/Home.css';

const SearchItem = ({search,setSearch}) => {

  const handleSearch = () => {
    setSearch(search);
  };
  
  return (
      <div className="search-bar">
          <input 
          type="text" 
          id='search'
          role='searchbox'
          placeholder="Search..." 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
  );
}

export default SearchItem
