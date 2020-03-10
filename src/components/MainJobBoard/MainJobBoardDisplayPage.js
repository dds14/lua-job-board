import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import MainJobBoard from "./MainJobBoard";
import "./MainJobBoardDisplayPage.scss";

export default class MainJobBoardDisplayPage extends Component {
  constructor() {
    super();
    this.state = {
      readytouse: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="entire-job-board-display-page">
        <h1 className="job-board-title">Job Board</h1>
        <h2 className="job-board-tagline">
          🔥 None Of These Jobs Require A CS Degree
        </h2>
        <h2 className="job-board-coming-soon">
          We're adding a filter for roles (i.e. sort by UI/UX only), as well as
          more cities soon. Sign up{" "}
          <a
            href="https://jobs.trylua.com/devjobs"
            className="job-board-coming-soon-signup"
            target="_blank"
          >
            here
          </a>{" "}
          to be notified when it goes live.
        </h2>
        <MainJobBoard />
        <Footer />
      </div>
    );
  }
}
