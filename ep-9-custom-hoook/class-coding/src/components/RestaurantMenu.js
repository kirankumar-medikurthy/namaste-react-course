import React, { useState, useEffect } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const { resId } = useParams();
  console.log('test kiran ---> checking ===>',resId);

  const fetchMenu = async () => {
    const restaurantApi = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const restaurantJsonResponse = await restaurantApi.json();
    console.log('test kiran --->', '111checking ===>',restaurantJsonResponse );
    setRestaurantName(restaurantJsonResponse?.data?.cards?.[0]?.card?.card?.text);
    setMenu(restaurantJsonResponse?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  if(menu.length == 0) {
    return <Shimer/>
  }
  
  return (
    <div className="Menu">
      <h2>{restaurantName}</h2>
      <div>Description of the Restaurant</div>
      <ul>
        {
            menu?.[2]?.card.card?.itemCards?.map((item)=><li key={item.card.info.id}>{item.card.info.name}</li>)
        }
        <li>Pizza</li>
        <li>Burger</li>
        <li>Diet choke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
