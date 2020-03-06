import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = { readytouse: null };
  }

  render() {
    return (
      <div className="entire-contact-page">
        <div className="contact-info-container">
          <h1 className="contact-us-header">Contact Us</h1>
          {/* <h2>Bootcamp Grad or Self-Taught Developer?</h2> */}
          <p className="get-in-touch-paragraph">
            To get in touch, email us at&nbsp;
            <a href="mailto:hello@luajobs.com" className="contact-page-mailto">
              hello@luajobs.com
            </a>
            <br></br>
            <br></br>
            <div className="contact-snippet-div">
              <p>
                Feel free to reach out to us anytime with questions about how to
                get started coding, how to navigate the job market, or anything
                else. We're always here to help!
              </p>
            </div>
          </p>
        </div>
        {/* BALLS ANIMATION START */}
        {/* <div className="balls-div">
          <div class="balls">
            <div />
            <div />
            <div />
          </div>
        </div> */}
        {/* BALLS ANIMATION END */}
      </div>
    );
  }
}
