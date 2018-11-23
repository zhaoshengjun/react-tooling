import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Heading } from "./Heading";
import { Button } from "./Button";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Heading>My App</Heading>
        <Button />
      </div>
    );
  }
}

export default App;
