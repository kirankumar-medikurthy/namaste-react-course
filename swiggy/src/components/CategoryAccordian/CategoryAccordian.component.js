import React, { useState } from "react";
import "./CategoryAccordian.style.scss";
import { IMAGE_URL } from "../../utils/constants";

const CategoryAccordian = ({ itemCategory, show, setShow }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleClick = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    } else {
      setOpenIndex(null);
    }
  };
  return (
    <div className="category-accordian-container">
      {itemCategory?.map((item, index) => (
        <div className="accordian" key={`${item?.card?.card?.title}-${index}}`}>
          <div className="accordian-text" onClick={() => handleClick(index)}>
            <div>{item?.card?.card?.title}</div>
            <div>{"^"}</div>
          </div>
          {openIndex === index &&
            item?.card?.card?.itemCards?.map((subItem) => (
              <div
                className="accordian-list-container"
                key={subItem?.card?.info?.id}
              >
                <div className="accordian-list-left-container">
                  <div className="food-name">{subItem?.card?.info.name}</div>
                  <div className="food-price">
                    Rs.
                    {subItem?.card?.info?.price / 100 ||
                      subItem?.card?.info?.defaultPrice / 100}
                  </div>
                  <div className="food-rating">
                    {subItem?.card?.info?.ratings?.aggregatedRating?.rating}
                  </div>
                  <div className="food-description">
                    {subItem?.card?.info.description}
                  </div>
                </div>
                <div className="accordian-list-right-container">
                  <div className="food-image-container">
                    <img
                      className="food-image"
                      src={IMAGE_URL + subItem?.card?.info?.imageId}
                      alt={subItem?.card?.info.name}
                    />
                  </div>
                  <div className="AddBtn">ADD</div>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryAccordian;
