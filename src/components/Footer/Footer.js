import React, { Component } from "react";
import { Link } from "react-router-dom";
import fb_icon from "../../Images/fb_icon.png";
import ig_icon from "../../Images/ig_icon.png";
import twitter_icon from "../../Images/twitter_icon.png";
import logo from "../../Images/logo.png";

import "./Footer.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        {/* <div className="footer"> */}
        {/* <div className="footer-middle"> */}
        {/* <div className="footer-form-div">
            <div className="logo-footer">
              <img src={logo} className="footer-logo" alt="nano-logo" />
            </div>
          </div> */}
        {/* </div> */}
        <div className="footer-far-left">
          <h2 className="footer-far-left-header">Lua | Jobs Without Degrees</h2>
          <div className="footer-far-left-content">
            <Link to="/job-board" className="footer-far-left-paragraph">
              Job Board
            </Link>
            <br />
            <Link to="/blog" className="footer-far-left-paragraph">
              Blogs & Interviews
            </Link>
            <br />
            <Link to="/about-lua" className="footer-far-left-paragraph">
              About Lua
            </Link>
            <br />
            <Link to="/contact" className="footer-far-left-paragraph">
              Contact Us
            </Link>
            <br />
          </div>
          {/* <p className="copyright">Copyright © 2019 Nano App Inc.</p> */}
        </div>
        <div className="footer-left">
          <h2 className="footer-left-header">Get in Touch</h2>
          <div className="footer-left-content">
            <p className="footer-left-paragraph">+1 (202) 503-4761</p>
            <br />
            <p className="footer-left-paragraph">hello@nanoapp.com</p>
            <br />
            <p className="footer-left-paragraph">
              145 2nd Ave, New York, NY 10021
            </p>
          </div>
          {/* <p className="copyright">Copyright © 2019 Nano App Inc.</p> */}
        </div>
        <div className="footer-right">
          <h2 className="footer-left-header">Keep Connected</h2>
          <div className="footer-left-content">
            <div className="footer-social-icons">
              <div className="facebook-footer">
                <img src={fb_icon} className="fb-logo" alt="facebook" />

                <p className="facebook-word">Facebook</p>
              </div>
              <div className="insta-footer">
                <img src={ig_icon} className="insta-logo" alt="facebook" />
                <p className="insta-word">Instagram</p>
              </div>
              <div className="twitter-footer">
                <img
                  src={twitter_icon}
                  className="twitter-logo"
                  alt="facebook"
                />
                <p className="twitter-word">Twitter</p>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="copyright">Copyright © 2019 Nano App Inc.</p> */}
      </div>
    );
  }
}
