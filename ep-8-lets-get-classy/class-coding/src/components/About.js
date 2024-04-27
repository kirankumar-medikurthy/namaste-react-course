import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <User name={"kiran kumar medikurthy(function)"} location={"kalikiri"}/>
      <UserClass name={"Kiran Kumar Medikurthy(class component)"} location={"bangalore"} />
    </div>
  );
};
export default About;
