import React from 'react';
import ReactDOM from 'react-dom';
/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm a h1 tag</h1>
 *          <h2>I'm a h2 tag</h2>
 *      </div>
 *       <div id="child2">
 *          <h1>I'm a h1 tag</h1>
 *          <h2>I'm a h2 tag</h2>
 *      </div>
 * </div>
 */
const heading = document.createElement("h1");
heading.innerText = "Hello World! from the javascript !";
const rootElement = document.getElementById("root");
rootElement.appendChild(heading); //Creating a hellow world program from the react;
const reactHeading = React.createElement(
  "h1",
  {
    id: "mainHeading",
  },
  "Hello World from react!"
); // this is core part of the react to create element.
console.log(reactHeading); // it is an react object
const reactRoot = ReactDOM.createRoot(document.getElementById("root")); // ReactDOM is helpful to render the html content to browser for this purpose reactDom create root to render in the browser.
reactRoot.render(reactHeading); // render method is responsible for converting the object genderated from React.createElement into html tag i.e<h1>Hello world from react!</h1> and put inside the react and display it on the browser.

//create a commented section in the react;
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
   [React.createElement("h1", {}, "I'm  a h1 tag"),React.createElement("h2", {}, "I'm  a h2 tag")]
  ),React.createElement(
    "div",
    { id: "child2" },
   [React.createElement("h1", {}, "I'm  a h1 tag"),React.createElement("h2", {}, "I'm  a h2 tag")]
  )]
);
reactRoot.render(parent);
