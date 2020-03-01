import React, { Component } from "react";
import "./Hero.scss";

const textArray = [
  "Web Developer",
  "Designer",
  "Data Scientist",
  "Frontend Engineer",
  "Mobile Developer",
  "Backend Engineer"
];

export default class Hero extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <div className="entire-hero-div">
        <div className="hero-left-side-div">
          <div className="land-a-job-div">
            <h1 className="land-a-job-as-a-text">Land A Job As A</h1>
          </div>
          <div>
            <h1>
              <span className="text-that-changes">{textThatChanges}</span>
            </h1>
          </div>
        </div>
        <div className="hero-right-side-div">
          <h1>right side</h1>
        </div>
      </div>
    );
  }
}