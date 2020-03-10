import React from "react";
import "./MainJobBoard.scss";
import MainJobBoardItem from "./MainJobBoardItem";
// import Footer from "../Footer/Footer";

const MainJobBoard = ({ jobs }) => {
  const renderJobs = jobs && jobs.map(item => (
    <MainJobBoardItem item={item} key={item.id} />
  ));

  return (
    <div>
      {jobs && jobs.length > 0 ? renderJobs : <h1> Loading jobs, hang tight</h1>}
    </div>
  );
};

export default MainJobBoard;
