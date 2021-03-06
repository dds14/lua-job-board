import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./MainJobBoardDisplayPage.scss";
import JobFilters from "../JobFilters/JobFilters";
import Footer from "../Footer/Footer";
import MainJobBoard from "./MainJobBoard";
import { JOB_FILTERS } from "../JobFilters/job_filters";

const MainJobBoardDisplayPage = () => {
  const [jobs, setJobs] = useState([]);
  const [activeFilter, setActiveFilter] = useState(JOB_FILTERS.NONE);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("/getjobs").then(res => {
      filterJobs(res.data);
    });
  }, [activeFilter]);

  const filterJobs = jobs => {
    if (activeFilter === JOB_FILTERS.NONE) {
      setJobs(jobs);
    } else {
      const filteredJobs = [];
      jobs.forEach(job => {
        for (let i = 0; i < activeFilter.length; i++) {
          if (job.job_name.includes(activeFilter[i])) {
            filteredJobs.push(job);
          }
        }
      });
      setJobs(filteredJobs);
    }
  };

  return (
    <div className="entire-job-board-display-page">
      <h1 className="job-board-title">Job Board</h1>
      <h2 className="job-board-tagline">
        🔥 None Of These Jobs Require A CS Degree
      </h2>
      <h2 className="job-board-coming-soon">
        We add new jobs every few days. We also send out our top jobs in an
        email before adding them here. Sign up{" "}
        <a
          href="https://jobs.trylua.com/devjobs"
          className="job-board-coming-soon-signup"
          target="_blank"
        >
          here
        </a>{" "}
        to get them.
      </h2>
      <JobFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <MainJobBoard jobs={jobs} />
      <Footer />
    </div>
  );
};

export default MainJobBoardDisplayPage;
