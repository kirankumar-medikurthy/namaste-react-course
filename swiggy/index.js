import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/components/HomePage/HomePage.component";
import AboutUs from "./src/components/AboutUs/AboutUs.component";
import ErrorPage from "./src/components/ErrorPage/ErrorPage.component";
import RestaurantMenu from "./src/components/RestaurantMenu/RestaurantMenu.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
  },
]);
root.render(<RouterProvider router={routes} />);
