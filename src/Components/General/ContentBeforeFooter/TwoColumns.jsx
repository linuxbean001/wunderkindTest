import React from "react";

import "./_ContentBeforeFooter.scss";

import Image from "Components/Image/Image";
import Button from "Components/Button/Button";
import Divider from "Components/General/Divider/Divider";
import Plx from "react-plx";
import useDimensions from "react-use-dimensions";

function TwoColumns(props) {
  const bgColor = props.bgColor || "#ffbb00";
  const bgPattern = props.bgPattern || "/images/patterns/pattern-01.svg";
  const pattern =
    (props.backgroundImage && props.backgroundImage.sourceUrl) || bgPattern;
  const sectionClass = "general-two-columns " + (props.sectionClass || "");
  const [containerRef] = useDimensions();

  const isEmptySection = section => {
    return (
      !section || !(!!section.content || !!section.title || !!section.image)
    );
  };

  const moveBG = [
    {
      start: ".tc-bg-ptrn",
      duration: "350vh",
      startOffset: "-100vh",
      properties: [
        {
          startValue: -100,
          endValue: 50,
          unit: "%",
          property: "translateY",
        },
      ],
    },
  ];

  let { firstColumn, secondColumn } = props;

  // Don't render the section if no content in it!
  if (isEmptySection(firstColumn) || isEmptySection(secondColumn)) {
    return <></>;
  }

  return (
    <section
      ref={containerRef}
      className={sectionClass}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="bg-pattern tc-bg-ptrn">
        <div className="tc-bg-ptrn-wrap">
          <Plx
            className="bg-pattern-image"
            animateWhenNotInViewport={true}
            parallaxData={moveBG}
            style={{
              backgroundImage: "url(" + pattern + ")",
            }}
          ></Plx>
        </div>
        <Divider
          additionalClass="yellow-divider"
          direction="top-left"
          bgColor={false}
          maskColor={bgColor}
        />
      </div>
      <div className="full-color-wrapper">
        <div className="content-container container">
          <div className="row">
            {firstColumn && (
              <div className="col-md-6">
                {firstColumn.image && (
                  <div className="img-wrap">
                    <Image src={firstColumn.image.sourceUrl}></Image>
                  </div>
                )}
                <div className="title">{firstColumn.title}</div>
                <div
                  className={`subtitle ${
                    !(firstColumn.ctaGroup && firstColumn.ctaGroup.url)
                      ? "no-button"
                      : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: firstColumn.content }}
                ></div>
                {/* {firstColumn.ctaGroup && firstColumn.ctaGroup.url && (
                  <div className="btn-wrap">
                    <Button
                      href={firstColumn.ctaGroup.url}
                      className="btn-dark"
                      lang={props.lang}
                    >
                      {firstColumn.ctaGroup.text}
                    </Button>
                  </div>
                )} */}
                  <a
                    href="https://www.wunderkind.co/culture/"
                    target="_blank"
                    rel="nofollow noopener"
                    ><Button className="btn-dark">Our Culture</Button>
                  </a>
              </div>
            )}
            {secondColumn && (
              <div className="col-md-6">
                <div className="sec-col">
                  {secondColumn.image && (
                    <div className="img-wrap">
                      <Image src={secondColumn.image.sourceUrl}></Image>
                    </div>
                  )}
                  <div className="title">{secondColumn.title}</div>
                  <div
                    className="subtitle"
                    dangerouslySetInnerHTML={{ __html: secondColumn.content }}
                  ></div>
                  {secondColumn.ctaGroup && secondColumn.ctaGroup.url && (
                    <div className="btn-wrap">
                      <Button
                        href={secondColumn.ctaGroup.url}
                        className="btn-dark"
                        lang={props.lang}
                      >
                        {secondColumn.ctaGroup.text}
                      </Button>
                    </div>
                  )}
                  {/* <a
                    href="https://www.wunderkind.co/open-roles/"
                    target="_blank"
                    rel="nofollow noopener"
                    ><Button className="btn-dark">Open Roles</Button>
                  </a> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoColumns;
