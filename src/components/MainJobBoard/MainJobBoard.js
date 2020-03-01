import React, { Component } from "react";
import axios from "axios";
import "./MainJobBoard.scss";

export default class MainJobBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      openDropdown: false
    };
    // this.handleDropdown = this.handleDropdown.bind(this);
  }

  componentDidMount(e) {
    axios.get("/getjobs").then(res => {
      this.setState({ jobs: res.data });
    });
  }

  //   handleDropdown(e) {
  //     this.setState({ openDropdown: !this.state.openDropdown });
  //   }

  render() {
    return (
      <div>
        {this.state.jobs.map((val, index) => {
          return (
            <div className="all-jobs">
              <div className="company-logo-div">
                <img className="company-logo" src={val.company_logo}></img>
              </div>
              <div className="title-and-company-div">
                <div className="title-div">{val.job_name}</div>
                <div className="company-div">
                  <p className="company-paragraph">{val.company_name}</p>
                  <p> | </p>
                  <p className="location-paragraph">
                    <strong>{val.job_location}</strong>
                  </p>
                </div>
              </div>
              <div className="days-ago-div">{val.days_since_posted}</div>
              <div className="apply-now-div">
                <form action={val.company_email} target="_blank">
                  <button type="submit" className="apply-now-button">
                    Apply
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
