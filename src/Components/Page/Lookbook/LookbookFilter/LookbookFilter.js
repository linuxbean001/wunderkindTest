import React, { useState } from "react";
import "./_LookbookFilter.scss";

const LookbookFilter = props => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const { categories, filterChanged } = props;

  return (
    <div className="lookbook-filter">
      <div className="resources-filter-header">
        {/* Desktop */}
        <div className="lb-desktop-header">
          <div className="lb-desktop-filter-options">
            <div className="flex side-filter-btn side-filters-wrapper">
              <div className="side-filter-options">
                <div
                  className="sort-button"
                  onClick={() => filterChanged("industries")}
                >
                  <span>Industry</span>
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
              </div>
              <div className="desktop-sorting-options">
                <div
                  className="sort-button"
                  onClick={() => filterChanged("features")}
                >
                  <span>Feature</span>
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
              </div>
            </div>
          </div>
          <div className="lb-desktop-filter-options">
            <div className="flex items-center fixed-categories">
              {categories.map((cat, i) => (
                <div
                  className={`divider-left desktop-filter-items fixed-category-item font-larsseit font-bold ${
                    i < categories.length - 1 ? "divider" : ""
                  }`}
                  key={i}
                >
                  <div className={cat.isActive ? "p-2 active-category" : "p-2"}>
                    <span
                      className="cursor-pointer py-4"
                      onClick={() => filterChanged(cat.name)}
                    >
                      {cat.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookbookFilter;
