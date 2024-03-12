import React, { useState, useEffect } from "react";
import "./_ResourcesFilter.scss";

function ResourcesFilter(props) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const {
    categories,
    sortingWays,
    filterSelected,
    sortingSelected,
    handleSortingChange,
    handleApply,
    lang,
  } = props;

  function toggleMenu() {
    setDisplayMenu(!displayMenu);
  }

  function toggleMobileMenu() {
    setDisplayMobileMenu(!displayMobileMenu);
  }

  useEffect(() => setDisplayMenu(false), [sortingSelected, filterSelected]);

  let sLang = "";
  if (lang === "uk") {
    sLang = "/uk";
  }
  let filterClass = filterSelected;
  if (filterSelected === "") {
    filterClass = "all";
  }
  let mobFilterName = "All";
  if (filterSelected !== "" && filterSelected !== undefined) {
    mobFilterName = filterSelected.replace(/-/g, " ");
  }

  return (
    <div className="resources-filter">
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
                {e.slug !== "" ? (
                  <a href={`${sLang}/resources/${e.slug}/`}>
                    <span
                      className={`${filterClass === e.key ? "underlined" : ""}`}
                      data-name={e.slug}
                    >
                      {e.name !== "" ? e.name : "All"}
                    </span>
                  </a>
                ) : (
                  <a href={`${sLang}/resources/`}>
                    <span
                      className={`${filterClass === e.key ? "underlined" : ""}`}
                      data-name={e.slug}
                    >
                      {e.name !== "" ? e.name : "All"}
                    </span>
                  </a>
                )}
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
                  alt="Toggle Button"
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
                      onChange={e => handleSortingChange(e.target.value, true)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Mobile */}
        <div className="mobile-header">
          <span className="filter-selected capitalize">{`Showing: ${mobFilterName}`}</span>
          <button className="filter-button" onClick={toggleMobileMenu}>
            <img
              src={
                displayMobileMenu
                  ? "/images/icons/up.svg"
                  : "/images/icons/down.svg"
              }
              alt="Toggle Mobile Menu"
            />
          </button>
        </div>
      </div>

      {displayMobileMenu && (
        <div className="mobile-filter-dropdown">
          <a href={`${sLang}/resources/`}>
            <span className="clear-option">Clear All</span>
          </a>

          <div className="mobile-filter-options">
            {categories.slice(1).map((e, i) => (
              <div
                className={`filter-items ${
                  i < categories.length - 1 ? "divider" : ""
                }`}
                key={i}
              >
                {e.slug !== "" ? (
                  <a href={`${sLang}/resources/${e.slug}/`}>
                    <span
                      className={`${filterClass === e.key ? "underlined" : ""}`}
                      data-name={e.slug}
                    >
                      {e.name !== "" ? e.name : "All"}
                    </span>
                  </a>
                ) : (
                  <a href={`${sLang}/resources/`}>
                    <span
                      className={`${filterClass === e.key ? "underlined" : ""}`}
                      data-name={e.slug}
                    >
                      All
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mobile-filter-options">
            <div className="filter-items">
              <span>Sort</span>
            </div>
            {sortingWays.slice(1).map(sortingOption => (
              <div className="filter-items" key={sortingOption}>
                <label htmlFor={sortingOption}>{sortingOption}</label>
                <input
                  id={sortingOption}
                  type="radio"
                  name="sorting"
                  value={sortingOption}
                  checked={sortingSelected === sortingOption}
                  onChange={e => handleSortingChange(e.target.value, false)}
                />
              </div>
            ))}
          </div>

          <div className="apply-button">
            <button
              className="btn btn-dark"
              onClick={e => {
                handleApply();
                toggleMobileMenu();
              }}
            >
              <span className="in">Apply</span>
              <span className="out">Apply</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResourcesFilter;
