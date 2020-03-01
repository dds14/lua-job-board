import React from "react";
import logo from "./Images/logo.png";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MainJobBoard from "./components/MainJobBoard/MainJobBoard";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <Navbar />
          <Hero />
          <MainJobBoard />
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
