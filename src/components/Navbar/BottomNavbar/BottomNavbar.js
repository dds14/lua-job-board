import React, { Component } from "react";
import "./BottomNavbar.scss";
import { Link } from "react-router-dom";
import BottomNavbarHomeLogo from "../../../Images/BottomNavbarHomeLogo.png";

export default class BottomNavbar extends Component {
  constructor() {
    super();
    this.state = {
      homeClicked: "home",
      jobBoardClicked: "",
      blogClicked: "",
      aboutClicked: "",
      contactClicked: ""
    };
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleJobBoardClick = this.handleJobBoardClick.bind(this);
    this.handleBlogClick = this.handleBlogClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  handleHomeClick(e) {
    this.setState({ homeClicked: "home" });
    this.setState({ jobBoardClicked: "" });
    this.setState({ blogClicked: "" });
    this.setState({ aboutClicked: "" });
    this.setState({ contactClicked: "" });
    console.log(this.state.homeClicked);
  }

  handleJobBoardClick(e) {
    this.setState({ homeClicked: "" });
    this.setState({ jobBoardClicked: "job-board" });
    this.setState({ blogClicked: "" });
    this.setState({ aboutClicked: "" });
    this.setState({ contactClicked: "" });
    console.log(this.state.jobBoardClicked);
  }

  handleBlogClick(e) {
    this.setState({ homeClicked: "" });
    this.setState({ jobBoardClicked: "" });
    this.setState({ blogClicked: "blog" });
    this.setState({ aboutClicked: "" });
    this.setState({ contactClicked: "" });
  }

  handleAboutClick(e) {
    this.setState({ homeClicked: "" });
    this.setState({ jobBoardClicked: "" });
    this.setState({ blogClicked: "" });
    this.setState({ aboutClicked: "about" });
    this.setState({ contactClicked: "" });
  }

  handleContactClick(e) {
    this.setState({ homeClicked: "" });
    this.setState({ jobBoardClicked: "" });
    this.setState({ blogClicked: "" });
    this.setState({ aboutClicked: "" });
    this.setState({ contactClicked: "contact" });
  }

  render() {
    return (
      <div className="entire-bottom-navbar">
        <div className="bottom-navbar-container">
          <Link to="/" className="bottom-navbar-links">
            <div
              className={"bottom-navbar-container-1"}
              onClick={this.handleHomeClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 476.912 476.912"
                className={"BottomNavbarIcon-" + this.state.homeClicked}
              >
                <g>
                  <g>
                    <path d="M461.776,209.408L249.568,4.52c-6.182-6.026-16.042-6.026-22.224,0L15.144,209.4c-3.124,3.015-4.888,7.17-4.888,11.512    c0,8.837,7.164,16,16,16h28.2v224c0,8.837,7.163,16,16,16h112c8.837,0,16-7.163,16-16v-128h80v128c0,8.837,7.163,16,16,16h112    c8.837,0,16-7.163,16-16v-224h28.2c4.338,0,8.489-1.761,11.504-4.88C468.301,225.678,468.129,215.549,461.776,209.408z     M422.456,220.912c-8.837,0-16,7.163-16,16v224h-112v-128c0-8.837-7.163-16-16-16h-80c-8.837,0-16,7.163-16,16v128h-112v-224    c0-8.837-7.163-16-16-16h-28.2l212.2-204.88l212.28,204.88H422.456z" />
                  </g>
                </g>
              </svg>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Home</div>
              </div>
            </div>
          </Link>
          <Link to="/job-board" className="bottom-navbar-links">
            <div
              className="bottom-navbar-container-1"
              onClick={this.handleJobBoardClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="480pt"
                viewBox="0 -24 480 480"
                width="480pt"
                className={"BottomNavbarIcon-" + this.state.jobBoardClicked}
              >
                <path d="m456 72h-104v-32c-.027344-22.082031-17.917969-39.9726562-40-40h-144c-22.082031.0273438-39.972656 17.917969-40 40v32h-104c-13.253906 0-24 10.746094-24 24v178.078125c.0507812 10.148437 6.445312 19.175781 16 22.585937v111.335938c0 13.253906 10.746094 24 24 24h400c13.253906 0 24-10.746094 24-24v-111.328125c9.554688-3.414063 15.953125-12.445313 16-22.59375v-178.078125c0-13.253906-10.746094-24-24-24zm-312-32c0-13.253906 10.746094-24 24-24h144c13.253906 0 24 10.746094 24 24v32h-16v-32c0-4.417969-3.582031-8-8-8h-144c-4.417969 0-8 3.582031-8 8v32h-16zm160 32h-128v-24h128zm144 336c0 4.417969-3.582031 8-8 8h-400c-4.417969 0-8-3.582031-8-8v-108.585938l176 24.273438v20.3125c0 13.253906 10.746094 24 24 24h16c13.253906 0 24-10.746094 24-24v-20.3125l176-24.273438zm-192-64c0 4.417969-3.582031 8-8 8h-16c-4.417969 0-8-3.582031-8-8v-48c0-4.417969 3.582031-8 8-8h16c4.417969 0 8 3.582031 8 8zm208-69.921875c.003906 3.988281-2.929688 7.371094-6.878906 7.929687l-2.21875.304688-182.902344 25.222656v-11.535156c0-13.253906-10.746094-24-24-24h-16c-13.253906 0-24 10.746094-24 24v11.535156l-185.113281-25.527344c-3.949219-.554687-6.890625-3.9375-6.886719-7.929687v-178.078125c0-4.417969 3.582031-8 8-8h432c4.417969 0 8 3.582031 8 8zm0 0" />
              </svg>
              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">Jobs</div>
              </div>
            </div>
          </Link>
          <Link
            to="/blog"
            className="bottom-navbar-links"
            onClick={this.handleBlogClick}
          >
            <div className="bottom-navbar-container-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 512 512"
                width="50"
                height="40"
                className={"BottomNavbarIcon-" + this.state.blogClicked}
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
          <Link to="/about-lua" className="bottom-navbar-links">
            <div
              className="bottom-navbar-container-1"
              onClick={this.handleAboutClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="156"
                viewBox="0 0 160 156"
                className={"BottomNavbarIcon-" + this.state.aboutClicked}
              >
                <path
                  d="M87.4695 25.9934L86.7184 26.7146L87.4694 27.4359L146.291 83.9262L146.983 83.2049L146.291 83.9262C162.887 99.8628 163.204 125.775 146.674 141.738C142.731 145.536 138.046 148.554 132.884 150.616C127.723 152.678 122.187 153.744 116.595 153.752C111.001 153.759 105.463 152.709 100.295 150.661C95.4688 148.748 91.0556 146.001 87.2724 142.56C89.191 140.984 91.5302 139.932 94.043 139.53L94.0432 139.53C96.9132 139.071 99.8601 139.486 102.47 140.713L102.471 140.714C108.499 143.535 115.293 144.472 121.9 143.394C128.507 142.316 134.603 139.277 139.328 134.696L139.329 134.696C151.795 122.587 151.471 102.988 138.955 90.9695L134.101 86.3082L133.408 85.6431L132.715 86.3082L73.8148 142.869C57.1965 158.827 30.1406 159.134 13.4931 143.237C9.53759 139.451 6.39982 134.956 4.25704 130.01L3.33944 130.408L4.25702 130.01C2.11429 125.065 1.00795 119.763 1.00004 114.409C0.992139 109.054 2.08282 103.75 4.21093 98.7983C6.20981 94.1475 9.08765 89.8924 12.6983 86.2465C14.3657 88.0973 15.4714 90.3545 15.8898 92.7712L16.87 92.6015L15.8898 92.7712C16.3623 95.5003 15.9359 98.305 14.6668 100.795L14.666 100.796C11.7201 106.6 10.7403 113.148 11.867 119.518L12.8518 119.344L11.8671 119.518C12.9939 125.888 16.1691 131.752 20.9391 136.29L20.9399 136.291C33.5252 148.239 53.8643 147.93 66.3592 135.932L72.606 129.933L73.3571 129.212L72.606 128.491L13.799 72.0203C-3.04256 55.8478 -3.0921 29.4634 14.0238 13.5964C21.9805 6.24196 32.6127 2.14226 43.6722 2.17592C54.5375 2.20899 64.9638 6.22895 72.8251 13.3895C70.9201 15.103 68.5142 16.2316 65.9182 16.6177C63.2007 17.0218 60.4212 16.5906 57.9781 15.3883L57.9717 15.3852C52.0355 12.5167 45.3217 11.4893 38.7552 12.4421C32.1886 13.3949 26.0864 16.2821 21.2925 20.7116L21.2914 20.7126C8.31632 32.7386 8.41124 52.7497 21.1397 64.9724L25.9756 69.6162L26.6682 70.2813L27.3608 69.6162L86.1852 13.1305C102.804 -2.82704 129.86 -3.13381 146.508 12.7629C150.463 16.5485 153.601 21.0431 155.743 25.9888C157.886 30.9346 158.991 36.236 159 41.5902C159.008 46.9444 157.917 52.2487 155.789 57.2005C153.79 61.8515 150.913 66.107 147.302 69.7526C145.634 67.9018 144.529 65.6449 144.11 63.2284C143.637 60.4986 144.063 57.694 145.333 55.2044L145.333 55.2029C148.28 49.3991 149.26 42.8513 148.133 36.4811C147.006 30.1114 143.831 24.2469 139.061 19.7088L139.06 19.708C126.474 7.76052 106.136 8.06866 93.6409 20.0671L87.4695 25.9934ZM73.2375 13.0036L73.2368 13.0042C73.2372 13.0038 73.2376 13.0035 73.238 13.0031L73.2375 13.0036ZM80.0022 121.497L80.6948 122.162L81.3874 121.497L125.313 79.3175L126.064 78.5962L125.313 77.8749L80.0701 34.4297L79.3775 33.7646L78.6849 34.4297L34.7594 76.6092L34.0083 77.3305L34.7594 78.0518L80.0022 121.497Z"
                  stroke-width="7"
                />
              </svg>

              <div className="BottomNavbarHomeTextDiv">
                <div className="BottomNavbarHomeText">About</div>
              </div>
            </div>
          </Link>
          <Link to="/contact" className="bottom-navbar-links">
            <div
              className="bottom-navbar-container-1"
              onClick={this.handleContactClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 511.991 511.991"
                className={"BottomNavbarIcon-" + this.state.contactClicked}
              >
                <g>
                  <g>
                    <g>
                      <path d="M511.991,196.243c0-0.179-0.094-0.333-0.102-0.503c-0.053-0.591-0.17-1.175-0.35-1.741     c-0.118-0.505-0.281-0.999-0.486-1.476c-0.244-0.452-0.529-0.881-0.853-1.28c-0.338-0.489-0.727-0.941-1.161-1.348     c-0.137-0.12-0.196-0.282-0.341-0.393l-82.039-63.735V59.71c0-14.138-11.462-25.6-25.6-25.6h-92.476L271.556,5.361     c-9.149-7.128-21.972-7.128-31.121,0L203.401,34.11h-92.476c-14.138,0-25.6,11.461-25.6,25.6v66.057L3.294,189.502     c-0.145,0.111-0.205,0.273-0.341,0.393c-0.434,0.407-0.823,0.859-1.161,1.348c-0.324,0.399-0.61,0.828-0.853,1.28     c-0.207,0.476-0.37,0.97-0.486,1.476c-0.178,0.555-0.295,1.127-0.35,1.707c0,0.171-0.102,0.324-0.102,0.503v290.167     c0.034,2.748,0.515,5.471,1.425,8.064c-1.959,2.954-1.867,6.816,0.229,9.674c2.096,2.858,5.752,4.106,9.158,3.126     c4.312,3.081,9.48,4.737,14.78,4.736h460.8c5.322-0.011,10.506-1.691,14.822-4.804c0.728,0.224,1.483,0.347,2.244,0.367     c3.117,0.018,5.991-1.68,7.479-4.419c1.488-2.739,1.349-6.074-0.362-8.679c0.907-2.593,1.385-5.317,1.417-8.064V196.243z      M250.871,18.827c2.98-2.368,7.2-2.368,10.18,0l19.686,15.283h-49.493L250.871,18.827z M27.708,494.91l223.164-173.346     c2.982-2.354,7.19-2.354,10.172,0L484.275,494.91H27.708z M494.925,481.581L271.539,308.09c-9.143-7.118-21.952-7.118-31.095,0     L17.058,481.581V209.239l139.836,108.587c3.726,2.889,9.088,2.211,11.977-1.515c2.889-3.726,2.211-9.088-1.515-11.977     L25.293,194.016l60.032-46.643v65.937c0,4.713,3.821,8.533,8.533,8.533c4.713,0,8.533-3.821,8.533-8.533V59.71     c0-4.713,3.82-8.533,8.533-8.533h290.133c4.713,0,8.533,3.82,8.533,8.533v153.6c0,4.713,3.82,8.533,8.533,8.533     s8.533-3.821,8.533-8.533v-65.937l60.032,46.643L344.371,304.531c-3.723,2.891-4.397,8.253-1.506,11.977     c2.891,3.723,8.253,4.397,11.977,1.506l140.083-108.774V481.581z" />
                      <path d="M170.658,110.91h170.667c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H170.658     c-4.713,0-8.533,3.82-8.533,8.533S165.945,110.91,170.658,110.91z" />
                      <path d="M349.858,153.577c0-4.713-3.82-8.533-8.533-8.533H170.658c-4.713,0-8.533,3.821-8.533,8.533     c0,4.713,3.82,8.533,8.533,8.533h170.667C346.038,162.11,349.858,158.289,349.858,153.577z" />
                      <path d="M349.858,204.777c0-4.713-3.82-8.533-8.533-8.533h-76.8c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h76.8     C346.038,213.31,349.858,209.489,349.858,204.777z" />
                    </g>
                  </g>
                </g>
              </svg>
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
