import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./AboutLua.scss";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = { readytouse: null };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
            <p className="as-of-now">
              As of right now, we provide the following resources:
            </p>
            <h4 className="about-lua-resource-list">
              💻 A job board, that only displays jobs that don't require CS
              degrees{" "}
              <a
                href="https://luatech.io/job-board"
                target="_blank"
                className="typical-link"
              >
                (see it here)
              </a>
            </h4>
            <h4 className="about-lua-resource-list">
              📩 A newsletter, where we send out the best jobs we find each week{" "}
              <a
                href="https://jobs.trylua.com/devjobs"
                target="_blank"
                className="typical-link"
              >
                (sign up here)
              </a>
            </h4>
            <h4 className="about-lua-resource-list">
              📚 A blog, where we interview successful developers, bootcamp
              founders, and others in the industry so you can learn from them{" "}
              <a
                href="https://luatech.io/blog"
                target="_blank"
                className="typical-link"
              >
                (read them here)
              </a>
            </h4>
          </div>
          <h2 className="who-runs-lua-paragraph">
            Who runs Lua?
            <br></br>
          </h2>
          <div className="who-runs-lua-div">
            <p>
              Lua was started by former bootcamp graduates. We didn't know the
              difference between Java and JavaScript when we started our journey
              to becoming developers. We saw firsthand how difficult the path to
              enter the tech industry can be.
              <br></br>
              <br></br>
              From learning how to become a developer (or designer, or data
              scientist!), to actually becoming one, there's not many good
              resources to help you on the journey - and that's a problem.
              <br></br>
              <br></br>
              Our goal is to help solve this, and provide a resource for you to
              break into the tech industry without a CS degree.
              <br></br>
              <br></br>
              From your first line of code, to your first job offer, we hope to
              help guide you along the way.
              <br></br>
              <br></br>
              Good luck,
              <p className="the-lua-team">The Lua Team</p>
            </p>
            <p></p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
