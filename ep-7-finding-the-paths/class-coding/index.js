import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

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
// const Header = () => {
//   return (
//     <div className="header-container">
//       <div className="logo-container">
//         <img className="logo" src="https://placehold.co/100x100" alt="nameste foods" />
//         <div className="logoName">Namaste Food</div>
//       </div>

//       <div className="nav-items-container">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = () => {
//     return (<div className="restaurant-card-container">
//         <img classname="food-image"src="https://placehold.co/300x300" alt="food-image" />
//         <h2>Megana Foods</h2>
//         <div className="cuisine-container">
//             <div>Briyani</div>
//             <div>North Indian</div>
//             <div>South Indian</div>
//             <div>Hydrabed Briyani</div>
//         </div>
//         <div className="rating">
//             4.4 stars
//         </div>
//         <div className="delivery">
//             35 minutes
//         </div>
//         <div className="price">
//             Rs: 450
//         </div>
//      </div>)
// }

// const Body = () => {
//     return (<div className="body-container">
//         <div className="search-container"></div>
//         <div className="res-container">
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//         </div>
//     </div>)
// }

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <h1>welcome to the app layout</h1>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
