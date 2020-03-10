import React from "react";
import "./JobFilters.scss";
import { FILTER_OPTIONS } from "./job_filters.js";

const JobFiltersUI = ({ activeFilter, setActiveFilter }) => {
  const renderFilters = FILTER_OPTIONS.map((option, i) => {
    const buttonClassName = "filter-button";
    const checkForActive =
      activeFilter === option.filter
        ? `${buttonClassName} active-ui`
        : `${buttonClassName} passive-ui`;

    return (
      <button
        className={checkForActive}
        key={i}
        onClick={() => setActiveFilter(option.filter)}
      >
        <h1>{option.emoji}</h1>
        <h2>{option.text}</h2>
      </button>
    );
  });

  return <div className="filters-container">{renderFilters}</div>;
};

export default JobFiltersUI;
