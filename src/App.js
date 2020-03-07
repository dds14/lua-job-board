import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import BottomNavbar from "./components/Navbar/BottomNavbar/BottomNavbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <header>{routes}</header>
        <BottomNavbar />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
