import React from "react";
import "./RestaurantMenuTitle.style.scss";

const RestaurantMenuTitle = (props) => {
  const {
    foodItem: {
      name,
      avgRatingString,
      totalRatingsString,
      costForTwoMessage,
      cuisines,
    },
  } = props;
  return (
    <div className="restaurant-title-container">
      <div className="restaurant-title">{name}</div>
      <div className="rastaurant-subtitle-container">
        <div className="price-rating">
          {avgRatingString} {totalRatingsString} • {costForTwoMessage}
        </div>
        <div className="cuisines">{cuisines?.join(",")}</div>
      </div>
    </div>
  );
};

export default RestaurantMenuTitle;
