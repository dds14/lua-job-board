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
      readytouse: null
    };
  }

  render() {
    return (
      <div className="navbar">
        <div className="hamburger">
          <img src={logo} className="hammy-logo" alt="logo" />
          <img src={hamburgermobile} className="hammy" alt="hamburger" />
        </div>
        <div className="nav-left-side">
          <Link to="/">
            <img src={logo} className="nav-logo" alt="logo" />
          </Link>
          <p className="nav-whats-lua-paragraph">What's Lua?</p>
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
          <p>Contact</p>
          <a
            href="https://jobs.trylua.com/join/"
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
