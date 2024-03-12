import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";

import Image from "Components/Image/Image";
import Button from "Components/Button/Button";
import useWindowEventListener from "utils/useWindowEventListener";

const ComeCheckUsSlider = props => {
  const { list, pattern } = props;

  const [swiper, updateSwiper] = useState(null);
  const [slides, setSlides] = useState(null);
  const [CurrentSlide, setCurrentSlide] = useState(null);
  const [slideMaskColor, setslideMaskColor] = useState(null);

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

  useEffect(() => {
    if (swiper !== null) {
      setSlides(swiper.slides.length - 2);
      setCurrentSlide(1);
      setslideMaskColor(list[0].color);

      swiper.on("slideChange", function() {
        let slide = swiper.realIndex === 0 ? 1 : swiper.realIndex + 1;
        setslideMaskColor(list[swiper.realIndex].color);
        setCurrentSlide(slide);
      });
    }
  }, [swiper, list]);

  const params = {
    loop: true,
    speed: 800,
    parallax: false,
    effect: "fade",
    slidesPerView: 1,
    fadeEffect: {
      crossFade: true,
    },
    breakpoints: {
      769: {
        parallax: true,
      },
    },
    getSwiper: updateSwiper,
  };

  const slideNav = () => {
    return (
      <div className="slide-nav">
        <a
          href="#prev"
          onClick={goPrev.bind(this)}
          className="slide-arrow prev swiper-prev"
        >
          <Image src="/images/arrow.svg"></Image>
        </a>
        <div className="slide-nums">
          <span className="current">{CurrentSlide}</span>/
          <span className="max">{slides}</span>
        </div>
        <a
          href="#next"
          onClick={goNext.bind(this)}
          className="slide-arrow next swiper-next"
        >
          <Image src="/images/arrow.svg"></Image>
        </a>
      </div>
    );
  };

  const renderSlide = (content, index) => {
    return (
      <div key={index} className="swiper-slide">
        <div className="swiper-slide-wrap">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-10">
                <div className="slide">
                  <div data-swiper-parallax="-200">
                    <div className="date">{content.date}</div>
                    <div className="location">{content.location}</div>
                  </div>
                  <div data-swiper-parallax="-300" className="title">
                    {content.title.length > 50
                      ? content.title.substring(0, 47) + "..."
                      : content.title}
                  </div>
                  {content.button && (
                    <div data-swiper-parallax="-400" className="btn-wrap">
                      <Button
                        href={content.button.link}
                        className="btn-fill-dark"
                        lang={props.lang}
                      >
                        {content.button.label}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  let renderedSlides = list.map((entry, index) => {
    return renderSlide(entry, index);
  });

  const renderSwiper = sliderParams => {
    return (
      <Swiper {...sliderParams} lang={props.lang}>
        {renderedSlides}
      </Swiper>
    );
  };

  const { windowWidth } = useWindowEventListener();

  return (
    <div>
      <svg
        version="1.1"
        className="ccu-mask top"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 2000 470"
      >
        <g>
          <path
            fill={slideMaskColor}
            d="M0,128c0,0,264,150,622,150C1274,278,2002,0,2002,0v470H0L0,128z"
          />
        </g>
      </svg>
      <div
        style={{
          backgroundColor: slideMaskColor,
        }}
        className="cc-slider-wrap"
      >
        <div className="cc-slider-container">
          {windowWidth < 769 && renderSwiper(params)}
          {windowWidth >= 769 && renderSwiper({ ...params, parallax: true })}
          {slideNav()}
        </div>
        <Image
          className="ccu-mask-bottom"
          src={
            pattern ? pattern.sourceUrl : "/images/hero-wave-mask-pattern.svg"
          }
        ></Image>
      </div>
    </div>
  );
};

export default ComeCheckUsSlider;
