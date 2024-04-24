import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { MENU_DATA } from "../Utils/mockData";
const Body = () => {
  const data =  Object.values(MENU_DATA.data.menu?.items) || []
  const [menuData, setMenuData] = useState(data);
  const handleClick = ()=> {
      const filterData = data.filter((data)=> data.price > 27500);
      setMenuData(filterData);
      console.log('test kiran ---> checking ===>',filterData);
  }
  return (
    <div className="body-container">
      <div className="search-container">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Food
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard menuData={menuData} />
      </div>
    </div>
  );
};
export default Body;
