import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./BlogHome.scss";

export default class BlogHome extends Component {
  constructor() {
    super();
    this.state = {
      blogposts: [
        {
          blogImage:
            "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
          blogTitle: "How Jorge Became A Full-Time Developer In A Year",
          blogSnippet:
            " After learning on his own for years, Jorge took the leap and went to a coding bootcamp in Dallas. Within a year, he got an offer to be a developer at Match.com!",
          blogLink: "/bootcamp-grad-landed-developer-job"
        }
        // {
        //   blogImage:
        //     "https://i.pinimg.com/originals/46/c2/d8/46c2d88c5478915b3f61406b8166d5f4.jpg",
        //   blogTitle:
        //     "Our Chat With Jason Field: Founder and CEO of BrainStation",
        //   blogSnippet:
        //     "After traveling through Asia and working with Lululemon in Australia and New Zealand, Jason founded one of the top digital schools in the world: BrainStation.",
        //   blogLink: "bootcamp-grad-landed-developer-job"
        // }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="display-influencers">
        <h1 className="home-influencers-title">The Lua Blog</h1>
        <h2 className="home-influencers-tagline">
          Learn From Successful Self-Taught And Bootcamp Grads
        </h2>
        <div className="whole-div">
          {this.state.blogposts.map((val, index) => {
            return (
              <div className="overall-account-display">
                {/* <div className="home-account-name">{"Account Name"}</div> */}
                <div className="image-div">
                  <Link to="/bootcamp-grad-landed-developer-job">
                    <img
                      src={val.blogImage}
                      alt="influencer-profile-picture"
                      className="home-profile-picture"
                    />
                  </Link>
                </div>
                <div className="home-account-atname">{val.blogTitle}</div>
                <div className="home-follower-count">{val.blogSnippet}</div>
                {/* <div className="home-average-likes">{"Average Likes: "}</div> */}
                {/* <div className="home-price">{"Engagement Rate: "}</div> */}
                {/* <div className="home-price">{"Target Audience: "}</div> */}
                {/* <div className="post-price">{"Price Per Post: "}</div> */}
                <div className="ello">
                  <div className="home-contact-influencer">
                    {/* <button className="home-contact-influencer-button"> */}
                    <Link
                      to="/bootcamp-grad-landed-developer-job"
                      className="blog-read-more-button"
                    >
                      Read More ➤
                    </Link>
                    {/* <a */}
                    {/* //   href="/bootcamp-grad-landed-developer-job"
                    //   // target="_blank"
                    //   className="blog-read-more-button"
                    // >
                      Read More ➤ */}
                    {/* // </a> */}
                    {/* </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
