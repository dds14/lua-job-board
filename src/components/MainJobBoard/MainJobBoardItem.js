import React, { useState } from "react";

const MainJobBoardItem = ({ item }) => {
  const [itemOpen, setMenuOpen] = useState(false);

  const handleDropdown = () => setMenuOpen(!itemOpen);

  return (
    <React.Fragment>
      <div className="all-jobs">
        {/* <h1>{item.id}</h1> */}
        <div className="pre-dropdown-container" onClick={handleDropdown}>
          <div className="company-logo-div">
            <img className="company-logo" src={item.company_logo}></img>
          </div>
          <div className="title-and-company-div">
            <div className="title-div">{item.job_name}</div>
            <div className="company-div">
              <p className="company-paragraph">{item.company_name}</p>
              <p> | </p>
              <p className="location-paragraph">
                <strong>{item.job_location}</strong>
              </p>
            </div>
            <div className="job-board-technologies-div">
              <p className="job-board-technologies-paragraph">{item.tech_1} </p>
              <p className="job-board-technologies-paragraph">{item.tech_2}</p>
              <p className="job-board-technologies-paragraph">{item.tech_3}</p>
              {/* <p className="job-board-technologies-paragraph">{item.tech_4}</p> */}
            </div>
          </div>
          <div className="days-ago-div">{item.days_since_posted}</div>
          <div className="apply-now-div">
            <a
              href={item.posting_link}
              target="_blank"
              className="typical-link"
            >
              <div className="apply-now-button-border">Apply Now</div>
            </a>
          </div>
        </div>
        {itemOpen && (
          <div className="entire-dropdown-div">
            <p className="dropdown-job-description">{item.job_description_1}</p>
            <p className="dropdown-job-description">{item.job_description_2}</p>
            <p className="dropdown-job-description">{item.job_description_3}</p>
            <p className="dropdown-job-description">{item.job_description_4}</p>
            <div className="dropdown-apply-now-button-div">
              <a
                href={item.posting_link}
                target="_blank"
                className="typical-link"
              >
                <div className="apply-now-button-border-dropdown">
                  Apply Now
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MainJobBoardItem;
