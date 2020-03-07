import React, { Component } from "react";
import "./BottomNavbar.scss";
import { Link } from "react-router-dom";
// import logo from "../../Images/logo.png";
// import hamburgermobile from "../../Images/hamburgermobile.png";

export default class BottomNavbar extends Component {
  constructor() {
    super();
    this.state = {
      readytouse: null
    };
  }

  render() {
    return (
      <div className="entire-bottom-navbar">
        <div className="bottom-navbar-container">
          <div className="bottom-navbar-container-1"></div>
          <div className="bottom-navbar-container-2"></div>
          <div className="bottom-navbar-container-3"></div>
          <div className="bottom-navbar-container-4"></div>
          <div className="bottom-navbar-container-5"></div>
        </div>
      </div>
    );
  }
}
