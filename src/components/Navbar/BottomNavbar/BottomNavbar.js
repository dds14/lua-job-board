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
          <Link to="/">
            <div className="bottom-navbar-container-1">
              <img
                src={BottomNavbarHomeLogo}
                className="BottomNavbarHomeLogo"
              ></img>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Home</div>
              </div>
            </div>
          </Link>
          <Link to="/job-board">
            <div className="bottom-navbar-container-1">
              <img
                src={BottomNavbarHomeLogo}
                className="BottomNavbarHomeLogo"
              ></img>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Jobs</div>
              </div>
            </div>
          </Link>
          <Link to="/blog">
            <div className="bottom-navbar-container-1">
              <img
                src={BottomNavbarHomeLogo}
                className="BottomNavbarHomeLogo"
              ></img>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Blog</div>
              </div>
            </div>
          </Link>
          <Link to="/about-lua">
            <div className="bottom-navbar-container-1">
              <img
                src={BottomNavbarHomeLogo}
                className="BottomNavbarHomeLogo"
              ></img>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">About</div>
              </div>
            </div>
          </Link>
          <Link to="/contact">
            <div className="bottom-navbar-container-1">
              <img
                src={BottomNavbarHomeLogo}
                className="BottomNavbarHomeLogo"
              ></img>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Contact</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
