import React, { useState } from "react";

const MainJobBoardItem = ({ item }) => {
  const [itemOpen, setMenuOpen] = useState(false);

  const handleDropdown = () => setMenuOpen(!itemOpen);

  return (
    <React.Fragment>
      <div className="all-jobs" onClick={handleDropdown}>
        <h1>{item.id}</h1>
        <div className="pre-dropdown-container">
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
          </div>
          <div className="days-ago-div">{item.days_since_posted}</div>
          <div className="apply-now-div">
            <form action={item.company_email} target="_blank">
              <button type="submit" className="apply-now-button">
                Apply
              </button>
            </form>
          </div>
        </div>
        {itemOpen && <h1>{item.job_description}</h1>}
      </div>
    </React.Fragment>
  );
};

export default MainJobBoardItem;
