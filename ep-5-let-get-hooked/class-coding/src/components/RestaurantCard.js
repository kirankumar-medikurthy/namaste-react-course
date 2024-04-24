import React from "react";

import { IMG_CDN_URL } from "../Utils/constants"
const RestaurantCard = (props) => {
  const data = props.menuData;
  console.log('test kiran ---> checking ===>', data);
  const renderCard = () => {
    return data?.map(({name,cloudinaryImageId,category,price,description}) => {
      return (
        <div className="restaurant-card-container">
          <img
            className="food-image"
            src={
              cloudinaryImageId
                ? IMG_CDN_URL + cloudinaryImageId
                : "https://placehold.co/300x300"
            }
            alt="food-image"
          />
          <h2>{name}</h2>
          <div className="cuisine-container">
            <div>Briyani</div>
            <div>North Indian</div>
            <div>South Indian</div>
            <div>Hydrabed Briyani</div>
          </div>
          <div className="rating">4.4 stars</div>
          <div className="delivery">35 minutes</div>
          <div className="price">Rs: ${price}</div>
        </div>
      );
    });
  };
  return renderCard();
};
export default RestaurantCard;
