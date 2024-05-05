import React from "react";
import "./RestaurantCard.style.scss";
import { IMAGE_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = ({ RestaurantCardData }) => {
  return (
    <div className="restaurant-card-container">
      {RestaurantCardData?.map(
        ({
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
        }) => (
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
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RestaurantCard;
