import logo from "./logo.svg";
import "./App.css";

function Body(props) {
  return (
    <div>
      <p>
        {props.title} and {props.num}
      </p>
      <p>{props.myObj.b}</p>
      <p>{props.myArr[0]}</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Body
          title="test title"
          num={5}
          myObj={{
            a: 5,
            b: 6,
          }}
          myArr={[23, 5, 34, 2]}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
