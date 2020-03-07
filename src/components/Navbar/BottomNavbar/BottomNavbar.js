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
        <h1>ello</h1>
      </div>
    );
  }
}
