import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <header>{routes}</header>
      </div>
    </HashRouter>
  );
}

export default App;
