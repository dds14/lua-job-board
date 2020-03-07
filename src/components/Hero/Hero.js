import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

const textArray = [
  "Web Developer",
  "Designer",
  "Data Scientist",
  "Frontend Engineer",
  "Mobile Developer",
  "Backend Engineer"
];

export default class Hero extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <div className="entire-hero-div">
        <div className="hero-left-side-div">
          <div className="left-empty-space-desktop"></div>
          <div className="become-a-entire-div">
            <div className="become-a-developer-div">Become A Developer</div>
            <div className="tagline-div">
              Lua helps you land a job as a self-taught or bootcamp developer.
            </div>
            <div className="hero-buttons-div">
              <Link to="/about-lua" className="hero-learn-more-button">
                {/* <a href="/about-lua" className="hero-learn-more-button"> */}
                Learn More
                {/* </a> */}
              </Link>
              <a href="/job-board" className="hero-view-jobs-button">
                See Our Jobs
              </a>
            </div>
          </div>
        </div>
        <div className="hero-right-side-div">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="Software Developer Working"
          />
        </div>
      </div>
    );
  }
}

// Original try below. Had trouble with the changing text moving the "become a" div to the left
//     return (
//       <div className="entire-hero-div">
//         <div className="hero-left-side-div">
//           {/* LAND A JOB + TEXT CHANGE DIV STARTS */}
//           <div className="fuck">
//             <div className="land-a-job-div">
//               <h1 className="land-a-job-as-a-text">Become A</h1>
//             </div>
//             <h1>
//               <span className="text-that-changes">{textThatChanges}</span>
//             </h1>
//           </div>
//           {/* LAND A JOB + TEXT CHANGE DIV ENDS */}
//           <div className="tagline-div">
//             We help you land a job in the tech industry without a college
//             degree.
//           </div>
//         </div>
//         <div className="hero-right-side-div">
//           <h1>right side</h1>
//         </div>
//       </div>
//     );
//   }
// }
