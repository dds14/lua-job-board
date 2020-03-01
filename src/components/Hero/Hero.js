import React, { Component } from "react";
import "./Hero.scss";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      readytouse: null
    };
  }

  render() {
    return (
      <div className="entire-hero-div">
        <div className="hero-left-side-div">
          <h1>heyyy</h1>
        </div>
        <div className="hero-right-side-div">
          <h1>right side</h1>
        </div>
      </div>
    );
  }
}
