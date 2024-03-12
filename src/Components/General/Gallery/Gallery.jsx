import React, { useState } from "react";
import Swiper from "react-id-swiper";

import Image from "Components/Image/Image";

import "./_Gallery.scss";
import useWindowEventListener from "utils/useWindowEventListener";

const Gallery = props => {
  const [swiper, updateSwiper] = useState(null);
  const slides = props.slides || [];
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

  const galleryData = slides.map(slide => {
    return {
      image: slide.image,
      caption: slide.imageCaptions,
    };
  });

  const params = {
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 24,
    centeredSlides: true,
    speed: 1500,
    autoplay: false,
    getSwiper: updateSwiper,
  };

  const renderSwiper = sliderParams => {
    return (
      <Swiper {...sliderParams}>
        {galleryData.map((value, index) => {
          return (
            <div key={index}>
              <div className="gallery-box">
                <div className="image">
                  {value.image && (
                    <Image
                      src={value.image.sourceUrl}
                      alt={value.image.sourceUrl}
                    />
                  )}
                </div>

                <div className="info">
                  <div className="number">
                    {(index < 10 ? "0" : "") + (index + 1)}
                  </div>
                  <p
                    className="caption"
                    dangerouslySetInnerHTML={{ __html: value.caption }}
                  ></p>
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
    <section
      className={
        "gallery-slider" +
        (props.className !== undefined && props.className
          ? " " + props.className
          : "") +
        (props.dark !== undefined && props.dark ? "" : " cream-bg") +
        (props.navArrows !== undefined && props.navArrows
          ? ""
          : " no-nav-arrows")
      }
    >
      {windowWidth < 768 && renderSwiper(params)}
      {windowWidth >= 768 &&
        windowWidth < 1024 &&
        renderSwiper({ ...params, slidesPerView: 1.3 })}
      {windowWidth >= 1024 && renderSwiper({ ...params, slidesPerView: 1.85 })}
      <div className="slide-nav">
        <a
          href="#prev"
          onClick={goPrev}
          className="slide-arrow prev swiper-prev"
        >
          <Image
            src={
              !!props.dark
                ? "/images/arrow-gallery.svg"
                : "/images/iconarrowlarge.svg"
            }
          ></Image>
        </a>
        <a
          href="#next"
          onClick={goNext}
          className="slide-arrow next swiper-next"
        >
          <Image
            src={
              !!props.dark
                ? "/images/arrow-gallery.svg"
                : "/images/iconarrowlarge.svg"
            }
          ></Image>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
