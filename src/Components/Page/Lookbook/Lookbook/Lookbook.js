import React, { useState, useEffect, Fragment } from "react";
import LookbookFilter from "Components/Page/Lookbook/LookbookFilter/LookbookFilter";
import "./_Lookbook.scss";
import Card from "../../../../UI/Card";
import fnLoadInfo from "../../../../utils/fnLoadInfo";
import SideFilter from "../../../../UI/SideFilter";

const LookbookComponent = props => {
  const { lookbooks, categories, features, industries, lang } = props;
  const [filteredLookbooks, setFilteredLookbooks] = useState(lookbooks);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [expandedFilter, setExpandedFilter] = useState("");
  const [displayedItems, setDisplayedItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  const [isThereMore, setIsThereMore] = useState(
    filteredLookbooks.length > displayedItems
  );
  const [filters, setFilters] = useState(getInititalFilterData());
  const [displaySideFilter, setDisplaySideFilter] = useState(false);

  const itemsToDisplayCount = 9;
  const postUrl = lang === "uk" ? "/uk/lookbook" : "/lookbook";

  const onLoadMore = (displayedItems, qty, filteredLookbooks, loadMore) => {
    const loadedInfo = fnLoadInfo(
      displayedItems,
      qty,
      filteredLookbooks,
      loadMore
    );
    setItemsToDisplay(loadedInfo.itemsToDisplay);
    setDisplayedItems(loadedInfo.itemsToDisplay);
    setIsThereMore(loadedInfo.isThereMore);
  };

  function getInititalFilterData() {
    const initialFilters = {
      filtersData: [
        { name: "Features", dataArray: features || [] },
        { name: "Industries", dataArray: industries || [] },
      ],
    };
    return initialFilters;
  }

  const onSideFilterChange = filterArr => {
    if (filterArr.length === 0) {
      setItemsToDisplay(displayedItems);
    } else {
      let subFilteredLookbooks = [];
      filterArr.forEach(filter => {
        if (filter.name === "features") {
          return displayedItems.find(item =>
            item.hLookbookFeatures.edges.find(edge => {
              if (edge.node.name.toLowerCase() === filter.value.toLowerCase()) {
                subFilteredLookbooks.push(item);
              }
            })
          );
        }
        if (filter.name === "industries") {
          return displayedItems.find(item =>
            item.hLookbookIndustries.edges.find(edge => {
              if (edge.node.name.toLowerCase() === filter.value.toLowerCase()) {
                subFilteredLookbooks.push(item);
              }
            })
          );
        }
      });
      setItemsToDisplay(subFilteredLookbooks);
    }
  };

  const applyFilterChanges = filteredLbs => {
    let newFilteredLookbooks = [];
    lookbooks.map(lookbook => {
      checkedFilters.length === 0
        ? setItemsToDisplay(lookbooks)
        : checkedFilters.map(filter => {
            switch (filter.name) {
              case "features":
                lookbook.hLookbookFeatures.edges.map(edge => {
                  if (
                    edge.node.name.toLowerCase() === filter.value.toLowerCase()
                  ) {
                    newFilteredLookbooks.push(lookbook);
                  }
                });
                break;
              case "industries":
                lookbook.hLookbookIndustries.edges.map(edge => {
                  if (
                    edge.node.name.toLowerCase() === filter.value.toLowerCase()
                  ) {
                    newFilteredLookbooks.push(lookbook);
                  }
                });
                break;
            }
            setItemsToDisplay(newFilteredLookbooks);
            setIsThereMore(newFilteredLookbooks.length > displayedItems.length);
          });
    });
  };

  const removeAllFilters = () => {
    setDisplaySideFilter(false);
    setFilters(filters);
    setItemsToDisplay(displayedItems);
    setIsThereMore(filteredLookbooks.length > displayedItems.length);
  };

  useEffect(() => {
    categories.map(cat => {
      if (cat.name === "All") {
        cat.isActive = true;
      } else {
        cat.isActive = false;
      }
    });
    applyFilterChanges();
    const loadedInfo = fnLoadInfo(
      displayedItems,
      itemsToDisplayCount,
      filteredLookbooks,
      false
    );
    setItemsToDisplay(loadedInfo.itemsToDisplay);
    setDisplayedItems(loadedInfo.itemsToDisplay);
    setIsThereMore(loadedInfo.isThereMore);
  }, [checkedFilters, filters]);

  const onFilterChanged = filter => {
    if (filter === "industries" || filter === "features") {
      if (displaySideFilter && filter === expandedFilter) {
        setDisplaySideFilter(false);
      } else {
        setDisplaySideFilter(true);
        setExpandedFilter(filter);
      }
    } else {
      categories.map(cat => {
        if (cat.name === filter) {
          cat.isActive = true;
        } else {
          cat.isActive = false;
        }
      });
      setSelectedCategory(filter);
      setDisplaySideFilter(false);
      switch (filter) {
        case "All":
          setItemsToDisplay(lookbooks);
          setDisplayedItems(lookbooks);
          setIsThereMore(false);
          break;
        default:
          const items = lookbooks.filter(
            lookbook =>
              lookbook.hLookbookInventoryTypes.edges[0].node.name === filter
          );
          setItemsToDisplay(items);
          setDisplayedItems(items);
          setIsThereMore(items.length > displayedItems.length);
      }
    }
  };

  const closeSideFilter = () => {
    setDisplaySideFilter(false);
  };

  const onHandleOpenedFilterDisplay = filter => {
    expandedFilter === filter
      ? setExpandedFilter("")
      : setExpandedFilter(filter);
  };

  return (
    <Fragment>
      <section className="section-lookbook">
        <div className="container">
          <div className="lookbook">
            <div className="filter-wrapper">
              <LookbookFilter
                categories={categories}
                filterChanged={onFilterChanged}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="lookbook">
            <div className="lookbook-title">
              Showing:{" "}
              <span className="filter-selected capitalize">
                {selectedCategory !== "" ? selectedCategory : "All"}
              </span>
            </div>
            <div className="cards-grid grid grid-cols-3 gap-6">
              {itemsToDisplay.map((item, index) => {
                return (
                  <Card
                    key={index}
                    imageUrl={item.featuredImage?.mediaItemUrl}
                    firstSection={item.hLookbookIndustries.edges[0]?.node.name}
                    secondSection={item.title}
                    thirdSection={item.hLookbookFeatures.edges[0]?.node.name}
                    url={postUrl}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {isThereMore && (
          <div className="load-more">
            <button
              className="btn btn-dark"
              onClick={() =>
                onLoadMore(displayedItems, 3, filteredLookbooks, true)
              }
            >
              <span className="in">Load More</span>
              <span className="out">Load More</span>
            </button>
          </div>
        )}
      </section>

      <SideFilter
        sfStyle={displaySideFilter ? "block" : "hidden"}
        filters={filters}
        displayFilter={displaySideFilter}
        handleFilterDisplay={closeSideFilter}
        expandedFilter={expandedFilter}
        handleFilterChange={onSideFilterChange}
        handleRemoveFilters={removeAllFilters}
        handleOpenedFilterDisplay={onHandleOpenedFilterDisplay}
      />
    </Fragment>
  );
};

export default LookbookComponent;
