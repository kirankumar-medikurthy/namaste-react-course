import React, { useState } from "react";
import ItemList from "../ItemList/ItemList.component";
import "./RestaurantCategory.style.scss";

const RestaurantCategory = (props) => {
//   const [show, setShow] = useState(false);
const {showRestaurantItem,setOpenIndex} = props;
  const handleClick = () => {
    setOpenIndex()
  };
  console.log("test kiran --->RestaurantCategory", "9999checking ===>", props);
  return (
    <div className="restaurantCategory-container">
      <div className="accordian-title" onClick={handleClick}>
        <span>{props.item?.card?.card?.title}</span>
        {showRestaurantItem ? <span>&#x2193;</span> : <span>&#x2191;</span>}
      </div>
      {showRestaurantItem && <ItemList items={props?.item?.card?.card?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
