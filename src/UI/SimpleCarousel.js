import React, { useState, useEffect } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

const SimpleCarousel = props => {
  const { children, isMobile } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children?.length);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children?.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
          <div
            className={
              isMobile
                ? "carousel-btns-wrapper-mobile flex gap-8"
                : "carousel-btns-wrapper flex gap-8"
            }
          >
            <button
              disabled={!currentIndex > 0}
              className="text-3xl slider-btn disable cursor-pointer"
              onClick={prev}
            >
              <ArrowLeft
                stroke={!(!currentIndex > 0) ? "black" : "lightgrey"}
              />
            </button>

            <button
              disabled={!(currentIndex < length - 1)}
              className="text-3xl slider-btn cursor-pointer"
              onClick={next}
            >
              <ArrowRight
                stroke={!(currentIndex < length - 1) ? "lightgrey" : "black"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCarousel;
