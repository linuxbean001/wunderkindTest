import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import Arrow from "Components/Arrow/Arrow";
import Image from "Components/Image/Image";

import "./scss/_Solutions.scss";
import useWindowEventListener from "utils/useWindowEventListener";
import { AddLang } from "../../utils/addLang";

const SolutionsSlider = props => {
  const tabItems = props.tab;
  const ConditionalWrapper = props.ConditionalWrapper;
  const sliderIndex = props.index;
  const [swiper, updateSwiper] = useState(null);
  const [slides, setSlides] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [classes, setClasses] = useState(null);

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
      setSlides(tabItems?.items?.length);
      setCurrentSlide(1);

      swiper.on("slideChange", function() {
        setCurrentSlide(swiper.realIndex + 1);
      });
    }
  }, [swiper]);

  useEffect(() => {
    const activeClass = "sl-info-tab";

    setClasses(
      `${activeClass} ${tabItems?.items?.length > 3 ? "nav-on" : "nav-off"} ${
        props.status
      }`
    );
  }, [props.status]);

  const renderSwiper = sliderParams => {
    return (
      <Swiper {...sliderParams} className="row solution-card-slider">
        {tabItems.items.map((item, index) => {
          return (
            <div
              key={"solution-item-" + { sliderIndex } + "-" + index}
              className="swiper-slide"
            >
              <ConditionalWrapper
                key={"cw-solution-item-" + { sliderIndex } + "-" + index}
                condition={item.destinationUrl}
                wrapper={children => (
                  <a href={AddLang(item.destinationUrl)}>{children}</a>
                )}
                lang={props.lang}
              >
                <div className="sl-info-box">
                  <div className="equal-height">
                    <div className="img">
                      {item.itemImage && item.itemImage.sourceUrl && (
                        <Image src={item.itemImage.sourceUrl}></Image>
                      )}
                    </div>

                    <div className="title">{item.itemTitle}</div>
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{ __html: item.itemCopy }}
                    ></div>
                  </div>
                  {item.destinationUrl && (
                    <Arrow
                      className="dark-fill"
                      href={""}
                      lang={props.lang}
                    ></Arrow>
                  )}
                </div>
              </ConditionalWrapper>
            </div>
          );
        })}
      </Swiper>
    );
  };

  const params = {
    slidesPerView: 1,
    cssMode: true,
    loop: true,
    spaceBetween: 24,
    pagination: false,
    getSwiper: updateSwiper,
  };
  const { windowWidth } = useWindowEventListener();

  if (!tabItems.items || !tabItems.items.length) {
    return <></>;
  }

  return (
    <div
      id={"sl-info-tab-" + sliderIndex}
      key={"sl-info-tab-" + sliderIndex}
      className={classes}
      aria-hidden={
        props.status !== "active" && props.loaded && props.status !== "fadeOut"
      }
    >
      {windowWidth < 768 && renderSwiper(params)}
      {windowWidth >= 768 &&
        renderSwiper({
          ...params,
          cssMode: false,
          loop: tabItems?.items?.length > 3,
          slidesPerView: 3,
          pagination: false,
        })}
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
  );
};

export default SolutionsSlider;
