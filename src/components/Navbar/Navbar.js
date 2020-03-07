import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../Images/logo.png";
import hamburgermobile from "../../Images/hamburgermobile.png";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      readytouse: null,
      menuStatus: "closed"
    };
  }

  menuToggle = () => {
    if (this.state.menuStatus === "open") {
      this.setState({ menuStatus: "closed" });
    } else {
      this.setState({ menuStatus: "open" });
    }
    console.log(this.state.menuStatus);
  };

  render() {
    return (
      <div className="navbar">
        <div className="hamburger">
          <img src={logo} className="hammy-logo" alt="logo" />
          <button onClick={() => this.menuToggle()} id="hamburger-btn">
            <img src={hamburgermobile} className="hammy" alt="hamburger" />
          </button>
        </div>
        <div className="nav-left-side">
          <Link to="/">
            <img src={logo} className="nav-logo" alt="logo" />
          </Link>
          <Link to="/about-lua" className="nav-about-lua-paragraph">
            What's Lua?
          </Link>
        </div>
        <div className="nav-right-side">
          <Link to="/" className="nav-home-text">
            Home
          </Link>
          <Link to="/job-board" className="nav-job-board-text">
            Job Board
          </Link>
          <Link to="/blog" className="nav-job-board-text">
            Blog
          </Link>
          <Link to="/contact" className="nav-job-board-text">
            Contact
          </Link>
          <a
            href="https://jobs.trylua.com/devjobs/"
            target="_blank"
            className="newsletter-navbar-a-href"
          >
            Get Jobs Weekly
          </a>
        </div>
      </div>
    );
  }
}
