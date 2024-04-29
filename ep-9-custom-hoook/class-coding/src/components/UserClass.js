import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleBtnChange = (value) => {
    const { count } = this.state;
    this.setState({ count: count + value });
  };
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <div>count: {count}</div>
        <button onClick={()=>this.handleBtnChange(1)}>increment</button>
        <button onClick={()=>this.handleBtnChange(-1)}>decrement</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <p>contact details: Kirankumar-medikurthy</p>
      </div>
    );
  }
}

export default UserClass;
