import React, { useState } from "react";
import "./_JobsFilter.scss";

const sortingWays = ["alphabetize", "newest", "oldest"];

function JobsFilter(props) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const {
    categories,
    handleFilterDisplay,
    handleRemoveFilters,
    handleSortingChange,
    sortingSelected,
    activeFilters,
  } = props;

  function toggleMenu() {
    setDisplayMenu(!displayMenu);
  }

  function toggleMobileMenu() {
    setDisplayMobileMenu(!displayMobileMenu);
  }

  return (
    <div className="jobs-filter resources-filter">
      <div className="resources-filter-header">
        {/* Desktop */}
        <div className="desktop-header">
          <div className="desktop-filter-options">
            {categories.map((e, i) => (
              <div
                className={`desktop-filter-items ${
                  i < categories.length - 1 ? "divider" : ""
                }`}
                key={i}
              >
                <span
                  onClick={
                    i === 0
                      ? handleRemoveFilters
                      : () => handleFilterDisplay(e.key)
                  }
                >
                  <span
                    className={`${
                      e.key === "all" &&
                      Object.values(activeFilters).every(item => item === false)
                        ? "underlined"
                        : activeFilters[e.key]
                        ? "underlined"
                        : ""
                    }`}
                  >
                    {e.name}
                  </span>
                  {i > 0 && (
                    <button className="filter-button">
                      <img src={"/images/icons/down.svg"} alt="Toggle Filter" />
                    </button>
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className="desktop-sorting-options">
            <div className="sort-button" onClick={toggleMenu}>
              <span>Sort</span>
              <button className="filter-button">
                <img
                  src={
                    displayMenu
                      ? "/images/icons/up.svg"
                      : "/images/icons/down.svg"
                  }
                  alt="Toggle Filter"
                />
              </button>
            </div>
            {displayMenu && (
              <div className="filter-sort">
                {sortingWays.map(sortingOption => (
                  <div className="filter-radio" key={sortingOption}>
                    <label htmlFor={sortingOption}>{sortingOption}</label>
                    <input
                      id={sortingOption}
                      type="radio"
                      name="sorting"
                      value={sortingOption}
                      checked={sortingSelected === sortingOption}
                      onChange={e => handleSortingChange(e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Mobile */}
        <div className="mobile-header">
          <span className="filter-selected">{`Filters:`}</span>
          <button className="filter-button" onClick={toggleMobileMenu}>
            <img
              src={
                displayMobileMenu
                  ? "/images/icons/up.svg"
                  : "/images/icons/down.svg"
              }
              alt="Toggle Filter"
            />
          </button>
        </div>
      </div>

      {displayMobileMenu && (
        <div className="mobile-filter-dropdown">
          <span className="clear-option" onClick={handleRemoveFilters}>
            Clear All
          </span>
          <div className="mobile-filter-options">
            {categories.slice(1).map((e, i) => (
              <div
                className={`filter-items ${
                  i < categories.length - 1 ? "divider" : ""
                }`}
                key={i}
              >
                <span
                  className={`${activeFilters[e.key] ? "underlined" : ""}`}
                  onClick={() => handleFilterDisplay(e.key)}
                >
                  {e.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mobile-filter-options">
            <div className="filter-items">
              <span>Sort</span>
            </div>
            {sortingWays.map(sortingOption => (
              <div className="filter-items" key={sortingOption}>
                <label htmlFor="alphabetize">{sortingOption}</label>
                <input
                  id={sortingOption}
                  type="radio"
                  name="sorting"
                  value={sortingOption}
                  checked={sortingSelected === sortingOption}
                  onChange={e => handleSortingChange(e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default JobsFilter;
