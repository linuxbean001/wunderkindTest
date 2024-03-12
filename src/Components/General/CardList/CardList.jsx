import React from "react";
import Card from "Components/General/Card/Card";
import "./_CardList.scss";
import { getResourceUrlPath } from "../../../utils/common";

const cardTypes = [
  {
    type: "case-study",
    color: "#FF4133",
    dark: false,
  },
  {
    type: "research-study",
    color: "#CC9966",
    dark: true,
  },
  {
    type: "webinar",
    color: "#3D55CC",
    dark: false,
  },
  {
    type: "podcast",
    color: "#25B89D",
    dark: false,
  },
  {
    type: "c-suite-series",
    color: "#FF9999",
    dark: false,
  },
  {
    type: "guide",
    color: "#FFBB00",
    dark: true,
  },
  {
    type: "high-impact",
    color: "#FF9999",
    dark: false,
  },
  {
    type: "outstream-video",
    color: "#FF9999",
    dark: false,
  },
  {
    type: "standard-iab",
    color: "#FF9999",
    dark: false,
  },
  {
    type: "podcast",
    color: "#25B89D",
    dark: true,
  },
];

function CardList(props) {
  const { isThereMore, list, loadMore, lang } = props;
  const listRender = list.map(e => (
    <Card lang={lang} {...sanitize(e, lang)} key={e.id} />
  ));

  function sanitize(data, lang) {
    const { hResourceTypes, hResourceCategory, slug, hResourcePostURL } = data;
    let { logo, cardBackground, cardTitle } = {};
    if (lang === "uk") {
      const resourceData = data.hResourcesDataUK;
      logo = resourceData.logoUk;
      cardBackground = resourceData.cardBackgroundUk;
      cardTitle = resourceData.cardTitleUk;
    } else {
      const resourceData = data.hResourcesData;
      logo = resourceData.logo;
      cardBackground = resourceData.cardBackground;
      cardTitle = resourceData.cardTitle;
    }
    const type =
      hResourceTypes && hResourceTypes.nodes && hResourceTypes.nodes[0];
    const cate =
      hResourceCategory &&
      hResourceCategory.resourceCategory &&
      hResourceCategory.resourceCategory[0];
    const href = getResourceUrlPath(slug, type?.slug);
    const cURL =
      hResourcePostURL && hResourcePostURL?.customUrl
        ? hResourcePostURL?.customUrl
        : null;
    return {
      cardTitle,
      href,
      cardBackground,
      typeName: type?.name,
      cate,
      logo,
      ...cardTypes.find(e => e.type === type?.slug),
      cURL,
    };
  }

  return (
    <div className="card-list">
      <div className="card-list-wrapper">{listRender}</div>
      {isThereMore && (
        <div className="load-more">
          <button className="btn btn-dark" onClick={() => loadMore()}>
            <span className="in">Load More</span>
            <span className="out">Load More</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default CardList;
