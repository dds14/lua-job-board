import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import MainJobBoard from "../MainJobBoard/MainJobBoard";
import Footer from "../Footer/Footer";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="home">
        {/* <Navbar /> */}
        <Hero />
        {/* <MainJobBoard /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}
