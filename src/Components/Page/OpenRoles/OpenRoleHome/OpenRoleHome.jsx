import React, { useState, useEffect } from "react";

import MainLayout from "../../../../layouts/Main";

//General Components
import Intro from "Components/General/Intro/Intro";
import Divider from "Components/General/Divider/Divider";
import RequestDemo from "Components/General/RequestDemo/RequestDemo";
import TwoColumns from "Components/General/ContentBeforeFooter/TwoColumns";
import IllustrationContent from "Components/General/ContentBeforeFooter/IllustrationContent";
import JobsWrapper from "../JobsWrapper/JobsWrapper";
import FlyOutFilter from "../FlyOutFilter/FlyOutFilter";

function OpenRoleHome(props) {
  let {
    brandBlockSection,
    promoBlockSection,
    getADemoSection,
  } = props.pageData.pageDefaultData;
  const { header, footer } = (props.pageData &&
    props.pageData.pageData &&
    props.pageData.pageData.hPageLayouts) || { header: null, footer: null };

  const sections =
    (props.pageData &&
      props.pageData.pageData &&
      props.pageData.pageData.hOpenRolesFields &&
      props.pageData.pageData.hOpenRolesFields.buildingArea) ||
    (props.pageData &&
      props.pageData.pageData &&
      props.pageData.pageData.hOpenRolesFieldsUk &&
      props.pageData.pageData.hOpenRolesFieldsUk.ukBuildingArea) ||
    [];

  let dividers = [],
    intro;

  sections.forEach(section => {
    const typeName = section.__typename;

    switch (typeName) {
      case "WordPress_HPage_Hopenrolesfields_BuildingArea_Header":
      case "WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_Header":
        intro = section;
        break;
      case "WordPress_HPage_Hopenrolesfields_BuildingArea_BrandBlock":
      case "WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_BrandBlock":
        brandBlockSection = section;
        break;
      case "WordPress_HPage_Hopenrolesfields_BuildingArea_PromoBlock":
      case "WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_PromoBlock":
        promoBlockSection = section;
        break;
      case "WordPress_HPage_Hopenrolesfields_BuildingArea_RequestADemo":
      case "WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_RequestADemo":
        getADemoSection = section;
        break;
      case "WordPress_HPage_Hopenrolesfields_BuildingArea_Divider":
      case "WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_Divider":
        dividers.push(section);
        break;
      default:
        break;
    }
  });

  // Below code is used for filtering jobs
  const { jobs, meta } = props.allJobs;
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [totalJobs, setTotalJobs] = useState(meta.total);
  const [filters, setFilters] = useState(getInititalFilterData());
  const [displayFilter, setDisplayFilter] = useState(false);
  const [sorting, setSorting] = useState("alphabetize");
  const [clearFilter, setClearFilter] = useState(false);
  const [openedFilters, setOpenedFilters] = useState({
    teams: false,
    locations: false,
  });
  const [activeFilters, setActiveFilters] = useState({
    teams: false,
    locations: false,
  });

  // Filter jobs
  function processJobs() {
    const teamsFilter = filters.teams;
    const locationsFilter = filters.locations;
    const isTeamActive =
      typeof teamsFilter.find(e => e.isChecked === true) !== "undefined";
    const isLocationActive =
      typeof locationsFilter.find(e => e.isChecked === true) !== "undefined";

    const processedJobs = jobs.filter(job => {
      let inTeam = !isTeamActive;
      let inLocation = !isLocationActive;

      // None of the filters is active.. Display all jobs
      if (!isTeamActive && !isLocationActive) {
        return true;
      }

      if (isTeamActive) {
        teamsFilter.map(team => {
          inTeam = inTeam
            ? inTeam
            : job.metadata[0].value === team.name && team.isChecked;
          return inTeam;
        });
      }

      if (isLocationActive) {
        locationsFilter.map(location => {
          inLocation = inLocation
            ? inLocation
            : typeof job.metadata[1].value.find(e => e === location.name) ===
              "undefined"
            ? false
            : location.isChecked;
          return inLocation;
        });
      }

      return inTeam && inLocation;
    });

    // Sort
    let sorted = [];
    switch (sorting) {
      case "newest":
        sorted = processedJobs.sort(
          (a, b) =>
            new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
        );
        break;
      case "oldest":
        sorted = processedJobs.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        break;
      default:
        sorted = [...processedJobs];
        break;
    }
    setTotalJobs(sorted.length);
    setFilteredJobs(sorted);
    setActiveFilters({
      teams: isTeamActive,
      locations: isLocationActive,
    });
    setDisplayFilter(false);
  }

  // When a checkbox is clicked adjust the correct filter state items
  function changeCheckbox(event) {
    const newFilters = filters;
    const currentFilterData = newFilters[event.target.name].map(filter => {
      return filter.name === event.target.value
        ? { ...filter, isChecked: event.target.checked }
        : filter;
    });
    newFilters[event.target.name] = currentFilterData;
    setFilters({
      teams: newFilters["teams"],
      locations: newFilters["locations"],
    });
  }

  // Remove all filters and show all jobs when clear all is clicked
  function removeAllFilters(e) {
    e.preventDefault();
    const teams = filters["teams"].map(filter => {
      filter = { ...filter, isChecked: false };
      return filter;
    });

    const locations = filters["locations"].map(filter => {
      filter = { ...filter, isChecked: false };
      return filter;
    });

    setFilters({
      teams: teams,
      locations: locations,
    });

    setSorting("alphabetize");

    setClearFilter(true);
  }

  function getInititalFilterData() {
    const initialFilters = {
      teams: [],
      locations: [],
    };
    jobs.map(job => {
      const currentTeam = job.metadata[0].value;
      initialFilters["teams"] =
        typeof initialFilters["teams"].find(e => e.name === currentTeam) ===
          "undefined" && currentTeam
          ? [
              ...initialFilters["teams"],
              { name: currentTeam, isChecked: false },
            ]
          : initialFilters["teams"];
      job.metadata[1] &&
        job.metadata[1].value &&
        job.metadata[1].value.map(location => {
          initialFilters["locations"] =
            typeof initialFilters["locations"].find(
              e => e.name === location
            ) === "undefined" && location
              ? [
                  ...initialFilters["locations"],
                  { name: location, isChecked: false },
                ]
              : initialFilters["locations"];
          return true;
        });
      return true;
    });

    return initialFilters;
  }

  function toggleFilterDisplay(filterKey) {
    setDisplayFilter(prevState => !prevState);
    const updateOpenedFilters = {
      teams: false,
      locations: false,
    };
    updateOpenedFilters[filterKey] = true;
    setOpenedFilters(updateOpenedFilters);
  }

  function changeSorting(sortingOption) {
    setSorting(sortingOption);
  }

  function toggleOpenedFilterDisplay(filterKey) {
    let updateOpenedFilters = { ...openedFilters };
    updateOpenedFilters[filterKey] = !updateOpenedFilters[filterKey];
    setOpenedFilters(updateOpenedFilters);
  }

  useEffect(() => {
    processJobs();
    setClearFilter(false);
  }, [clearFilter, sorting]);

  let divider1 = {
    additionalClass: (dividers[0] && dividers[0].additionalClass) || "cover-up",
    bgColor: (dividers[0] && dividers[0].bgColor) || "#F5EBE1",
    maskColor: (dividers[0] && dividers[0].maskColor) || "#191919",
    direction:
      (dividers[0] && dividers[0].orientation && dividers[0].position
        ? dividers[0].position + "-" + dividers[0].orientation
        : false) || "top-right",
  };

  let divider2 = {
    additionalClass:
      (dividers[1] && dividers[1].additionalClass) || "cream-divider",
    bgColor: (dividers[1] && dividers[1].bgColor) || "#25B89D",
    maskColor: (dividers[1] && dividers[1].maskColor) || "#F5EBE1",
    direction:
      (dividers[1] && dividers[1].orientation && dividers[1].position
        ? dividers[1].position + "-" + dividers[1].orientation
        : false) || "top-right",
  };

  return (
    <MainLayout
    headerPattern="/images/patterns/pattern-14.svg"
    footerPattern="/images/patterns/pattern-19.svg"
    >
      <Intro
        content={{
          sideHeading: intro && intro.sectionTitle,
          title: intro && intro.largeTitle,
          subtitle: intro && intro.bodyCopy,
          button: {
            label: intro && intro.ctaGroup.text,
            link: intro && intro.ctaGroup.url,
          },
        }}
        lang={props.lang}
      ></Intro>

      <Divider
        additionalClass="cover-up"
        bgColor="#F5EBE1"
        maskColor="#191919"
      />

      <Divider additionalClass="cover-up" {...divider1} />

      <JobsWrapper
        filteredJobs={filteredJobs}
        totalJobs={totalJobs}
        handleFilterDisplay={toggleFilterDisplay}
        handleRemoveFilters={removeAllFilters}
        handleSortingChange={changeSorting}
        sortingSelected={sorting}
        activeFilters={activeFilters}
        lang={props.lang}
      />

      <RequestDemo
        content={{
          title: getADemoSection.title,
          subtitle: getADemoSection.subTitle,
          button: {
            label: getADemoSection.ctaGroup && getADemoSection.ctaGroup.text,
            link: getADemoSection.ctaGroup && getADemoSection.ctaGroup.url,
          },
          image: getADemoSection.image && getADemoSection.image.sourceUrl,
        }}
        maskColor={getADemoSection.maskColor}
        bgColor={getADemoSection.bgColor}
        dark={false}
        lang={props.lang}
      />

      <TwoColumns {...promoBlockSection} lang={props.lang} />

      <Divider {...divider2} />

      <IllustrationContent
        className="about-illu"
        {...brandBlockSection}
        lang={props.lang}
      />

      <FlyOutFilter
        filters={filters}
        handleFilterChange={processJobs}
        handleRemoveFilters={removeAllFilters}
        handleCheckboxChange={changeCheckbox}
        handleFilterDisplay={toggleFilterDisplay}
        displayFilter={displayFilter}
        openedFilters={openedFilters}
        handleOpenedFilterDisplay={toggleOpenedFilterDisplay}
      />
    </MainLayout>
  );
}

export default OpenRoleHome;
