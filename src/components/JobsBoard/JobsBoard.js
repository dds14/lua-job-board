import React, { Component } from "react";
import axios from "axios";
import "./JobBoards.scss";

export default class JobBoards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      openDropdown: false
    };
  }

  componentDidMount(e) {
    axios.get("/getjobs").then(res => {
      this.setState({ jobs: res.data });
    });
  }

  render() {
    return <h1>ello</h1>;
  }
}
