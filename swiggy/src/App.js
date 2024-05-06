import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header.component";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/Store/appStore";

const App = () => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    const data = {
      user_name: "kiranKumar",
      email: "kirankumarmedikurthy@gmail.com",
    };
    setUserInfo(data?.user_name);
  }, []);
  {
    /**Defalut value i.e Default User */
  }
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      {/** UserInfo : Kiran Kumar */}
      <div className="AppLayout">
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

export default App;
