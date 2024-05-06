import React, { useState, useEffect, useContext } from "react";
import { SWIGGY_RESTAURANT_API } from "../../utils/constants";
import "./RestaurantListing.style.scss";
import Shimers from "../shimers/Shimers.component";
import RestaurantCard, {
  withPromotedLabel,
} from "../RestaurantCard/RestaurantCard.component";
import Search from "../../components/Search/Search.component";
import UserContext from "../../utils/userContext";

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
  // Promoted HigherOrderComponent
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserInfo } = useContext(UserContext);
  console.log("test kiran --->", "checking ===>", refinedRestaurantList);
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
          <div className="input">
            <label>UserName</label>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setUserInfo(e.target.value)}
              value={loggedInUser}
            />
          </div>
          <div className="restaurantlist-header">
            <div className="header-text">{headerText}</div>
          </div>
          {/** if restauratant is promoted add promoted */}
          <div className="restaurant-list-menu">
            {refinedRestaurantList?.map((item) =>
              item?.info?.id == "10576" ? (
                <RestaurantCardPromoted
                  RestaurantCardData={item}
                  key={item?.info?.id}
                />
              ) : (
                <RestaurantCard
                  RestaurantCardData={item}
                  key={item?.info?.id}
                  loggedInUser={loggedInUser}
                />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantListing;
