import React from "react";
import { NAMASTE_FOOD_LOGO_URL } from "../Utils/constants"
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src={NAMASTE_FOOD_LOGO_URL}
          alt="nameste foods"
        />
        <div className="logoName">Namaste Food</div>
      </div>

      <div className="nav-items-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
