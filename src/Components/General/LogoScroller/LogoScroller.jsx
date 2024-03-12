import React from "react";
import Plx from "react-plx";

import "./_LogoScroller.scss";
import Image from "Components/Image/Image";

const LogoScroller = props => {
  const scrollLogo = [
    {
      start: props.parallaxData.start_container,
      duration: "50vh",
      startOffset: props.parallaxData.start_offset,
      properties: [
        {
          startValue: 200,
          endValue: 0,
          unit: "%",
          property: "translateX",
        },
      ],
    },
  ];

  const brandLogos = props.logos
    ? props.logos
        .map(item => {
          return item.logo ? { logo: item.logo.sourceUrl } : false;
        })
        .filter(Boolean)
    : [];
  return (
    <Plx
      animateWhenNotInViewport={true}
      parallaxData={scrollLogo}
      className="logo-scroller"
    >
      {brandLogos.map((value, index) => {
        return (
          <div className="brands-logo" key={index}> 
            <Image src={value.logo}></Image>
          </div>
        );
      })}
    </Plx>
  );
};

export default LogoScroller;
