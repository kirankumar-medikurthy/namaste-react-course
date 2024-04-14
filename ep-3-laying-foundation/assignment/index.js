
// import the react and reactDOM
import React from "react";
import ReactDOM from "react-dom";

//Header section
const HeaderComponent = () => {
    return <div className="headerContainer">
        <div className="logo">
            {/* <img src="https://placehold.co/100x30" alt="userlogo" /> */}
            6thStreet
        </div>
        <div className="search-bar">
            <input type="text" className="search-input" placeholder="what are you looking for?" />
        </div>
        <div className="user-icon">
            <img src="https://placehold.co/30x30" alt="user-icon"/>
            <div className="user-name">kiran kumar medikurthy</div>
        </div>
    </div>
}

//create a react element;

const reactElementContent = React.createElement('div', {className:'title'},[
    React.createElement('h1',{},"Namaste React H1"),
    React.createElement('h2',{},"Namaste React H2"),
    React.createElement('h3',{},"Namaste React H3"),
])

// create a jsx element
const jsxReactElement = (<div className="title">
    {reactElementContent}
    <h1>Namaste React using jsx element H1</h1>
    <h2>Namaste React using jsx element H2</h2>
    <h3>Namaste React using jsx element H3</h3>
</div>)

//creating using functional components

const FunctionalReactElement = () => (<div className="title">
<HeaderComponent />
{jsxReactElement}
<h1>Namaste React using functional components H1</h1>
<h2>Namaste React using functional components H2</h2>
<h3>Namaste React using functional components H3</h3>
</div>)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(FunctionalReactElement());