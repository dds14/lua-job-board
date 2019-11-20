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
    });
  }

  render() {
    return (
      <div className="entire-display-jobs">
        <h1 className="title-of-job-board">Our Jobs</h1>
        <div className="whole-div">
          {this.state.jobs.map((val, index) => {
            return (
              <div className="individual-job-display">
                {/* <div className="home-account-name">{val.igaccountname}</div> */}
                <div className="company-logo-div">
                  <img
                    src={val.company_logo}
                    alt="company-logo"
                    className="company-logo"
                  />
                </div>
                <div className="company-name-div">
                  {"Company Name: " + val.company_name}
                </div>
                <div className="job-name-div">
                  {"Job Name: " + val.job_name}
                </div>
                <div className="location-div">
                  {"Location: " + val.job_location}
                </div>
                <div className="entire-tech-div">
                  <div className="tech-1-div">{"Tech 1: " + val.tech_1}</div>
                  <div className="tech-2-div">{"Tech 2: " + val.tech_2}</div>
                  <div className="tech-3-div">{"Tech 3: " + val.tech_3}</div>
                  <div className="tech-4-div">{"Tech 4: " + val.tech_4}</div>
                </div>
                <div className="days-since-posted-div">
                  {"Days Since Posted: " + val.days_since_posted}
                </div>
                <div className="ello">
                  <div className="home-contact-influencer">
                    <button className="home-contact-influencer-button">
                      {" "}
                      <a href={"mailto:" + val.company_email}>Apply</a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
