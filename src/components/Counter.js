import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div>count : {this.state.count}</div>
        <button onClick={this.handleButtonClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;
