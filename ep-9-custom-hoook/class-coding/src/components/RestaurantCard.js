import React from "react";
import { Link } from "react-router-dom";
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
              <Link to={`restaurant/${id}`}>
                <img
                  className="food-image"
                  src={
                    cloudinaryImageId
                      ? IMG_CDN_URL + cloudinaryImageId
                      : "https://placehold.co/300x300"
                  }
                  alt="food-image"
                />
              </Link>
              <Link to={`restaurant/${id}`}>
                <h2>{name}</h2>
              </Link>
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

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
