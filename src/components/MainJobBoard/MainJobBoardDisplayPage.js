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
          None of these Jobs require a CS degree
        </h2>
        <MainJobBoard />
      </div>
    );
  }
}
