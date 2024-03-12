import React from "react";

import "./_LogoWallStatic.scss";
import Image from "Components/Image/Image";
import CenteredTitle from "Components/General/CenteredTitle/CenteredTitle";
import { AddLang } from "../../../utils/addLang";
import { getVideoData } from "../../../utils/getVideoData";

const LogoWallStatic = props => {
  const logos = props.logos || [];
  const content = props.title || props.content;

  const brandLogos = logos.map(logo => {
    return {
      url: logo.destinationUrl,
      logo: logo.logo,
    };
  });

  return (
    <section
      className={
        "logos-wall-static" + (props.dark !== undefined ? " dark" : "")
      }
    >
      {content && <CenteredTitle>{content}</CenteredTitle>}
      <div className="logo-wrapper">
        {brandLogos.map((value, index) => {
          return (
            <div key={index}>
              <a
                className="brands-logo"
                href={AddLang(value.url, props.lang)}
                {...getVideoData(value.url)}
              >
                {value.logo && (
                  <Image
                    src={value.logo.sourceUrl}
                    alt={value.logo.altText}
                  ></Image>
                )}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LogoWallStatic;
