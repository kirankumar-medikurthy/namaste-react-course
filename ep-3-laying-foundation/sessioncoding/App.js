import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");

//jsx: is a HTML like ro XML like syntax
const JsxHeading = () => {
  return <h1 className="heading">Namaste React using jsx</h1>;
};
console.log(heading);
// console.log(JsxHeading); // Both are the same react object
// React Functional Components
const ReactHeading = () => (<div className="container">
    {heading}
    {/* // self closing rendering react component */}
    <JsxHeading/>
    {/* // Function calling to render react components */}
    {JsxHeading()}
    {/* // JsxHeading component rendering using opening and closing tags or components */}
    <JsxHeading></JsxHeading> 
    <h1>Namaste react funcational components</h1>
</div>)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactHeading/>);
