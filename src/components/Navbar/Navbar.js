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
      loggedIn: true,
      id: null
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    axios.get("/api/users").then(res => {
      this.setState({
        id: res.data.userId
      });
    });
  }

  logout() {
    // console.log(this.props);
    this.props.logout().then(res => {
      this.setState({
        id: null
      });
    });
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
          <p>What's Lua?</p>
        </div>
        <div className="nav-right-side">
          <p>Home</p>
          <p>Job Board</p>
          <p>Blog</p>
          <p>Newsletter</p>
          <p>Contact</p>
        </div>
      </div>
    );
  }
}
