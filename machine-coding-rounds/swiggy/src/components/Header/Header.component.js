import React, { useContext, useState } from "react";
// import "./Header.style.scss";
import { NAMASTE_FOOD_DEVELIRY_WEP_APP_LOGO } from "../../utils/constants";
import { Link } from "react-router-dom";
import { checkOnlineState } from "../../utils/onlinestatus";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const handleBtnTextChange = () => {
    if (btnText == "Login") {
      setBtnText("Logout");
    } else {
      setBtnText("Login");
    }
  };
  const { loggedInUser } = useContext(UserContext);
  // subscribing the store to get cart items,using the useSelector hook;
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="homepage-container">
      <div className="header-logo-container">
        <img
          className="header-logo"
          src={NAMASTE_FOOD_DEVELIRY_WEP_APP_LOGO}
          alt="namaste-food-logo"
        />
        <div className="header-title">Namaste Food Order App</div>
      </div>
      <div className="header-navigation-container">
        <ul className="header-navigation-group">
          <li className="online-status">
            Status:{" "}
            <span
              className="dot"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: checkOnlineState() ? "red" : "black",
              }}
            ></span>
          </li>
          <li className="header-navigation-title">
            <Link to="/">Home</Link>
          </li>
          <li className="header-navigation-title">
            <Link to="/about">About Us</Link>
          </li>
          <li className="header-navigation-title">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="header-navigation-title">
            <Link to="/cart">Cart({cartItems?.length} items)</Link>
          </li>
          <li className="header-navigation-title" onClick={handleBtnTextChange}>
            <Link to="/login">
              <button>{btnText}</button>
            </Link>
          </li>
          <li className="header-navigation-title">
            <Link to="#">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
