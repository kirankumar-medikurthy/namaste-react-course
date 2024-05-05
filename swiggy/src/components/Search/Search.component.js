import React from "react";
import "./Search.style.scss";

const Search = ({searchTxt, setSearchTxt, handleRefinedRestaurantData}) => {
    const handleChange = (e) => {
        setSearchTxt(e.target.value);
    }
  return (
    <div className="search-container">
      <div className="search-bar">
        <input className="inputText" type="text" placeholder="what are you looking for?" onChange={handleChange} value={searchTxt}/>
      </div>
      <button className="searchBtn" onClick={handleRefinedRestaurantData}>Search</button>
    </div>
  );
};

export default Search;
