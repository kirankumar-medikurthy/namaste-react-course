import React, { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_API } from "../../utils/constants";
import "./RestaurantListing.style.scss";
import Shimers from "../shimers/Shimers.component";
import RestaurantCard from "../RestaurantCard/RestaurantCard.component";
import Search from "../../components/Search/Search.component";

const RestaurantListing = () => {
  const [headerText, setHeaderText] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTxt, setSearchTxt] = useState("");
  const [refinedRestaurantList, setRefinedRestaurantList] = useState([]);
  useEffect(() => {
    getRestaurantList();
  }, []);
  const getRestaurantList = async () => {
    try {
      const swiggyRespone = await fetch(SWIGGY_RESTAURANT_API);
      const restaurantData = await swiggyRespone.json();
      const Title = restaurantData?.data?.cards?.[2]?.card.card.title;
      const restaurantsLists =
        restaurantData?.data?.cards?.[4]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants;
      setHeaderText(Title);
      setRestaurant(restaurantsLists);
      setIsLoading(false);
      setRefinedRestaurantList(restaurantsLists);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };
  const handleRefinedRestaurantData = () => {
    const refinedData = restaurant?.filter((item) => {
      if (item?.info?.name?.toLowerCase().includes(searchTxt?.toLowerCase())) {
        return item;
      }
    });
    setRefinedRestaurantList(refinedData);
  };
  return (
    <div className="restaurantlist-container">
      {isLoading ? (
        <Shimers />
      ) : (
        <>
          <Search
            searchTxt={searchTxt}
            setSearchTxt={setSearchTxt}
            handleRefinedRestaurantData={handleRefinedRestaurantData}
          />
          <div className="restaurantlist-header">
            <div className="header-text">{headerText}</div>
          </div>
          <RestaurantCard RestaurantCardData={refinedRestaurantList} />
        </>
      )}
    </div>
  );
};

export default RestaurantListing;
