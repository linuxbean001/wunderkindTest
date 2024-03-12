import React from "react";
import Carousel from "react-multi-carousel";
import Image from "../../../../Image/Image";
import WatchNextResourceCard from "../../../../General/ResourceCard/ResourceCard";
import "react-multi-carousel/lib/styles.css";
import "./_CarouselWatchNext.scss";

const CarouselWatchNext = ({ carouselItems = [] }) => {
  const responsive = {
    largeTablet: {
      breakpoint: { max: 767, min: 685 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: -10,
    },
    semiLargeTablet: {
      breakpoint: { max: 685, min: 650 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 285,
    },
    tablet: {
      breakpoint: { max: 650, min: 600 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 230,
    },
    smallTablet: {
      breakpoint: { max: 600, min: 500 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 130,
    },
    extraSmallTablet: {
      breakpoint: { max: 500, min: 470 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 80,
    },
    largeMobile: {
      breakpoint: { max: 470, min: 450 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 50,
    },
    semiLargeMobile: {
      breakpoint: { max: 450, min: 425 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 425, min: 375 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    mediumMobile: {
      breakpoint: { max: 375, min: 340 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 50,
    },
    smallMobile: {
      breakpoint: { max: 339, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <>
      <div className="d-none d-md-flex align-items-md-center justify-content-md-center carousel-container">
        {carouselItems.map((value, index) => {
          return <WatchNextResourceCard key={index} item={value} />;
        })}
      </div>
      <Carousel
        responsive={responsive}
        ssr
        showDots={false}
        containerClass="container carousel-container-cards"
        itemClass="carousel-card-item"
        renderArrowsWhenDisabled={true}
        arrows={true}
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
        partialVisible
      >
        {carouselItems.map((value, index) => {
          return <WatchNextResourceCard key={index} item={value} />;
        })}
      </Carousel>
    </>
  );
};

export default CarouselWatchNext;

const LeftArrow = ({ onClick }) => {
  return (
    <div className="arrow-left" onClick={onClick}>
      <Image src="/images/arrow-2-left.svg" />
    </div>
  );
};

const RightArrow = ({ onClick }) => {
  return (
    <div className="arrow-right" onClick={onClick}>
      <Image src="/images/arrow-2.svg" />
    </div>
  );
};
