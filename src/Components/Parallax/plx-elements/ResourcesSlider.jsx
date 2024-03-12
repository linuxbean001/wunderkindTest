import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import useWindowEventListener from "utils/useWindowEventListener";

const ResourcesSlider = props => {
  const [swiper, updateSwiper] = useState(null);

  useEffect(() => {
    window.addEventListener("load", function() {
      if (swiper !== null) {
        swiper.on("slideChange", function() {});
      }
    });
  });

  const params = {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 0,
    cssMode: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    getSwiper: updateSwiper,
  };

  const renderSwiper = sliderParams => {
    return (
      <Swiper {...sliderParams} lang={props.lang}>
        {props.children}
      </Swiper>
    );
  };

  const { windowWidth } = useWindowEventListener();

  return (
    <>
      {windowWidth < 768 && renderSwiper(params)}
      {windowWidth >= 768 &&
        windowWidth < 1024 &&
        renderSwiper({ ...params, cssMode: true })}
      {windowWidth >= 1024 &&
        renderSwiper({
          ...params,
          cssMode: false,
          slidesPerView: 3,
          spaceBetween: 24,
          pagination: false,
        })}
    </>
  );
};
export default ResourcesSlider;
