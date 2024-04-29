import React, { useState } from "react";
import { NAMASTE_FOOD_LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import  useOnlineStatus  from "../Utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const handleBtnChange = () => {
    if (btnName == "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };
  const statusValue  = useOnlineStatus() ? "green" : "red";
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={NAMASTE_FOOD_LOGO_URL} alt="nameste foods" />
        <div className="logoName">Namaste Food</div>
      </div>

      <div className="nav-items-container">
        <ul>
          <li style = {{width : "initial", height : "20px", borderRadius:"50%", backgroundColor: statusValue}}>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About Us</Link></li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
          <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button className="login-btn" onClick={handleBtnChange}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
