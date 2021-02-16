import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state);
  };
  decrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div>count : {this.state.count}</div>
        <button onClick={this.increment}>Increament</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
