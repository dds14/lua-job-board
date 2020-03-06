import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <header>{routes}</header>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
