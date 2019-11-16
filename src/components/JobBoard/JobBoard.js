import React, { Component } from "react";
import "./JobBoard.scss";

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
          <h1>Coinbase</h1>
        </div>
      </div>
    );
  }
}
