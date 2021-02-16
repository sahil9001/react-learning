import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { Component } from "react";
class App extends Component {
  state = {
    whichcomponenttoshow: "Counter",
  };
  render() {
    if (this.state.whichcomponenttoshow === "Counter") {
      return (
        <div className="App">
          <Counter />
          <button
            onClick={() => {
              this.setState({
                whichcomponenttoshow: "Header",
              });
            }}
          >
            Show header
          </button>
        </div>
      );
    } else if (this.state.whichcomponenttoshow === "Header") {
      return (
        <div className="App">
          <Header />
          <button
            onClick={() => {
              this.setState({
                whichcomponenttoshow: "Counter",
              });
            }}
          >
            Show Counter
          </button>
        </div>
      );
    }
  }
}

export default App;
