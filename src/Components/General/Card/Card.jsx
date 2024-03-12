import React, { useRef } from "react";
import Arrow from "../../Arrow/Arrow";
import "./_Card.scss";
import { AddLang } from "../../../utils/addLang";

function Card(props) {
  function CardHeaderForesterStudy(cardImage) {
    const { sourceUrl, altText } = cardImage;
    return (
      <div className="card-header">
        {sourceUrl && (
          <img
            className="card-header-img"
            alt={altText || "Branded Card Header"}
            src={sourceUrl}
          />
        )}
        {/* Display mask */}
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 369 480">
          <path
            fill="#3D55CC"
            d="M369,156.3l-18.3,7.2L309,180l-13.1,5.2l-12.6,5l-14.4,5.7l-16.1,6.3l-8.4,3.3l-2.7-0.9l-31.9-10.9l-14.4-4.9
            l-17.9-6.1l-15.4-5.3l-24.3-8.3l-13.8-4.7l-35.8-12.3l-12.4-4.2l-31.3-10.7l-3.3-1.1L4.9,123.6L0,121.9V475c0,2.8,2.2,5,5,5h359
            c2.8,0,5-2.2,5-5V156.3z"
          />
        </svg>
      </div>
    );
  }

  function CardHeaderCaseStudy(logo) {
    const { sourceUrl, altText } = logo;
    return (
      <div className="card-header">
        <div className="card-header-logo">
          {sourceUrl && (
            <img
              className="card-header-brand"
              alt={altText || "Branded Card Logo"}
              src={sourceUrl}
            />
          )}
        </div>
      </div>
    );
  }

  function CardHeaderLookbook(logo) {
    const { sourceUrl, altText } = logo;
    return (
      <div className="card-header">
        <div className="">
          {sourceUrl && (
            <img
              className="card-header-img"
              alt={altText || "Branded Card Logo"}
              src={sourceUrl}
            />
          )}
        </div>
      </div>
    );
  }

  function CardHeaderCSuiteSeries(cardImage) {
    const { sourceUrl, altText } = cardImage;
    return (
      <div className="card-header">
        {sourceUrl && (
          <img
            className="card-header-img"
            alt={altText || "Branded Card Logo"}
            src={sourceUrl}
          />
        )}
        {/* Display mask */}
        <svg x="0px" y="0px" viewBox="0 0 369 480">
          <path
            fill="none"
            d="M5,0h359c2.8,0,5,2.2,5,5v470c0,2.8-2.2,5-5,5H5c-2.8,0-5-2.2-5-5V5C0,2.2,2.2,0,5,0z"
          />
          <path
            fill="#FFBB00"
            className="st1"
            d="M325.8,199.4c-11.2-2.4-22.1-5-32.9-7.7c-13.6-3.4-27-7.1-40-10.9c-5.2-1.5-10.4-3.1-15.5-4.7
            c-12-3.8-23.7-7.8-35.2-12c-11.1-4.1-21.9-8.3-32.5-12.7c-13.7-5.7-27-11.7-39.9-18.1c-3.4-1.7-6.7-3.3-10.1-5.1
            c-1.5-0.8-3-1.5-4.5-2.3c-5.3-2.8-10.5-5.6-15.7-8.4c-11.8-6.6-23.3-13.4-34.5-20.6c-2.4-1.6-4.8-3.1-7.2-4.7
            c-2.8-1.9-5.7-3.8-8.5-5.7c-4.1-2.9-8.2-5.7-12.3-8.7c-6.4-4.7-12.7-9.5-18.9-14.3c-2.4-1.9-4.8-3.8-7.2-5.8c-2.8-2.3-5.6-4.6-8.3-7
            c-0.1-0.1-0.1-0.1-0.2-0.2C1.7,49.7,0.8,49,0,48.2V208v267c0,2.8,2.2,5,5,5h359c2.8,0,5-2.2,5-5V208v-0.1
            C354.3,205.3,339.9,202.5,325.8,199.4z"
          />
        </svg>
      </div>
    );
  }

  function CardHeaderWebinar(cardImage) {
    const { sourceUrl, altText } = cardImage;
    return (
      <div className="card-header">
        {sourceUrl && (
          <img
            className="card-header-img2"
            alt={altText || "Branded Card Logo"}
            src={sourceUrl}
          />
        )}
      </div>
    );
  }

  function CardHeaderGuide(cardImage) {
    const { sourceUrl, altText } = cardImage;
    return (
      <div className="card-header">
        {sourceUrl && (
          <img
            className="card-header-img"
            alt={altText || "Branded Card Logo"}
            src={sourceUrl}
          />
        )}
        {/* Display mask */}
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 369 480">
          <path
            fill="#303D78"
            d="M342.7,48.7c-0.2,0.2-0.4,0.5-0.7,0.7c-15.1,16-30,30.9-44.8,44.8c-0.8,0.8-1.6,1.5-2.5,2.3
            c-2.2,2.1-4.5,4.1-6.7,6.2c-1.5,1.4-3,2.7-4.5,4c-1.6,1.4-3.2,2.9-4.8,4.3c-1.3,1.2-2.6,2.3-3.9,3.5c-1.6,1.4-3.2,2.8-4.8,4.2
            c-7.4,6.3-14.7,12.4-22,18.1c-1.1,0.9-2.2,1.8-3.3,2.6c-10,7.8-19.8,14.9-29.3,21.4c-1.2,0.8-2.5,1.7-3.7,2.5
            c-9.6,6.3-19,12-28.1,16.9c-3.7,2-7.4,3.9-11.1,5.7c-1.2,0.6-2.4,1.1-3.5,1.7c-1,0.5-1.9,0.9-2.9,1.4c-3.6,1.6-7.2,3.2-10.7,4.6
            c-1.2,0.5-2.4,1-3.6,1.4c-14.6,5.6-28.6,9.2-42,10.9c-0.5,0.1-1,0.1-1.5,0.2c-3,0.3-6,0.6-9,0.7c-0.7,0-1.5,0.1-2.2,0.1
            c-1.1,0-2.3,0.1-3.4,0.1h-1c-1.7,0-3.5,0-5.2-0.1c-2.3-0.1-4.5-0.3-6.8-0.5c-10.4-1-20.5-3.4-30.1-7.2c-0.2-0.1-0.5-0.2-0.7-0.3
            c-2.8-1.1-5.6-2.4-8.4-3.7c-3.7-1.9-7.4-3.9-11-6.2c-0.9-0.6-1.7-1.1-2.6-1.7c-5.3-3.5-10.3-7.4-15.1-11.5c-4.5-3.9-8.7-8-12.7-12.4
            V207v0.1V475c0,2.8,2.2,5,5,5h359c2.8,0,5-2.2,5-5V207V19.9C360.2,29.9,351.4,39.5,342.7,48.7z"
          />
        </svg>
      </div>
    );
  }

  function CardHeaderPodcast(cardImage) {
    const { sourceUrl, altText } = cardImage;
    return (
      <div className="card-header">
        {sourceUrl && (
          <img
            className="card-header-img header-top"
            alt={altText || "Branded Card Logo"}
            src={sourceUrl}
          />
        )}
        {/* Display mask */}
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 369 480">
          <path
            fill="#303D78"
            d="M342.7,48.7c-0.2,0.2-0.4,0.5-0.7,0.7c-15.1,16-30,30.9-44.8,44.8c-0.8,0.8-1.6,1.5-2.5,2.3
            c-2.2,2.1-4.5,4.1-6.7,6.2c-1.5,1.4-3,2.7-4.5,4c-1.6,1.4-3.2,2.9-4.8,4.3c-1.3,1.2-2.6,2.3-3.9,3.5c-1.6,1.4-3.2,2.8-4.8,4.2
            c-7.4,6.3-14.7,12.4-22,18.1c-1.1,0.9-2.2,1.8-3.3,2.6c-10,7.8-19.8,14.9-29.3,21.4c-1.2,0.8-2.5,1.7-3.7,2.5
            c-9.6,6.3-19,12-28.1,16.9c-3.7,2-7.4,3.9-11.1,5.7c-1.2,0.6-2.4,1.1-3.5,1.7c-1,0.5-1.9,0.9-2.9,1.4c-3.6,1.6-7.2,3.2-10.7,4.6
            c-1.2,0.5-2.4,1-3.6,1.4c-14.6,5.6-28.6,9.2-42,10.9c-0.5,0.1-1,0.1-1.5,0.2c-3,0.3-6,0.6-9,0.7c-0.7,0-1.5,0.1-2.2,0.1
            c-1.1,0-2.3,0.1-3.4,0.1h-1c-1.7,0-3.5,0-5.2-0.1c-2.3-0.1-4.5-0.3-6.8-0.5c-10.4-1-20.5-3.4-30.1-7.2c-0.2-0.1-0.5-0.2-0.7-0.3
            c-2.8-1.1-5.6-2.4-8.4-3.7c-3.7-1.9-7.4-3.9-11-6.2c-0.9-0.6-1.7-1.1-2.6-1.7c-5.3-3.5-10.3-7.4-15.1-11.5c-4.5-3.9-8.7-8-12.7-12.4
            V207v0.1V475c0,2.8,2.2,5,5,5h359c2.8,0,5-2.2,5-5V207V19.9C360.2,29.9,351.4,39.5,342.7,48.7z"
          />
        </svg>
      </div>
    );
  }

  const {
    cardTitle,
    href,
    cardBackground,
    typeName,
    logo,
    type,
    color,
    dark,
    cURL,
  } = props;

  // console.log("props", props);

  let header = null;
  switch (type) {
    case "case-study":
      header = CardHeaderCaseStudy(logo || "");
      break;
    case "high-impact":
      header = CardHeaderLookbook(logo || "");
      break;
    case "research-study":
      header = CardHeaderForesterStudy(cardBackground || "");
      break;
    case "webinar":
      header = CardHeaderWebinar(cardBackground || "");
      break;
    case "podcast":
      header = CardHeaderWebinar(cardBackground || "");
      break;
    case "c-suite-series":
      header = CardHeaderCSuiteSeries(cardBackground || "");
      break;
    case "guide":
      header = CardHeaderGuide(cardBackground || "");
      break;
    case "podcast":
      header = CardHeaderPodcast(cardBackground || "");
      break;
    default:
      break;
  }

  const backgroundImageUrl = cardBackground && cardBackground.sourceUrl;
  const backgroundLogoUrl = logo && logo.sourceUrl;

  return (
    <div
      className={`card ${dark ? "dark" : ""}`}
      style={{
        // backgroundColor: color,
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : `url(${backgroundLogoUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <a
        href={cURL ? cURL : AddLang(href, props.lang)}
        className="card-link-inherit"
        target="_blank"
      >
        {/* {header} */}
        <div className="card-body">
          <div
            type={type}
            className="card-title"
            style={{
              backgroundColor: color,
              color: "#fff",
            }}
          >
            {typeName}
          </div>
          <div className="card-text">{cardTitle}</div>
        </div>
        <div className="card-footer">
          <Arrow dark={dark} lang={props.lang} noLink={true} />
          {type === "webinar" && logo && (
            <img
              className="card-footer-img"
              src={logo.sourceUrl}
              alt={logo.altText}
            />
          )}
        </div>
      </a>
    </div>
  );
}

export default Card;
