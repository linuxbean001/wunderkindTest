import React, { Fragment, useEffect } from "react";
import "./_FlyOutFilter.scss";
import Image from "../../../Image/Image";

const FlyOutFilter = props => {
  const {
    filters,
    handleFilterChange,
    handleRemoveFilters,
    handleCheckboxChange,
    handleFilterDisplay,
    displayFilter,
    openedFilters,
    expandedFilter,
    handleOpenedFilterDisplay,
  } = props;

  useEffect(() => {}, [filters]);

  return (
    <div
      className={`fly-out-filter ${!displayFilter ? "hide-fly-filter" : ""}`}
    >
      <div className="fly-out-filter-header">
        <h3 className="filter-title">Filter</h3>
        <button
          className="btn btn-sign btn-close btn-inv"
          onClick={handleFilterDisplay}
        >
          <span className="in">
            <Image src={"/images/icons/icon-close-light.svg"}></Image>
          </span>
          <span className="out">
            <Image src={"/images/icons/icon-close.svg"}></Image>
          </span>
        </button>
      </div>
      <div className="fly-out-filter-options">
        <hr className="filter-divider" />
        <span className="clear-filter" onClick={handleRemoveFilters}>
          Clear All
        </span>
        <hr className="filter-divider" />
        {filters.teams && (
          <div className={`fly-out-filter-items`}>
            <div className="filter-name-wrapper">
              <span className="filter-item-title"> Teams </span>
              <span
                className="toggle-display"
                onClick={() => handleOpenedFilterDisplay("teams")}
              >
                <Image
                  src={
                    !openedFilters.teams
                      ? "/images/icons/plus.svg"
                      : "/images/icons/minus.svg"
                  }
                ></Image>
              </span>
            </div>
            {filters.teams.map((team, i) => (
              <div
                className={`filter-item ${
                  !openedFilters.teams ? "hide-filter" : ""
                }`}
                key={"team-" + i}
              >
                <label className="filter-label" htmlFor={`team-${i}`}>
                  {team.name}
                </label>
                <input
                  id={`team-${i}`}
                  type="checkbox"
                  name="teams"
                  value={team.name}
                  checked={team.isChecked}
                  onChange={e => handleCheckboxChange(e)}
                />
              </div>
            ))}
          </div>
        )}

        {filters.locations && (
          <Fragment>
            <hr className="filter-divider" />
            <div className={`fly-out-filter-items`}>
              <div className="filter-name-wrapper">
                <span className="filter-item-title"> Locations </span>
                <span
                  className="toggle-display"
                  onClick={() => handleOpenedFilterDisplay("locations")}
                >
                  <Image
                    src={
                      !openedFilters.locations
                        ? "/images/icons/plus.svg"
                        : "/images/icons/minus.svg"
                    }
                  ></Image>
                </span>
              </div>
              {filters.locations.map((location, i) => (
                <div
                  className={`filter-item ${
                    !openedFilters.locations ? "hide-filter" : ""
                  }`}
                  key={"location-" + i}
                >
                  <label className="filter-label" htmlFor={`location-${i}`}>
                    {location.name}
                  </label>
                  <input
                    id={`location-${i}`}
                    type="checkbox"
                    name="locations"
                    value={location.name}
                    checked={location.isChecked}
                    onChange={e => handleCheckboxChange(e)}
                  />
                </div>
              ))}
            </div>
          </Fragment>
        )}

        {filters.filtersData && (
          <Fragment>
            {filters.filtersData.map((filterData, i) => {
              return (
                <Fragment key={`${filterData.name}-` + i}>
                  <hr className="filter-divider" />
                  <div className={`fly-out-filter-items`}>
                    <div className="filter-name-wrapper">
                      <span className="filter-item-title">
                        {filterData.name}
                      </span>
                      <span
                        className="toggle-display"
                        onClick={() =>
                          handleOpenedFilterDisplay(
                            filterData.name.toLowerCase()
                          )
                        }
                      >
                        <Image
                          src={
                            expandedFilter !== filterData.name.toLowerCase()
                              ? "/images/icons/plus.svg"
                              : "/images/icons/minus.svg"
                          }
                        ></Image>
                      </span>
                    </div>
                    {filterData.dataArray.map((data, i) => (
                      <div
                        className={`filter-item pl-4 ${
                          expandedFilter !== filterData.name.toLowerCase()
                            ? "hide-filter"
                            : ""
                        }`}
                        key={`${filterData.name.toLowerCase()}-${i}`}
                      >
                        <label
                          className="filter-label"
                          htmlFor={`${filterData.name.toLowerCase()}-${i}`}
                        >
                          {data.name}
                        </label>
                        <input
                          id={`${filterData.name.toLowerCase()}-${i}`}
                          type="checkbox"
                          name={filterData.name.toLowerCase()}
                          value={data.name}
                          checked={data.isChecked}
                          onChange={e => handleCheckboxChange(e)}
                        />
                      </div>
                    ))}
                  </div>
                </Fragment>
              );
            })}
          </Fragment>
        )}
      </div>
      <hr className="filter-divider" />
      {!filters.filtersData && (
        <button className="btn btn-dark btn-apply" onClick={handleFilterChange}>
          <span className="in">Apply </span>
          <span className="out">Apply</span>
        </button>
      )}
    </div>
  );
};

export default FlyOutFilter;
