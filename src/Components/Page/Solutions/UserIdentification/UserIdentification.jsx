import React from "react";
import Swiper from "react-id-swiper";

import "./_UserIdentification.scss";

import Image from "Components/Image/Image";
import FlipCard from "Components/General/FlipCard/FlipCard";
import ImageText from "Components/General/ImageText/ImageText";
import CenteredTitle from "Components/General/CenteredTitle/CenteredTitle";
import useWindowEventListener from "utils/useWindowEventListener";

const UserIdentification = props => {
  const params = {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 0,
    cssMode: true,
    watchOverflow: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  };

  const {
    content,
    featuredText,
    sectionTitle,
    featuredImage,
    flipCards,
  } = props;

  const renderSwiper = sliderParams => {
    return (
      <Swiper
        {...sliderParams}
        className="email-cards-slider row justify-content-end"
        lang={props.lang}
      >
        {flipCards &&
          flipCards.map((card, i) => {
            return (
              <div key={"card-" + i} className="swiper-slide">
                <FlipCard {...card} lang={props.lang} />
              </div>
            );
          })}
      </Swiper>
    );
  };

  const { windowWidth } = useWindowEventListener();

  return (
    <section className="user-identification cream-bg">
      <ImageText image={{ url: featuredImage && featuredImage.sourceUrl }}>
        <div className="mob-only">
          <Image src={featuredImage && featuredImage.sourceUrl}></Image>
        </div>
        <div className="side-heading">{sectionTitle}</div>
        <div
          className="info"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </ImageText>

      <div className="email-section container">
        <CenteredTitle>{featuredText}</CenteredTitle>

        <div className={"email-cards"}>
          {windowWidth < 1025 && renderSwiper(params)}
          {windowWidth >= 1025 &&
            renderSwiper({
              ...params,
              cssMode: false,
              pagination: false,
              slidesPerView: 3,
              spaceBetween: 24,
            })}
        </div>
      </div>
    </section>
  );
};

export default UserIdentification;
