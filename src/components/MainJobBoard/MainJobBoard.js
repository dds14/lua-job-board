import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainJobBoard.scss";
import MainJobBoardItem from "./MainJobBoardItem";
// import Footer from "../Footer/Footer";

const MainJobBoard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/getjobs").then(res => {
      setJobs(res.data);
    });
  }, []);

  const renderJobs = jobs.map(item => (
    <MainJobBoardItem item={item} key={item.id} />
  ));

  return (
    <div>
      {jobs.length > 0 ? renderJobs : <h1> Loading jobs, hang tight</h1>}
    </div>
  );
};

export default MainJobBoard;
