import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
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
              Lua is a community for anyone that wants to break into the tech
              industry as a developer, designer, or data scientist without a CS
              degree. We provide resources for bootcamp graduates and
              self-taught coders to navigate the job market, find jobs, and land
              them.
            </p>
            <p>As of right now, we provide the following resources:</p>
            <h4 className="about-lua-resource-list">
              💻 A job board, that only displays jobs that don't require CS
              degrees
            </h4>
            <h4 className="about-lua-resource-list">
              📩 A newsletter, where we send out the best jobs we find each week
            </h4>
            <h4 className="about-lua-resource-list">
              📚 A blog, where we interview successful developers, bootcamp
              founders, and others in the industry so you can learn from them.
            </h4>
          </div>
          <h2 className="who-runs-lua-paragraph">
            Who runs Lua?
            <br></br>
          </h2>
          <div className="who-runs-lua-div">
            <p>
              Lua was started by former bootcamp graduates. We saw firsthand how
              difficult the journey can be. From not knowing how to write a line
              of code, to landing fully remote developer positions within a
              year, we learned a lot along the way.
            </p>
            <p></p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
