import React from "react";
import logo from "./Images/logo.png";
import JobBoard from "./components/JobBoard/JobBoard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lua | Jobs for Bootcamp Grads</h1>
        <JobBoard />
      </header>
    </div>
  );
}

export default App;
