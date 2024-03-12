import React, { useState } from "react";
import "./_AccordionMenu.scss";

const AccordionMenu = props => {
  const formatIndex = props.sideContent.findIndex(
    category => category.name === "Format"
  );

  const formatCategory = props.sideContent.splice(formatIndex, 1)[0];
  props.sideContent.push(formatCategory);

  const [showSortingOptions, setShowSortingOptions] = useState(false);

  const [checkedNames, setCheckedNames] = useState([]);
  const [expandedAccordionIndex, setExpandedAccordionIndex] = useState(null);
  const [expandedAccordionIndices, setExpandedAccordionIndices] = useState([]);

  const handleSortToggle = () => {
    setShowSortingOptions(!showSortingOptions);
  };

  const handleCheckboxChange = (parentIndex, childIndex, name) => event => {
    const isChecked = event.target.checked;
    setCheckedNames(prevNames => {
      if (isChecked) {
        return [...prevNames, name];
      } else {
        return prevNames.filter(item => item !== name);
      }
    });
    applyFilter(
      isChecked
        ? [...checkedNames, name]
        : checkedNames.filter(item => item !== name)
    );
  };

  const applyFilter = checkedValues => {
    props.applyFilter(checkedValues);
  };

  const toggleAccordion = index => {
    if (expandedAccordionIndices.includes(index)) {
      setExpandedAccordionIndices(prevIndices =>
        prevIndices.filter(item => item !== index)
      );
    } else {
      setExpandedAccordionIndices(prevIndices => [...prevIndices, index]);
    }
  };

  const renderChildren = (children, parentIndex) => {
    return children.nodes.map((child, index) => (
      <li
        key={index}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>{decodeEntities(child.name)}</span>
        <span className="checkbox">
          <label>
            <input
              type="checkbox"
              className="checkboxInput"
              name="action"
              value=""
              onChange={handleCheckboxChange(parentIndex, index, child.name)}
              checked={checkedNames.includes(child.name)}
            />
          </label>
        </span>
      </li>
    ));
  };

  const renderAccordionItems = () => {
    return props.sideContent.map((item, index) => (
      <div
        key={index}
        className={[
          "tab_Filter",
          expandedAccordionIndices.includes(index) ? "minus_icon" : "plus_icon",
        ].join(" ")}
      >
        <input type="radio" name={`accordion-${index}`} id={`rd${index}`} />
        <label
          htmlFor={`rd${index}`}
          className="tab__label"
          onClick={() => toggleAccordion(index)}
        >
          <span>{item.name}</span>
        </label>
        <div
          className="tab__content"
          style={{
            display: expandedAccordionIndices.includes(index)
              ? "block"
              : "none",
          }}
        >
          <ul className="list-group">{renderChildren(item.children)}</ul>
        </div>
      </div>
    ));
  };

  const renderSortingOptions = () => {
    return props.sortingWays.map((sortingOption, index) => {
      const capitalizedOption =
        sortingOption.charAt(0).toUpperCase() + sortingOption.slice(1);
      return (
        <div key={index} className="sort_filter_box">
          <div className="sortfilterlist">
            <input
              type="radio"
              name="sorting"
              id={`radio-${index + 1}`}
              value={sortingOption}
              checked={props.sortingSelected === sortingOption}
              onChange={e => props.handleSortingChange(e.target.value, true)}
            />
            <label htmlFor={`radio-${index + 1}`} className="radio-label">
              {capitalizedOption}
            </label>
          </div>
          <hr />
        </div>
      );
    });
  };

  const removeCheckedItem = itemToRemove => {
    setCheckedNames(prevNames =>
      prevNames.filter(item => item !== itemToRemove)
    );
    applyFilter(checkedNames.filter(item => item !== itemToRemove));
  };

  const decodeEntities = htmlString => {
    return htmlString
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  };

  return (
    <>
      <div className="tab_Filter">
        <div className="accor_filter">Filter</div>
        <input type="hidden" name="accor_filter" value="Filter" />
        <input type="radio" name="accordion-2" id="sort" />
        <label
          htmlFor="sort"
          className={`tab__label sort_lable ${
            showSortingOptions ? "arrowdown_icon" : "arrowup_icon"
          }`}
          onClick={handleSortToggle}
        >
          Sort
        </label>
        <div
          className="tab__content"
          style={{ display: showSortingOptions ? "block" : "none" }}
        >
          {renderSortingOptions()}
        </div>
      </div>

      {checkedNames.length > 0 && (
        <div className="LeftFilterTagData">
          {checkedNames.map((item, index) => (
            <div key={index} className="checked-item">
              <span>{decodeEntities(item)}</span>
              <span
                onClick={() => removeCheckedItem(item)}
                className="remove-item"
              >
                X
              </span>
            </div>
          ))}
        </div>
      )}
      {renderAccordionItems()}
    </>
  );
};

export default AccordionMenu;
