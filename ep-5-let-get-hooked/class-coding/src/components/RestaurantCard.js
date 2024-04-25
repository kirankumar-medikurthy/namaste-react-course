import React from "react";

import { IMG_CDN_URL } from "../Utils/constants";
import Shimer from "./Shimer";
const RestaurantCard = (props) => {
  const data = props.menuData;
  const renderCard = () => {
    return props?.isLoading ? (
      <Shimer />
    ) : (
      data?.map(
        ({
          info: {
            id,
            avgRating,
            cloudinaryImageId,
            name,
            cuisines,
            costForTwo,
          },
        }) => {
          return (
            <div className="restaurant-card-container" key={id}>
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
                <div>{cuisines?.join(", ")}</div>
              </div>
              <div className="rating">{avgRating}</div>
              <div className="delivery">35 minutes</div>
              <div className="price">Rs:{costForTwo.split("for two")[0]}</div>
            </div>
          );
        }
      )
    );
  };
  return renderCard();
};
export default RestaurantCard;
