import React, { Component } from "react";
import "./JobBoard.scss";
import coinbase from "../../Images/coinbase.png";

export default class JobBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      derek: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Find Your Dream Job</h1>
        <div className="each-div">
          <div className="company-logo-div">
            <img src={coinbase} className="company-logo" />
          </div>
          <div className="company-name-div">
            <h1>Coinbase</h1>
          </div>
        </div>
      </div>
    );
  }
}
