import React from "react";
import Arrow from "Components/Arrow/Arrow";
import "./_SonosBanner.scss";
import useDimensions from "react-use-dimensions";
import {getResourceUrlPath} from "../../../../utils/common";
import {AddLang} from "../../../../utils/addLang";

function SonosBanner(props) {
  const { slug, lang, hResourceTypes } = props;
  let {cardBackgroundColor, cardBackground, sectionTitle, featuredSentence} = {};
    const type = hResourceTypes && hResourceTypes.nodes && hResourceTypes.nodes[0] && hResourceTypes.nodes[0].slug;
  if(lang === "uk" && props.hResourcesDataUK) {
      const {cardBackgroundColorUk, cardBackgroundUk, sectionTitleUk, featuredSentenceUk} = props.hResourcesDataUK;
      cardBackgroundColor = cardBackgroundColorUk;
      cardBackground = cardBackgroundUk;
      sectionTitle = sectionTitleUk;
      featuredSentence = featuredSentenceUk;
  } else if(lang !== "uk" && props.hResourcesData) {
      cardBackgroundColor = props.hResourcesData.cardBackgroundColor;
      cardBackground = props.hResourcesData.cardBackground;
      sectionTitle = props.hResourcesData.sectionTitle;
      featuredSentence = props.hResourcesData.featuredSentence;
  }
  const [featuredRef, featuredSize] = useDimensions();
  const [containerRef, containerSize] = useDimensions();

  let gap = 0;
  let featuredWidth = 0;
  gap = featuredSize.width > 1440 ? 17 : 20;
  gap = featuredSize.width > 0 && featuredSize.width < 768 ? 24 : gap;
  featuredWidth =
    (containerSize.width || 0) +
    ((featuredSize.width || 0) - (containerSize.width || 0)) / 2 -
    gap;

  return (
    <div className="container">
    <div ref={featuredRef} className="sonos-banner">
      <div
        style={{
          backgroundImage:
          "url(" +
          (cardBackground && cardBackground.sourceUrl) +
          ")",
        }}
        className="ft-hero-banner-image"></div>
      <a
        href={AddLang(getResourceUrlPath(slug, type), props.lang)}
        lang={props.lang}
        className="card-link-inherit"
        >
        </a>
            <div className="sonos-content">
        {/* <div
          className="ft-hero-banner-image"
          style={{
            backgroundColor:
            cardBackgroundColor
            ? cardBackgroundColor
            : "#303D78",
          }}
          >
        </div> */}
        <div className="banner-title">

              {sectionTitle?.split("|")[0].trim()}
        </div>
              {featuredSentence && (
                <h3
                dangerouslySetInnerHTML={{
                  __html: featuredSentence,
                }}
                ></h3>
                )}
              <Arrow
                href={getResourceUrlPath(slug, type)}
                dark
                noborder
                lang={props.lang}
                />
            </div>
    </div>
                </div>
  );
}

export default SonosBanner;
