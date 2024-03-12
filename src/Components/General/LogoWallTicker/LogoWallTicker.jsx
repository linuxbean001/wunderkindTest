import React from "react";

import "./_LogoWallTicker.scss";
import CenteredTitle from "Components/General/CenteredTitle/CenteredTitle";
import Image from "Components/Image/Image";
import { AddLang } from "../../../utils/addLang";
import { getVideoData } from "../../../utils/getVideoData";

const LogoWallTicker = props => {
  const content = props.content;
  const logos = props.logos || [];
  const brandLogos = logos.map(wpLogo => {
    return {
      url: wpLogo.destinationUrl,
      logoSrc: wpLogo.logo && wpLogo.logo.sourceUrl,
      logoAlt: wpLogo.logo && wpLogo.logo.altText,
    };
  });

  return (
    <section
      className={
        "brands-slider" +
        (props.className !== undefined ? " " + props.className : "")
      }
    >
      {content && <CenteredTitle>{content}</CenteredTitle>}

      <div className="ticker">
        <div className="ticker-wrap">
          {brandLogos.map((value, index) => {
            return (
              <div className="ticker-item" key={"logo-" + index}>
                <a
                  className="brands-logo"
                  href={AddLang(value.url, props.lang)}
                  {...getVideoData(value.url)}
                >
                  <Image src={value.logoSrc} alt={value.logoAlt}></Image>
                </a>
              </div>
            );
          })}
        </div>
        <div className="ticker-wrap">
          {brandLogos.map((value, index) => {
            return (
              <div className="ticker-item" key={"logo-" + index}>
                <a
                  className="brands-logo"
                  href={AddLang(value.url, props.lang)}
                  {...getVideoData(value.url)}
                >
                  <Image src={value.logoSrc} alt={value.logoAlt}></Image>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="slider-wrap"></div>
    </section>
  );
};

export default LogoWallTicker;
