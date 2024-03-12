import React, {useState} from "react";
import {Carousel} from 'react-responsive-carousel';
import "./styles.scss";

function SliderSection(props) {
  const renderPrevButton = (clickHandler, hasPrev, label) => {
    return hasPrev && (
      <div
        className={"prevButton"}
        onClick={clickHandler}
      >
        <img alt="" className="img" src="/images/arrow-light.svg" />
      </div>
    )
  }
  const renderNextButton = (clickHandler, hasNext, label) => {
    return hasNext && (
      <div
        className={"nextButton"}
        onClick={clickHandler}
      >
        <img width={20} alt="" className="img" src="/images/arrow-light.svg" />
      </div>
    )
  }
  const renderIndicator = (
    clickHandler,
    isSelected,
    index) => {
    return (
      <span className={`slider-indicator ${isSelected ? "selected" : ""}`} onClick={clickHandler}>{index + 1}</span>
    );
  };
  return (
    <section
      className={
        "how-it-works-ads-slider-section"
      }
    >
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-7 col-md-12"}>
            <h1>
              Once we’ve identified the <i>right time</i> to show an ad, we deploy the <i>right format</i>.
            </h1>
            <p>
              {"Wunderkind’s custom placements are designed to fit both our advertiser and publishing partners’ needs. Our placements range from large high-impact display to standard IAB display. All of our formats are available on both desktop and mobile, and our large format ads come with free creative services to ensure they make a big impact."}
            </p>
          </div>
          <div className={"col-lg-5 col-md-12"}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              renderArrowPrev={renderPrevButton}
              renderArrowNext={renderNextButton}
              renderIndicator={renderIndicator}
            >
              <div className={"card-image-container"}>
                <img src={"/images/how-it-works/imageSlide1.png"}/>
              </div>
              <div className={"card-image-container"}>
                <img src={"/images/how-it-works/imageSlide2.png"}/>
              </div>
              <div className={"card-image-container"}>
                <img src={"/images/how-it-works/imageSlide3.png"}/>
              </div>
              <div className={"card-image-container"}>
                <img src={"/images/how-it-works/imageSlide4.png"}/>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );

}

export default SliderSection;
