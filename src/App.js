import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MainJobBoard from "./components/MainJobBoard/MainJobBoard";
import "./App.css";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          {routes}
          {/* <Navbar />
          <Hero />
          <MainJobBoard /> */}
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
