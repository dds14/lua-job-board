import React, { Component } from "react";
import axios from "axios";
import "./JobBoard.scss";
import coinbase from "../../Images/coinbase.png";

export default class JobBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    };
  }

  componentDidMount(e) {
    axios.get("/getjobs").then(res => {
      this.setState({ jobs: res.data });

      console.log("OOOOHHHHH");
      console.log(this.state.jobs);
    });
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
