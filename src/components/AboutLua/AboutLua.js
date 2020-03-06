import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AboutLua.scss";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = { readytouse: null };
  }

  render() {
    return (
      <div className="entire-about-page">
        <div className="about-info-container">
          <h1 className="about-lua-header">About Lua</h1>
          <hr className="about-lua-divider"></hr>
          {/* <h2>Bootcamp Grad or Self-Taught Developer?</h2> */}
          <h2 className="about-lua-paragraph">
            What is Lua?
            <br></br>
          </h2>
          <div className="about-snippet-div">
            <p>
              Feel free to reach out to us anytime with questions about how to
              get started coding, how to navigate the job market, or anything
              else. We're always here to help!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
