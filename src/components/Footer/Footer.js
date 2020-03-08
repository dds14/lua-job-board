import React, { Component } from "react";
import { Link } from "react-router-dom";
import fb_icon from "../../Images/fb_icon.png";
import ig_icon from "../../Images/ig_icon.png";
import twitter_icon from "../../Images/twitter_icon.png";
import footer_logo from "../../Images/footer_logo.png";

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
          <h2 className="footer-far-left-header">
            <img
              src={footer_logo}
              className="footer-logo"
              alt="lua-bootcamp-developer-jobs-logo"
            />
          </h2>
          <div className="footer-far-left-content">
            <Link to="/" className="footer-far-left-paragraph">
              Home
            </Link>
            <br />
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
            {/* <br /> */}
            <p className="footer-left-paragraph">hello@luajobs.com</p>
            {/* <br /> */}
            <p className="footer-left-paragraph">
              Made with &#9829; in Washington, DC
            </p>
          </div>
          {/* <p className="copyright">Copyright © 2019 Nano App Inc.</p> */}
        </div>
        <div className="footer-right">
          <h2 className="footer-left-header">Stay Connected</h2>
          <div className="footer-left-content">
            <div className="footer-social-icons">
              <div className="facebook-footer">
                <a
                  href="https://www.facebook.com/luajobs/Facebook"
                  target="_blank"
                >
                  <img src={fb_icon} className="fb-logo" alt="facebook" />
                </a>
                <p className="facebook-word">
                  <a
                    className="facebook-a-href"
                    href="https://www.facebook.com/luajobs/Facebook"
                    target="_blank"
                    alt="lua-bootcamp-developer-jobs-facebook"
                  >
                    Facebook
                  </a>
                </p>
              </div>
              <div className="insta-footer">
                <a href="https://www.instagram.com/jobslua/" target="_blank">
                  <img
                    src={ig_icon}
                    className="insta-logo"
                    alt="facebook"
                    target="_blank"
                  />
                </a>
                <p className="insta-word">
                  <a
                    className="instagram-a-href"
                    href="https://www.instagram.com/jobslua/"
                    target="_blank"
                    alt="lua-bootcamp-developer-jobs-instagram"
                  >
                    Instagram
                  </a>
                </p>
              </div>
              <div className="twitter-footer">
                <a href="https://www.instagram.com/jobslua/" target="_blank">
                  <img
                    src={twitter_icon}
                    className="twitter-logo"
                    alt="twitter"
                  />
                </a>
                <p className="twitter-word">
                  <a
                    className="twitter-a-href"
                    href="https://twitter.com/jobslua"
                    target="_blank"
                    alt="lua-bootcamp-developer-jobs-twitter"
                  >
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="copyright">Copyright © 2019 Nano App Inc.</p> */}
      </div>
    );
  }
}
