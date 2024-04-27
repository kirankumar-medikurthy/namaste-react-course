import React, { useState } from "react";
import { NAMASTE_FOOD_LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const handleBtnChange = () => {
    if (btnName == "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={NAMASTE_FOOD_LOGO_URL} alt="nameste foods" />
        <div className="logoName">Namaste Food</div>
      </div>

      <div className="nav-items-container">
        <ul>
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
