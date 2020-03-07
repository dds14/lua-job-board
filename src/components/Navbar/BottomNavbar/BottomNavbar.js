import React, { Component } from "react";
import "./BottomNavbar.scss";
import { Link } from "react-router-dom";
import BottomNavbarHomeLogo from "../../../Images/BottomNavbarHomeLogo.png";

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
          <div className="bottom-navbar-container-1">
            <img
              src={BottomNavbarHomeLogo}
              className="BottomNavbarHomeLogo"
            ></img>
            <div className="BottomNavbarHomeTextDiv">
              <div className="BottomNavbarHomeText">Home</div>
            </div>
          </div>
          <div className="bottom-navbar-container-2"></div>
          <div className="bottom-navbar-container-3"></div>
          <div className="bottom-navbar-container-4"></div>
          <div className="bottom-navbar-container-5"></div>
        </div>
      </div>
    );
  }
}
