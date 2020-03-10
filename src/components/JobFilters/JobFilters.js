import React from "react";
import "./JobFilters.scss";
import { FILTER_OPTIONS } from "./job_filters.js";

const JobFiltersUI = ({ applyFilter }) => {
  const renderFilters = FILTER_OPTIONS.map((option, i) => (
    <button key={i} onClick={() => applyFilter(option.filter)}>
      <img />
      <h2>{option.text}</h2>
    </button>
  ));

  return <div>{renderFilters}</div>;
};

export default JobFiltersUI;
