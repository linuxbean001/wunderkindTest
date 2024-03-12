import React, { useState } from "react";
import PlayButton from "../../../UI/SVGComponents/PlayButton";
import Arrow from "../../Arrow/Arrow";
import "./_ResourceCard.scss";

const ResourceCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const category = {
    podcast: {
      slug: "podcast",
      text: "podcast",
    },
    caseStudy: {
      slug: "case-study",
      text: "success story",
    },
    webinar: {
      slug: "webinar",
      text: "webinar",
    },
    guide: {
      slug: "guide",
      text: "guide",
    },
    report: {
      slug: "report",
      text: "report",
    },
  };

  const {
    isFeatured,
    backgroundImageSrc,
    backgroundImageAlt,
    backgroundImageHoveredSrc,
    backgroundImageAltHovered,
    title,
    titleImage,
    altTitleImage,
    link,
    isVideo,
    fullTitle,
  } = item;
  const { slug = "podcast", text = "podcast" } = category[item.category] ?? {};

  return (
    <div
      className={`carousel-card ${slug} ${isFeatured ? "featured" : ""}`}
      onMouseEnter={() => setIsHovered(prevState => !prevState)}
      onMouseLeave={() => setIsHovered(prevState => !prevState)}
    >
      <img
        src={backgroundImageSrc}
        alt={backgroundImageAlt}
        className="carousel-card-bg"
      />
      <img
        src={backgroundImageHoveredSrc}
        alt={backgroundImageAltHovered}
        className="carousel-card-bg-hovered"
      />
      <div className="carousel-card-container">
        <p className="carousel-card-category-text">
          {isFeatured ? `Featured ${text}` : text}
        </p>
        <div className="carousel-card-content">
          {title && <h2 className="carousel-card-content-title">{title}</h2>}
          {titleImage && (
            <img
              src={titleImage}
              alt={altTitleImage}
              className="carousel-card-content-image"
            />
          )}
          <h2 className="carousel-card-content-full-title">{fullTitle}</h2>
          <a href={link}>
            {isVideo ? (
              <PlayButton className="carousel-card-content-button" />
            ) : isHovered ? (
              <Arrow dark={true} left={false} />
            ) : (
              <Arrow dark={false} left={false} />
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
