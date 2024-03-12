import React, { useState, useEffect } from "react";

import Plx from "react-plx";
import Swiper from "react-id-swiper";

import Button from "Components/Button/Button";
import Image from "Components/Image/Image";
import { graphql } from "gatsby";
import useWindowEventListener from "utils/useWindowEventListener";

const CaseStudySlider = props => {
  const { list } = props;
  const [swiper, updateSwiper] = useState(null);
  const [slides, setSlides] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(null);

  const goNext = e => {
    e.preventDefault();
    e.stopPropagation();
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = e => {
    e.preventDefault();
    e.stopPropagation();
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const moveBG = [
    {
      start: ".hero-brands-image",
      duration: "700vh",
      startOffset: "-20vh",
      properties: [
        {
          startValue: -20,
          endValue: 50,
          unit: "%",
          property: "translateY",
        },
      ],
    },
  ];

  useEffect(() => {
    if (swiper !== null) {
      setSlides(list?.length);
      setCurrentSlide(1);
      adjustBgImage(swiper?.slides[swiper?.activeIndex]?.dataset?.bgImg);

      swiper.on("slideChange", function() {
        setCurrentSlide(swiper.realIndex + 1);
        adjustBgImage(swiper.slides[swiper?.activeIndex]?.dataset?.bgImg);
      });
    }
  }, [swiper]);

  function adjustBgImage(img) {
    const caseStudySlider = document.getElementById("case-studies-slider-bg");
    if (!caseStudySlider) {
      return;
    }

    caseStudySlider.style.backgroundImage = "url(" + img + ")";
  }

  const params = {
    loop: true,
    speed: 1200,
    parallax: false,
    cssMode: true,
    autoHeight: true,
    watchOverflow: true,
    getSwiper: updateSwiper,
  };
  const slideItems = list
    ? list.map(cs => {
        if (!cs) {
          return false;
        }

        const {
          cardBackground,
          avatar,
          logo,
          sliderText,
          stats,
          jobTitle,
          name,
          ctaGroup,
        } = cs.hResourcesData;
        const type =
          cs.hResourceTypes &&
          cs.hResourceTypes.nodes &&
          cs.hResourceTypes.nodes[0];

        return {
          bgImage: cardBackground,
          logo: logo,
          sideHeading: type.name,
          title: sliderText,
          user: {
            image: avatar,
            name: name,
            position: jobTitle,
          },
          button: {
            label: ctaGroup.text,
            link: ctaGroup.url,
          },
          stats:
            (stats &&
              stats.map(stat => {
                return {
                  value: stat.stat,
                  label: stat.text,
                };
              })) ||
            [],
        };
      })
    : [];

  const renderSwiper = sliderParams => {
    return (
      <Swiper {...sliderParams}>
        {slideItems.map((content, index) => {
          if (!content) {
            return false;
          }

          return (
            <div
              key={"cstudy-slide-" + index}
              data-bg-img={content.bgImage && content.bgImage.sourceUrl}
              className="swiper-slide"
            >
              <div className="case-studies-content">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      {content.logo && (
                        <Image src={content.logo.sourceUrl}></Image>
                      )}
                    </div>
                  </div>
                  <div className="row justify-content-between">
                    <div data-swiper-parallax="-300" className="col-md-6">
                      <div className="title-wrap">
                        <div className="side-heading">
                          {content.sideHeading}
                        </div>
                        {content.title && (
                          <h3
                            className="title"
                            dangerouslySetInnerHTML={{ __html: content.title }}
                          ></h3>
                        )}
                      </div>
                      <div className="user-box">
                        {content.user.image && (
                          <div className="img">
                            {content.user.image && (
                              <Image src={content.user.image.sourceUrl}></Image>
                            )}
                          </div>
                        )}
                        <div className="user-info">
                          <div className="name">{content.user.name}</div>
                          <div className="position">
                            {content.user.position}
                          </div>
                        </div>
                      </div>
                      {content.stats && (
                        <div className="stats mob-only">
                          {content.stats.map((value, index) => {
                            return (
                              <div key={"stat-" + index} className="stat-box">
                                <div className="value">{value.value}</div>
                                <div className="label">{value.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {content.button.link && (
                        <div className="btn-wrap">
                          <Button
                            className="btn-dark"
                            href={content.button.link}
                            lang={props.lang}
                          >
                            {content.button.label}
                          </Button>
                        </div>
                      )}
                    </div>
                    <div
                      data-swiper-parallax="100"
                      className="mob-hide col-md-6 col-lg-4"
                    >
                      {content.stats && (
                        <div className="stats">
                          {content.stats.map((value, index) => {
                            return (
                              <div key={"stat-" + index} className="stat-box">
                                <div className="value">{value.value}</div>
                                <div className="label">{value.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Swiper>
    );
  };

  const { windowWidth } = useWindowEventListener();
  return (
    <>
      <div className="hero-brands-image">
        <Plx
          animateWhenNotInViewport={true}
          parallaxData={moveBG}
          style={{
            backgroundImage: "url(/images/patterns/pattern-01.svg)",
          }}
          id="case-studies-slider-bg"
        ></Plx>
      </div>

      <div className="full-color-wrapper ">
        <svg
          role="presentation"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 361.3"
        >
          <path
            fill="#fbfcfd"
            d="M1920,260.2L940.5,47.8C572.8-32,259.2-11.9,0,108.1v253.2h1920V260.2z"
          />
        </svg>
      </div>
      {slideItems?.length !== 0 && (
        <div className="content-container">
          {windowWidth < 768 && renderSwiper(params)}
          {windowWidth >= 768 &&
            renderSwiper({ ...params, parallax: true, cssMode: false })}

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="slide-nav">
                  <a
                    href="#prev"
                    onClick={goPrev}
                    className="slide-arrow prev swiper-prev"
                  >
                    <Image src="/images/arrow-light.svg"></Image>
                  </a>

                  <div className="slide-nums">
                    <span className="current">{currentSlide}</span>/
                    <span className="max">{slides}</span>
                  </div>

                  <a
                    href="#next"
                    onClick={goNext}
                    className="slide-arrow next swiper-next"
                  >
                    <Image src="/images/arrow-light.svg"></Image>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CaseStudySlider;

export const fragment = graphql`
  fragment CaseStudy on WordPress_HResrource {
    hResourcesData {
      avatar {
        altText
        sourceUrl
      }
      cardBackground {
        altText
        sourceUrl
      }
      logo {
        altText
        sourceUrl
      }
      introText
      stats {
        stat
        text
      }
      jobTitle
      name
      sliderText
      ctaGroup {
        text
        url
      }
    }
    hResourceTypes {
      nodes {
        name
      }
    }
  }
`;
