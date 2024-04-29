import React, { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const restaurantApi = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const restaurantJsonResponse = await restaurantApi.json();
    setRestaurantName(
      restaurantJsonResponse?.data?.cards?.[0]?.card?.card?.text
    );
    setMenu(
      restaurantJsonResponse?.data?.cards?.[4]?.groupedCard?.cardGroupMap
        ?.REGULAR?.cards
    );
  };
  return { menu, restaurantName };
};

export default useRestaurantMenu;
