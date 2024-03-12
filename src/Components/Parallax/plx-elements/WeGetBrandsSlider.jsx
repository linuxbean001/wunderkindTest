import React, { useState, useEffect } from "react";

import Swiper from "react-id-swiper";

import Image from "Components/Image/Image";
import WeGetBrandsSlide from "./WeGetBrandsSlide";
import useWindowEventListener from "utils/useWindowEventListener";

const WeGetBrandsSlider = props => {
  const [swiper, updateSwiper] = useState(null);
  const [slides, setSlides] = useState(null);
  const [CurrentSlide, setCurrentSlide] = useState(null);

  const goNext = e => {
    e.preventDefault();
    e.stopPropagation();
    if (swiper !== null) {
      swiper.slideNext();
      adjustBgImage(swiper.slides[swiper.activeIndex].dataset.bgImg);
    }
  };

  const goPrev = e => {
    e.preventDefault();
    e.stopPropagation();
    if (swiper !== null) {
      swiper.slidePrev();
      adjustBgImage(swiper.slides[swiper.activeIndex].dataset.bgImg);
    }
  };

  useEffect(() => {
    if (swiper !== null) {
      setSlides(swiper.slides?.length - 2);
      setCurrentSlide(1);

      adjustBgImage(swiper.slides[swiper.activeIndex].dataset.bgImg);
      swiper.on("slideChange", function() {
        setCurrentSlide(swiper.realIndex + 1);
        adjustBgImage(swiper.slides[swiper.activeIndex].dataset.bgImg);
      });
    }
  }, [swiper]);

  function adjustBgImage(img) {
    document.getElementById("brands-slider-bg").style.backgroundImage =
      "url(" + img + ")";
  }

  const params = {
    loop: true,
    speed: 1200,
    parallax: false,
    cssMode: true,
    autoHeight: false,
    getSwiper: updateSwiper,
  };

  const slidesData = props.sliderData || [];

  const renderSwiper = sliderParams => {
    return (
      <Swiper
        className="home-testimonial-slider"
        {...sliderParams}
        parallax={true}
        cssMode={false}
        lang={props.lang}
      >
        {slidesData.map((slide, index) => {
          return (
            <WeGetBrandsSlide
              key={"wgb-slide-" + index}
              {...slide}
              lang={props.lang}
            />
          );
        })}
      </Swiper>
    );
  };

  const { windowWidth } = useWindowEventListener();
  return (
    <>
      <div className="hero-brands-image">
        <div
          style={{
            backgroundImage: "url(/images/patterns/pattern-01.svg)",
          }}
          id="brands-slider-bg"
        ></div>
      </div>

      <div className="brands-mask">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 2500 431.3"
        >
          <path fill="#191919" d="M0,0v431.3h2500V262.4L0,0z" />
        </svg>
      </div>
      {windowWidth >= 769 &&
        renderSwiper({ ...params, parallax: true, cssMode: false })}
      {windowWidth < 769 && renderSwiper(params)}
      <div className="slide-nav">
        <a
          href="#prev"
          onClick={goPrev}
          className="slide-arrow prev swiper-prev"
        >
          <Image src="/images/arrow-light.svg"></Image>
        </a>

        <div className="slide-nums">
          <span className="current">{CurrentSlide}</span>/
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
    </>
  );
};
export default WeGetBrandsSlider;
