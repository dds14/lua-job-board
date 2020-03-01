import React from "react";
import logo from "./Images/logo.png";
import JobBoard from "./components/JobBoard/JobBoard";
import MainJobBoard from "./components/MainJobBoard/MainJobBoard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <JobBoard /> */}
        <MainJobBoard />
      </header>
    </div>
  );
}

export default App;
