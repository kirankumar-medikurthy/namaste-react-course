import React from "react";
import "./ItemList.style.scss";

const ItemList = ({ items }) => {
  console.log("test kiran --->", "jkljlkjljchecking ===>", items);
  return (
    <div className="item-list-container">
      {items?.map((item) => (
        <div key={item?.card?.info?.id} className="item-list-container">{item?.card?.info?.name}</div>
      ))}
    </div>
  );
};

export default ItemList;
