import React from "react";
import "./RestaurantCard.style.scss";
import { IMAGE_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  console.log('test kiran --->', 'checking ===>', props);
  const {
    info: {
      areaName,
      avgRatingString,
      cloudinaryImageId,
      costForTwo,
      cuisines,
      id,
      name,
      sla: { slaString },
    },
  } = props?.RestaurantCardData;
  return (
    <div className="restaurant-card-container">
          <div key={id} className="restaurant-card">
            <div className="image-container">
              <Link to={`/restaurant/${id}`}>
                <img
                  className="item-image"
                  src={IMAGE_URL + cloudinaryImageId}
                  alt={name}
                />
              </Link>
            </div>
            <div className="card-body">
              <div className="food-name">
                <Link to={`/restaurant/${id}`}>{name}</Link>
              </div>
              <div className="rating-delivery-container">
                <span className="rating">{avgRatingString}</span>
                <span className="delivey-time">{slaString}</span>
              </div>
              <div className="cusines">{cuisines.join(",")}</div>
              <div className="price">{costForTwo}</div>
              <div className="area">{areaName}</div>
              <div>{props?.loggedInUser}</div>
            </div>
          </div>
    </div>
  );
};

// Higher Order component
//input: RestaurantCard
//output: RestaurantCard with promoted Label ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    console.log('test kiran --->', '1010checking ===>', props);
    return (
      <div>
        <label className="promoted-label">promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
