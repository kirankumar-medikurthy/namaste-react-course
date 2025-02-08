import { useState } from "react";
import Interest from "../Interest";
import Profile from "../Profile";
import Settings from "../Settings";
import TabForms from "./TabForms.component";
const TabFormsContainer = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "kiran",
    age: 25,
    email: "kiran@gmail.com",
    interest: ["coding", "music", "bike riding"],
    theme: "dark",
  });
  const interest_list = [
    {
      label: "Coding",
      name: "coding",
    },
    {
      label: "Music",
      name: "music",
    },
    {
      label: "Bike Raiding",
      name: "bikeRaiding",
    },
    {
      label: "Movies",
      name: "movies",
    },
    {
      label: "Rain Dancing",
      name: "rainDancing",
    },
  ];
  const navigation_list = [
    {
      tabName: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data?.name || data?.name?.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data?.age || data?.age < 12) {
          err.age = "age is not valid";
        }
        if (!data?.email || data?.email?.length < 2) {
          err.email = "email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      tabName: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interest?.length < 1) {
          err.interest = "Select atleast 2 interest";
        }
        setErrors(err);
        return err.interest ? false : true;
      },
    },
    {
      tabName: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const handleCurrentTabChange = (currentTabIndex) => {
    setCurrentTab(currentTabIndex);
  };
  const handleSubmit = () => {
    console.log("test data", data);
  };
  const handlePrevNextButtonClick = (value) => {
    if (navigation_list?.[currentTab].validate()) {
      setCurrentTab((prev) => prev + value);
    }
  };
  const containerProps = {
    navigation_list,
    currentTab,
    data,
    interest_list,
    errors,
  };
  const containerMethods = {
    setCurrentTab,
    setData,
    setErrors,
    handleCurrentTabChange,
    handleSubmit,
    handlePrevNextButtonClick,
  };
  return (
    <TabForms
      containerProps={containerProps}
      containerMethods={containerMethods}
    />
  );
};

export default TabFormsContainer;
