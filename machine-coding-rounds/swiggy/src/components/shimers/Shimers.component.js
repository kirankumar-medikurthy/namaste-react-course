import React from "react";
// import "./Shimers.style.scss";
const Shimers = ({shimerCount = 10}) => {
  const numberofShimer = new Array(shimerCount).fill(0);
  console.log('test kiran --->', '555checking ===>',numberofShimer);
  return (
    <div className="shimer-container">
      {numberofShimer?.map((e, i) => (
        <div className="restaurant-card-container" key={i}></div>
      ))}
    </div>
  );
};

export default Shimers;
