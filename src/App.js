import React from "react";
import logo from "./Images/logo.png";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter } from "react-router-dom";
import MainJobBoard from "./components/MainJobBoard/MainJobBoard";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <Navbar />
          <MainJobBoard />
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
