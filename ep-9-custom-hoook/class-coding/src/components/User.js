import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <div>count: {count}</div>
      <div>count2: {count2}</div>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props?.location}</h3>
      <p>contact details: Kirankumar-medikurthy</p>
    </div>
  );
};

export default User;
