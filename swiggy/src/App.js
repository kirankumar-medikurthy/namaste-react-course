import React from "react";
import Header from "./components/Header/Header.component";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
