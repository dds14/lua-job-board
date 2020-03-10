import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';
import "./MainJobBoardDisplayPage.scss";
import MainJobBoard from "./MainJobBoard";
import Footer from "../Footer/Footer";
import { JOB_FILTERS } from './job_filters';

const MainJobBoardDisplayPage = () => {
  const [jobs, setJobs] = useState([]);
  const [activeFilter, setActiveFilter] = useState(JOB_FILTERS.NONE);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("/getjobs").then(res => {
      filterJobs(res.data)
    });
  }, [activeFilter]);

  const filterJobs = (jobs) => {
    if (activeFilter === JOB_FILTERS.NONE) {
      setJobs(jobs)
    } else {
      const filteredJobs = []
      jobs.forEach(job => {
        for (let i = 0; i < activeFilter.length; i++) {
          if (job.job_name.includes(activeFilter[i])) {
            filteredJobs.push(job);
          }
        }
      })
      setJobs(filteredJobs);
    }
  }

  return (
    <div className="entire-job-board-display-page">
      <h1 className="job-board-title">Job Board</h1>
      <h2 className="job-board-tagline">
        🔥 None Of These Jobs Require A CS Degree
      </h2>
      <h2 className="job-board-coming-soon">
        UI/UX and Data Science positions coming soon. Sign up{" "}
        <a
          href="https://jobs.trylua.com/devjobs"
          className="job-board-coming-soon-signup"
          target="_blank"
        >
          here
        </a>{" "}
        to be notified when they are added.
      </h2>
      <MainJobBoard jobs={jobs}/>
      <Footer />
    </div>
  );
}

export default MainJobBoardDisplayPage;
