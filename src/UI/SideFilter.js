import React, { Fragment, useEffect, useState } from "react";
import Image from "../Components/Image/Image";
import Modal from "../UI/Modal";

const SideFilter = props => {
  const {
    onClose,
    filters,
    handleFilterChange,
    handleRemoveFilters,
    handleFilterDisplay,
    displayFilter,
    expandedFilter,
    handleOpenedFilterDisplay,
    sfStyle,
  } = props;

  const [checkedItems, setCheckedItems] = useState([]);
  const [changedFilters, setChangedFilters] = useState(filters);

  useEffect(() => {}, [changedFilters, checkedItems, sfStyle, filters]);

  const handleCbChange = e => {
    const index = checkedItems.findIndex(
      item => item.name === e.target.name && item.value === e.target.value
    );
    e.target.checked
      ? checkedItems.push({
          name: e.target.name,
          value: e.target.value,
          isChecked: true,
        })
      : checkedItems.splice(index, 1);
    setCheckedItems(checkedItems);
    setChangedFilters(filters);
  };

  const handleClearAll = () => {
    const clist = document.getElementsByTagName("input");
    for (const el of clist) {
      el.checked = false;
    }
    setCheckedItems([]);
    handleRemoveFilters();
  };

  return (
    <Modal sfStyle={sfStyle} onClose={onClose}>
      <div className={`side-filter ${!displayFilter ? "hide-fly-filter" : ""}`}>
        <div className="side-filter-header">
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
        <div className="side-filter-options">
          <hr className="filter-divider" />
          <span className="clear-filter" onClick={handleClearAll}>
            Clear All
          </span>
          <hr className="filter-divider" />
          {filters.filtersData && (
            <Fragment>
              {filters.filtersData.map((filterData, i) => {
                return (
                  <Fragment key={`${filterData.name}-` + i}>
                    <hr className="filter-divider" />
                    <div className={`side-filter-items`}>
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
                            onChange={e => handleCbChange(e)}
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

        <button
          className="btn btn-dark mt-8"
          onClick={() => handleFilterChange(checkedItems)}
        >
          <span className="in">Apply </span>
          <span className="out">Apply</span>
        </button>
      </div>
    </Modal>
  );
};

export default SideFilter;
