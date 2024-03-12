import React from "react";
import "./_JobsWrapper.scss";
import JobsList from "../JobsList/JobsList";
import JobsTitle from "../JobsTitle/JobsTitle";
import JobsFilter from "../JobsFilter/JobsFilter";

const categories = [
  {
    name: "All",
    key: "all",
  },
  {
    name: "Teams",
    key: "teams",
  },
  {
    name: "Locations",
    key: "locations",
  },
];
function JobsWrapper(props) {
  const {
    filteredJobs,
    totalJobs,
    handleFilterDisplay,
    handleRemoveFilters,
    handleSortingChange,
    sortingSelected,
    activeFilters,
  } = props;
  return (
    <>
      <section className="open-roles-jobs cream-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <JobsFilter
                categories={categories}
                handleFilterDisplay={handleFilterDisplay}
                handleRemoveFilters={handleRemoveFilters}
                handleSortingChange={handleSortingChange}
                sortingSelected={sortingSelected}
                activeFilters={activeFilters}
              />
              <JobsTitle totalJobs={totalJobs}></JobsTitle>
              <JobsList jobs={filteredJobs} lang={props.lang}></JobsList>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobsWrapper;
