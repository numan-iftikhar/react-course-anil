import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <h2>React Class Component</h2>
        <h3>count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count !
        </button>
      </div>
    );
  }
}

export default App;
