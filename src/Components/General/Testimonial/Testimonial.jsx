import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";

import "./_Testimonial.scss";
import Image from "Components/Image/Image";
import ImageText from "Components/General/ImageText/ImageText";

const Testimonial = props => {
  const [swiper, updateSwiper] = useState(null);
  const slides = props.slides || [];

  useEffect(() => {
    window.addEventListener("load", function() {
      if (swiper !== null) {
        swiper.on("slideChange", function() {});
      }
    });
  }, [swiper]);

  const params = {
    watchOverflow: true,
    speed: 1500,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  };

  const slideItems = slides.map(slide => {
    return {
      image: slide.image && slide.image.sourceUrl,
      sideHeading: slide.title,
      text: slide.bodyCopy,
      user: {
        image:
          slide.person && slide.person.avatar && slide.person.avatar.sourceUrl,
        name: slide.person && slide.person.name,
        position: slide.person && slide.person.jobTitle,
      },
    };
  });

  return (
    <section
      className={
        "testimonial-slider" +
        (!!props.dark ? " dark" : " cream-bg") +
        (props.className ? " " + props.className : "")
      }
    >
      <div className="slider-wrap">
        <Swiper {...params} getSwiper={updateSwiper}>
          {slideItems.map((value, index) => {
            return (
              <div key={index} className="swiper-slide">
                <ImageText
                  image={{ url: value.image, rightAlign: true }}
                  dark={!!props.dark}
                >
                  <div className="side-heading">{value.sideHeading}</div>
                  <div className="info">
                    <h4
                      className="title"
                      dangerouslySetInnerHTML={{ __html: value.text }}
                    ></h4>

                    <div className="user-box">
                      {value.user.image && (
                        <div className="img">
                          <Image src={value.user.image}></Image>
                        </div>
                      )}
                      <div className="user-info">
                        <div className="name">{value.user.name}</div>
                        <div className="position">{value.user.position}</div>
                      </div>
                    </div>
                  </div>
                </ImageText>
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
