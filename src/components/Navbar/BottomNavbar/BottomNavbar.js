import React, { Component } from "react";
import "./BottomNavbar.scss";
import { Link } from "react-router-dom";
import BottomNavbarHomeLogo from "../../../Images/BottomNavbarHomeLogo.png";

export default class BottomNavbar extends Component {
  constructor() {
    super();
    this.state = {
      readytouse: null
    };
  }

  render() {
    return (
      <div className="entire-bottom-navbar">
        <div className="bottom-navbar-container">
          <Link to="/">
            <div className="bottom-navbar-container-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                className="BottomNavbarHomeLogo"
              >
                <g>
                  <g>
                    <path d="M503.401,228.884l-43.253-39.411V58.79c0-8.315-6.741-15.057-15.057-15.057H340.976c-8.315,0-15.057,6.741-15.057,15.057    v8.374l-52.236-47.597c-10.083-9.189-25.288-9.188-35.367-0.001L8.598,228.885c-8.076,7.36-10.745,18.7-6.799,28.889    c3.947,10.189,13.557,16.772,24.484,16.772h36.689v209.721c0,8.315,6.741,15.057,15.057,15.057h125.913    c8.315,0,15.057-6.741,15.057-15.057V356.931H293v127.337c0,8.315,6.741,15.057,15.057,15.057h125.908    c8.315,0,15.057-6.741,15.056-15.057V274.547h36.697c10.926,0,20.537-6.584,24.484-16.772    C514.147,247.585,511.479,236.245,503.401,228.884z M433.965,244.433c-8.315,0-15.057,6.741-15.057,15.057v209.721h-95.793    V341.874c0-8.315-6.742-15.057-15.057-15.057H203.942c-8.315,0-15.057,6.741-15.057,15.057v127.337h-95.8V259.49    c0-8.315-6.741-15.057-15.057-15.057H36.245l219.756-200.24l74.836,68.191c4.408,4.016,10.771,5.051,16.224,2.644    c5.454-2.41,8.973-7.812,8.973-13.774V73.847h74.002v122.276c0,4.237,1.784,8.276,4.916,11.13l40.803,37.18H433.965z"></path>
                  </g>
                </g>
              </svg>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Home</div>
              </div>
            </div>
          </Link>
          <Link to="/job-board">
            <div className="bottom-navbar-container-1">
              {/* <img
                src={BottomNavbarHomeLogo}
                className="BottomNavbarHomeLogo"
              ></img> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="480pt"
                viewBox="0 -24 480 480"
                width="480pt"
                className="BottomNavbarHomeLogo"
              >
                <path d="m456 72h-104v-32c-.027344-22.082031-17.917969-39.9726562-40-40h-144c-22.082031.0273438-39.972656 17.917969-40 40v32h-104c-13.253906 0-24 10.746094-24 24v178.078125c.0507812 10.148437 6.445312 19.175781 16 22.585937v111.335938c0 13.253906 10.746094 24 24 24h400c13.253906 0 24-10.746094 24-24v-111.328125c9.554688-3.414063 15.953125-12.445313 16-22.59375v-178.078125c0-13.253906-10.746094-24-24-24zm-312-32c0-13.253906 10.746094-24 24-24h144c13.253906 0 24 10.746094 24 24v32h-16v-32c0-4.417969-3.582031-8-8-8h-144c-4.417969 0-8 3.582031-8 8v32h-16zm160 32h-128v-24h128zm144 336c0 4.417969-3.582031 8-8 8h-400c-4.417969 0-8-3.582031-8-8v-108.585938l176 24.273438v20.3125c0 13.253906 10.746094 24 24 24h16c13.253906 0 24-10.746094 24-24v-20.3125l176-24.273438zm-192-64c0 4.417969-3.582031 8-8 8h-16c-4.417969 0-8-3.582031-8-8v-48c0-4.417969 3.582031-8 8-8h16c4.417969 0 8 3.582031 8 8zm208-69.921875c.003906 3.988281-2.929688 7.371094-6.878906 7.929687l-2.21875.304688-182.902344 25.222656v-11.535156c0-13.253906-10.746094-24-24-24h-16c-13.253906 0-24 10.746094-24 24v11.535156l-185.113281-25.527344c-3.949219-.554687-6.890625-3.9375-6.886719-7.929687v-178.078125c0-4.417969 3.582031-8 8-8h432c4.417969 0 8 3.582031 8 8zm0 0" />
              </svg>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Jobs</div>
              </div>
            </div>
          </Link>
          <Link to="/blog">
            <div className="bottom-navbar-container-1">
              {/* <img
                src={BottomNavbarHomeLogo}
                className="BottomNavbarHomeLogo"
              ></img> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 512 512"
                width="50"
                height="40"
                className="BottomNavbarHomeLogo"
              >
                <path d="M488,16H24a8,8,0,0,0-8,8V488a8,8,0,0,0,8,8H488a8,8,0,0,0,8-8V24A8,8,0,0,0,488,16ZM32,32H480V80H32Zm0,448V96H480V480Z" />
                <circle cx="120" cy="56" r="8" />
                <circle cx="88" cy="56" r="8" />
                <circle cx="56" cy="56" r="8" />
                <path d="M456,48H440a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z" />
                <path d="M440,128H72a8,8,0,0,0-8,8V296a8,8,0,0,0,8,8H440a8,8,0,0,0,8-8V136A8,8,0,0,0,440,128ZM123.314,288l30.613-30.613,35.1,14.041a8,8,0,0,0,8.628-1.771l43.363-43.363,66.542,44.362a8,8,0,0,0,7.409.772l35.5-14.2L386.374,288ZM432,288H410.96l-53.753-46.074a8,8,0,0,0-8.178-1.354l-36.093,14.437-68.5-45.665a8,8,0,0,0-10.095,1l-44.27,44.27-35.1-14.041a8,8,0,0,0-8.628,1.771L100.687,288H80V144H432Z" />
                <path d="M72,352h96a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16Z" />
                <path d="M312,224a24,24,0,1,0-24-24A24.027,24.027,0,0,0,312,224Zm0-32a8,8,0,1,1-8,8A8.009,8.009,0,0,1,312,192Z" />
                <path d="M232,384H72a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z" />
                <path d="M232,432H72a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z" />
                <path d="M440,384H280a8,8,0,0,0,0,16H440a8,8,0,0,0,0-16Z" />
                <path d="M440,432H280a8,8,0,0,0,0,16H440a8,8,0,0,0,0-16Z" />
              </svg>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Blog</div>
              </div>
            </div>
          </Link>
          <Link to="/about-lua">
            <div className="bottom-navbar-container-1">
              <img
                src={BottomNavbarHomeLogo}
                className="BottomNavbarHomeLogo"
              ></img>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">About</div>
              </div>
            </div>
          </Link>
          <Link to="/contact">
            <div className="bottom-navbar-container-1">
              <img
                src={BottomNavbarHomeLogo}
                className="BottomNavbarHomeLogo"
              ></img>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Contact</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
