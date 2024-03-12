import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";

import "./_StaffGallery.scss";

import StaffBox from "Components/General/StaffGallery/StaffBox";
import Image from "Components/Image/Image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const StaffGallery = props => {
  const staffMembers = props.staffMembers || [];

  const [currentSlide, setCurrentSlide] = React.useState(1);

  const staffGallery = staffMembers.map(item => {
    return {
      image: item.image && item.image.sourceUrl,
      sillyPhotos: item.sillyPhotos,
      name: item.name,
      position: item.jobPosition,
      bio: item.biography,
    };
  });

  const openBio = element => {
    const parent = element.target.closest(".staff-box");
    const itemClassName = parent.attributes.getNamedItem("item-target-class")
      ? parent.attributes.getNamedItem("item-target-class").value
      : "no-items";
    const triggerSlidesBio = document.querySelectorAll(
      `.staff-gallery-slider .react-multi-carousel-item .${itemClassName}`
    );
    triggerSlidesBio.forEach(item => {
      if ( item.classList.contains( 'bio-closed' ) ) {
        item.classList.remove( 'bio-closed' );
        item.classList.add( 'bio-opened' );
      } else {
          item.classList.remove( 'bio-opened' );
          item.classList.add( 'bio-closed' );
      }
    });
  };

  const responsive = {
    desktopLarge: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
      slidesToSlide: 1
    },
    desktopSmall: {
      breakpoint: { max: 1399, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1023, min: 516 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 515, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const onClickNext = (next) => {
    if(currentSlide + 1 <= staffGallery.length) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(1);
    }
    next();
  }

  const onClickPrev = (prev) => {
    if(currentSlide - 1 >= 1) {
      setCurrentSlide(currentSlide - 1)
    } else {
      setCurrentSlide(staffGallery.length);
    }
    prev();
  }

  const SliderButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    return (
        <div className="carousel-button-group slide-nav">
          <a className={'slide-arrow prev swiper-prev'} onClick={() => onClickPrev(previous)}>
            <Image src="/images/arrow-light.svg"></Image>
          </a>
          <div className="slide-nums">
            <span className="current">{currentSlide}</span>/
            <span className="max">{staffGallery.length}</span>
          </div>
          <a className="slide-arrow next swiper-next" onClick={() => onClickNext(next)}>
            <Image src="/images/arrow-light.svg"></Image>
          </a>
        </div>
    );
  };

  const renderSwiper = () => {
    return (
      <>
        <Carousel
            responsive={responsive}
            ssr
            showDots={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<SliderButtonGroup />}
            infinite
            containerClass="container-with-dots"
            itemClass="image-item swiper-slide"
            arrows={false}
        >
          {staffGallery.map((value, index) => {
            return (
                <div key={index}>
                  <StaffBox content={value} itemIndex={index} openBio={openBio} />
                </div>
            );
          })}
        </Carousel>
      </>
    );
  };

  return (
    <section className="staff-gallery-slider">{renderSwiper()}</section>
  );
};

export default StaffGallery;
