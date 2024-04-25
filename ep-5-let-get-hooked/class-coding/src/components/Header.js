import React, { useState } from "react";
import { NAMASTE_FOOD_LOGO_URL } from "../Utils/constants";
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>cart</li>
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
