import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BlogHome.scss";

export default class BlogHome extends Component {
  constructor() {
    super();
    this.state = { readytouse: null };
  }

  render() {
    return (
      <div className="entire-blog-div">
        <div>
          <h1 className="entire-blog-title">The Lua Blog</h1>
          <h3 className="entire-blog-tagline">Learn And Be Inspired</h3>
        </div>
        <div className="blog-frame">
          <div className="blog-image-div">
            <img
              className="blog-image"
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
            ></img>
          </div>
          <div className="blog-post-title-div">
            <h1 className="blog-post-title">
              How Jorge Became A Full-Time Developer In A Year
            </h1>
          </div>
          <div className="blog-post-snippet-div">
            <h1 className="blog-post-snippet">
              Jorge Hinojosa is a software developer based out of Dallas. After
              learning on his own for years, he took the leap and went to a
              coding bootcamp in Dallas. Within a year, he got an offer to be a
              developer at Match.com!
            </h1>
          </div>
        </div>
        <a href="/learn-more" target="_blank" className="blog-read-more-button">
          Read More ➤
        </a>
        <div>
          {/* 🔥🔥🔥🔥🔥 BLOG TWO BEGINS */}
          <h1 className="blog-frame-seperator"></h1>
        </div>
        <div className="blog-frame">
          <div className="blog-image-div">
            <img
              className="blog-image"
              src="https://i.pinimg.com/originals/46/c2/d8/46c2d88c5478915b3f61406b8166d5f4.jpg"
            ></img>
          </div>
          <div className="blog-post-title-div">
            <h1 className="blog-post-title">
              Our Chat With Jason Field: Founder and CEO of BrainStation
            </h1>
          </div>
          <div className="blog-post-snippet-div">
            <h1 className="blog-post-snippet">
              After traveling through Asia and working with Lululemon in
              Australia and New Zealand, Jason founded one of the top digital
              schools in the world: BrainStation.
            </h1>
          </div>
        </div>
        <a href="/learn-more" target="_blank" className="blog-read-more-button">
          Read More ➤
        </a>
      </div>
    );
  }
}
