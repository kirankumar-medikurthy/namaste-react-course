import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_RESTAURANT_DATA_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantData, setRestaurantData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    try {
      const swiggyResponse = await fetch(SWIGGY_RESTAURANT_DATA_URL);
      const jsonResponse = await swiggyResponse.json();
      const refinedData =
        jsonResponse?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantData(refinedData);
      setMenuData(refinedData);
      setIsLoading(false);
      console.log('test kiran --->', '111checking ===>', jsonResponse,refinedData);
    } catch (e) {
      console.error("Swiggy API Failed", e);
      setRestaurantData([]);
      setMenuData([]);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log('test kiran --->', 'checking ===>',useOnlineStatus());
  const handleClick = () => {
    const filterData = restaurantData?.filter(({ info: { avgRating } }) => {
      if (avgRating > 4.3) {
        return true;
      } else {
        return false;
      }
    });
    setMenuData(filterData);
  };

  const filterBtnClick = () => {
    const filterData = restaurantData?.filter(({ info: { name } }) => {
      if (name?.toLowerCase().includes(searchText?.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setMenuData(filterData);
  };

  return (
    <div className="body-container">
      <div className="search-container">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Food
        </button>
        <div>
          <input
            type="text"
            className="searchText"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button onClick={filterBtnClick}>Search</button>
        </div>
      </div>
      <div className="res-container">
        <RestaurantCard menuData={menuData} isLoading={isLoading} />
      </div>
    </div>
  );
};
export default Body;
