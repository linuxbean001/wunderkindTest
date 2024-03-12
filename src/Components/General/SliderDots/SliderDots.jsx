import React, { useState, useEffect } from "react";
import "./_SliderDots.scss";

const SliderDots = props => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index, element) => {
    element.preventDefault();
    props.swiper.slideTo(index);
  };

  return (
    props.slideItems.length > 0 && (
      <div className="slider-dots">
        {props.slideItems.map((value, index) => {
          return (
            <span
              onClick={goToSlide.bind(this, index)}
              key={index}
              className={"dot" + (index === currentIndex ? " active" : "")}
            ></span>
          );
        })}
      </div>
    )
  );
};

export default SliderDots;
