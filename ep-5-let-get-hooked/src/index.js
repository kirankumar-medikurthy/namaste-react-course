// import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.component";
import Body from "./components/Body.component";

/**
 *
 * Header
 *  - Logo
 *  - nav-items
 * Body
 *  - search
 *  - Restaurant container
 *      - Restaurant card container
 *          - food image
 *          - Name of restaurant, star rating, cuisine, delivery time, price
 * Footer
 *  - copy right
 *  - Links
 *  - Address
 *  - contact
 */

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <h1>welcome to the app layout</h1>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
