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
      console.log(this.state.jobs[0].company_name);
    });
  }
  render() {
    return (
      <div className="display-influencers">
        <h1 className="home-influencers-title">Our Jobs</h1>
        <div className="whole-div">
          {this.state.jobs.map((val, index) => {
            return (
              <div className="overall-account-display">
                {/* <div className="home-account-name">{val.igaccountname}</div> */}
                <div className="image-div">
                  {/* <img
                    src={val.profilepicture}
                    alt="influencer-profile-picture"
                    className="home-profile-picture"
                  /> */}
                </div>
                <div className="home-account-atname">
                  {"Company Name: " + val.company_name}
                </div>
                <div className="home-follower-count">
                  {"Job Name: " + val.job_name}
                </div>
                <div className="home-average-likes">
                  {"Location: " + val.job_location}
                </div>
                <div className="home-price">{"Tech 1: " + val.tech_1}</div>
                <div className="home-price">{"Tech 2: " + val.tech_2}</div>
                <div className="post-price">
                  {"Price Per Post: " + val.priceperpost}
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
