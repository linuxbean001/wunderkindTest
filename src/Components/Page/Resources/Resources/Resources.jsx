import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { graphql, useStaticQuery } from "gatsby";
import CardList from "Components/General/CardList/CardList";
import ResourcesFilter from "Components/Page/Resources/ResourcesFilter/ResourcesFilter";
import SonosBanner from "Components/Page/Resources/SonosBanner/SonosBanner";
import AccordionMenu from "Components/Page/Resources/ResourcesLeftFilterMenu/AccordionMenu";
import "./_Resources.scss";

const N = 9;

// const sortingWays = ["newest", "oldest", "relevance", "alphabetize"];
const sortingWays = ["newest", "oldest"];

const initialCategories = [
  {
    name: "All",
    key: "all",
    slug: "",
  },
  {
    name: "Success Stories",
    key: "case-study",
    slug: "case-studies",
  },
  {
    name: "Research Study",
    key: "research-study",
    slug: "research-study",
  },
  {
    name: "Guides",
    key: "guide",
    slug: "guides",
  },
  {
    name: "Webinars",
    key: "webinar",
    slug: "webinars",
  },
  {
    name: "Podcasts",
    key: "podcast",
    slug: "podcasts",
  },
];

function Resources(props) {
  const [categories, setCategories] = useState(initialCategories);
  const [showFilter, setShowFilter] = useState(false);
  let params =
    typeof window !== `undefined`
      ? queryString.parse(window.location.search)
      : "";
  let pathArrayFull =
    typeof window !== `undefined`
      ? queryString.parse(window.location.pathname)
      : "";
  let pathArray = ["", "resources", ""];
  if (pathArrayFull) {
    if (Object.keys(pathArrayFull)) {
      if (Object.keys(pathArrayFull)[0]) {
        pathArray = Object.keys(pathArrayFull)[0].split("/");
      }
    }
  }

  let cat = pathArray[2];
  if (pathArray.includes("uk")) {
    cat = pathArray[3];
  }
  let appliedFilter =
    categories?.find(e => e.slug === cat) !== undefined ? "" : "";
  const { sorted, featured, list, lang } = props;
  const allItems = [...sorted, ...list];

  const [items, setItems] = useState(allItems);
  const [topItems, setTopItems] = useState(items);
  const [bottomItems, setBottomItems] = useState(items.slice(N, N * 2));
  const [filter, setFilter] = useState(appliedFilter);

  const [sorting, setSorting] = useState(sortingWays[0]);
  const [apply, setApply] = useState(false);
  const [isThereMore, setIsThereMore] = useState(items.length > N * 2);
  function pushHistoryFilter(newFilter) {
    if (typeof window !== `undefined`) {
      let currenturl = window.location.href;
      let rLang = "/resources/";
      if (currenturl.includes("uk")) {
        rLang = "/uk/resources/";
      }
      if (document.location.href.indexOf(newFilter) === -1) {
        window.history.pushState({}, "", rLang + newFilter);
      }
    }
  }
  function changeFilter(newFilter, apply) {
    setFilter(newFilter);
    setApply(apply);
    pushHistoryFilter(newFilter);
  }

  function changeSorting(newSorting, apply) {
    setSorting(newSorting);
    setApply(apply);
  }

  function clear() {
    pushHistoryFilter("");
    setFilter("");
    setSorting(sortingWays[0]);
  }

  useEffect(() => {
    if (apply) {
      applySelection();
    }
  }, [categories, apply, filter, sorting]);

  useEffect(() => {
    changeFilter(filter, true);
    filterCategories();
    document.getElementsByClassName("underlined")[0] &&
      document
        .getElementsByClassName("underlined")[0]
        .classList.remove("underlined");
    document.querySelectorAll('[data-name="' + filter + '"]')[0] &&
      document
        .querySelectorAll('[data-name="' + filter + '"]')[0]
        .classList.add("underlined");
  }, []);

  let filterNew = filter ? String(filter).replace(/-/g, " ") : cat;
  if (filterNew === "guide") {
    filterNew = "Guides";
  }
  if (filterNew === "webinar") {
    filterNew = "Webinars";
  }
  if (filterNew === "case study") {
    filterNew = "Success Stories";
  }
  if (filterNew === "podcast") {
    filterNew = "Podcasts";
  }
  if (filterNew === "") {
    filterNew = "All";
  }

  function applySelection() {
    // Filter
    if (cat === "case-studies") {
      cat = "case-study";
    }
    if (cat === "guides") {
      cat = "guide";
    }
    if (cat === "webinars") {
      cat = "webinar";
    }
    if (cat === "csuite-series") {
      cat = "c-suite-series";
    }
    if (cat === "podcasts") {
      cat = "podcast";
    }
    setFilter(cat);
    const slug =
      categories?.find(e => e.key === cat) !== undefined
        ? categories?.find(e => e.key === cat).key
        : "";
    const filtered = allItems.filter(item => {
      if (slug === "") {
        return true;
      }
      return (
        item.hResourceTypes &&
        item.hResourceTypes.nodes &&
        item.hResourceTypes.nodes[0] &&
        item.hResourceTypes.nodes[0].slug === slug
      );
    });

    // Sort
    let sorted = [];
    switch (sorting) {
      case "alphabetize":
        sorted = filtered.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
        break;
      case "oldest":
        sorted = filtered.sort((a, b) => a.modified - b.modified);
        break;
      case "newest":
        sorted = filtered.sort((a, b) => b.modified - a.modified);
        break;
      case "relevance":
        sorted = [...filtered];
        break;
      default:
        break;
    }
    setItems(sorted);
    setTopItems(sorted);
    setBottomItems(sorted.slice(N, N * 2));
    setIsThereMore(sorted.length > N * 2);
  }

  function loadMore() {
    let arr = [
      ...bottomItems,
      ...items.slice(N + bottomItems.length, bottomItems.length + N * 2),
    ];

    if (arr.length < bottomItems.length + N) {
      setIsThereMore(false);
    }

    setBottomItems(arr);
  }

  function filterCategories() {
    const filteredCategories = initialCategories.filter(cat => {
      if (cat.key === "all") {
        return true;
      }
      let hasResourceCat =
        allItems.find(
          el =>
            (el.hResourceTypes &&
              el.hResourceTypes.nodes &&
              el.hResourceTypes.nodes[0] &&
              el.hResourceTypes.nodes[0].slug) === cat.key
        ) !== undefined;

      return hasResourceCat;
    });
    setShowFilter(true);
    setCategories(filteredCategories);
  }

  const query = useStaticQuery(graphql`
    {
      wordPress {
        categories {
          nodes {
            name
            slug
            children(first: 1000) {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    }
  `);

  const sideContent = query.wordPress.categories.nodes;

  const applyFilter = checkedValues => {
    const filteredData = [];
    if (checkedValues.length > 0) {
      items.map(item => {
        if (
          item &&
          item.hResourceTermCategory &&
          Array.isArray(item.hResourceTermCategory.resourcesTermCategory) &&
          item.hResourceTermCategory.resourcesTermCategory.some(category =>
            checkedValues.includes(
              category && category.name ? category.name : ""
            )
          )
        ) {
          filteredData.push(item);
        }
        return null;
      });
      filteredData.sort((a, b) => b.modified - a.modified);
      setTopItems(filteredData);
      setBottomItems(filteredData.slice(N, N * 2));
      setIsThereMore(filteredData.length > N * 2);
    } else {
      const sortedItems = [...items].sort((a, b) => b.modified - a.modified);
      setTopItems(sortedItems);
      setBottomItems(sortedItems.slice(N, N * 2));
      setIsThereMore(sortedItems.length > N * 2);
    }
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = document.querySelector(".resources").offsetTop;
      const scrollTop = window.scrollY;
      const colMd9Height = document.querySelector(".section-resources")
        .offsetHeight;
      setIsSticky(
        window.innerWidth >= 768 &&
          scrollTop > offsetTop + 585 &&
          scrollTop <= offsetTop + colMd9Height
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="section-resources mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className={`LeftFitlerWrap ${isSticky ? "sticky" : ""}`}>
              <div className="leftFilterToglleMenu">
                <AccordionMenu
                  sideContent={sideContent}
                  applyFilter={applyFilter}
                  sortingWays={sortingWays}
                  handleFilterChange={changeFilter}
                  filterSelected={filter}
                  handleSortingChange={changeSorting}
                  sortingSelected={sorting}
                  handleApply={applySelection}
                  handleClear={clear}
                  lang={lang}
                />
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="resources">
              <CardList lang={lang} list={topItems} />
            </div>

            {featured && (
              <div className="featured-case-study">
                <SonosBanner lang={lang} {...featured} />{" "}
              </div>
            )}

            {/* <div className="resources resourcesBottomItem">
              <CardList
                lang={lang}
                list={bottomItems}
                isThereMore={isThereMore}
                loadMore={loadMore}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
