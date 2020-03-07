import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        },
        {
          blogImage:
            "https://i.pinimg.com/originals/46/c2/d8/46c2d88c5478915b3f61406b8166d5f4.jpg",
          blogTitle:
            "Our Chat With Jason Field: Founder and CEO of BrainStation",
          blogSnippet:
            "After traveling through Asia and working with Lululemon in Australia and New Zealand, Jason founded one of the top digital schools in the world: BrainStation.",
          blogLink: "bootcamp-grad-landed-developer-job"
        }
      ]
    };
  }

  render() {
    return (
      <div className="display-influencers">
        <h1 className="home-influencers-title">Lua Blog</h1>
        <div className="whole-div">
          {this.state.blogposts.map((val, index) => {
            return (
              <div className="overall-account-display">
                {/* <div className="home-account-name">{"Account Name"}</div> */}
                <div className="image-div">
                  <img
                    src={val.blogImage}
                    alt="influencer-profile-picture"
                    className="home-profile-picture"
                  />
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
                    <a
                      href="/learn-more"
                      // target="_blank"
                      className="blog-read-more-button"
                    >
                      Read More ➤
                    </a>
                    {/* </button> */}
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

// HTML BEFORE SWITCHING TO NANO'S DISPLAYINFLUENCERS CODE
// <div className="entire-blog-div">
//         <h3 className="entire-blog-tagline">Learn And Be Inspired</h3>
//         <div className="smaller-blog-div">
//           <div className="blog-frame">
//             <div className="blog-image-div">
//               <img
//                 className="blog-image"
//                 src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
//               ></img>
//             </div>
//             <div className="blog-post-title-div">
//               <h1 className="blog-post-title">
//                 How Jorge Became A Full-Time Developer In A Year
//               </h1>
//             </div>
//             <div className="blog-post-snippet-div">
//               <h1 className="blog-post-snippet">
//                 After learning on his own for years, Jorge took the leap and
//                 went to a coding bootcamp in Dallas. Within a year, he got an
//                 offer to be a developer at Match.com!
//               </h1>
//             </div>
//             <div>
//               <Link to="/bootcamp-grad-landed-developer-job">
//                 <a
//                   href="/bootcamp-grad-landed-developer-job"
//                   target="_blank"
//                   className="blog-read-more-button"
//                 >
//                   Read More ➤
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div>
//             🔥🔥🔥🔥🔥 BLOG TWO BEGINS
//             <h1 className="blog-frame-seperator"></h1>
//           </div>
//           <div className="blog-frame">
//             <div className="blog-image-div">
//               <img
//                 className="blog-image"
//                 src="https://i.pinimg.com/originals/46/c2/d8/46c2d88c5478915b3f61406b8166d5f4.jpg"
//               ></img>
//             </div>
//             <div className="blog-post-title-div">
//               <h1 className="blog-post-title">
//                 Our Chat With Jason Field: Founder and CEO of BrainStation
//               </h1>
//             </div>
//             <div className="blog-post-snippet-div">
//               <h1 className="blog-post-snippet">
//                 After traveling through Asia and working with Lululemon in
//                 Australia and New Zealand, Jason founded one of the top digital
//                 schools in the world: BrainStation.
//               </h1>
//             </div>
//             <a
//               href="/learn-more"
//               target="_blank"
//               className="blog-read-more-button"
//             >
//               Read More ➤
//             </a>
//           </div>
//         </div>
//       </div>
