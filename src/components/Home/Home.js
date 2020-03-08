import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import MainJobBoard from "../MainJobBoard/MainJobBoard";
import Footer from "../Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* <Navbar /> */}
	<Hero />
        <MainJobBoard />
        <Footer />
      </div>
    );
  }
}
