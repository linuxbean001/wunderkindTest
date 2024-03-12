import React, {useState} from "react";
import {Carousel} from 'react-responsive-carousel';

import "./styles.scss";
import SliderCard from './SliderCard';
import Quote from '../../HowItWorks/Quote';
import ImageCard from '../../HowItWorks/SliderSection/ImageCard';

function WhatItMeansSection(props) {

  const [currentSlide, setCurrentSlide] = useState(0);

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  const onPrevButtonClick = (clickHandler) => {
    clickHandler();
    setCurrentSlide(currentSlide - 1);
  }
  const onNextButtonClick = (clickHandler) => {
    clickHandler();
    setCurrentSlide(currentSlide + 1);
  }

  const onIndicatorButtonClick = (clickHandler, index) => {
    clickHandler();
    setCurrentSlide(index);
  }
  const renderPrevButton = (clickHandler, hasPrev, label) => {
    return hasPrev && (
      <div
        className={"prevButton"}
        onClick={() => onPrevButtonClick(clickHandler)}
      >
        <img alt="" className="img" src="/images/arrow.svg" />
      </div>
    )
  }
  const renderNextButton = (clickHandler, hasNext, label) => {
    return hasNext && (
      <div
        className={"nextButton"}
        onClick={() => onNextButtonClick(clickHandler)}
      >
        <img width={20} alt="" className="img" src="/images/arrow.svg" />
      </div>
    )
  }
  const renderIndicator = (
    clickHandler,
    isSelected,
    index) => {
    return (
      <span className={`slider-indicator ${isSelected ? "selected" : ""}`} onClick={() => onIndicatorButtonClick(clickHandler, index)}>{index + 1}</span>
    );
  };
  return (
    <section
      className={
        "how-it-works-ads-results-section"
      }
    >
      <div className={"container"}>
        <h2 className="how-it-works-ads-header">{"A WunderKIND Ad experience drives results."}</h2>
        <div className={"row"}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            renderArrowPrev={renderPrevButton}
            renderArrowNext={renderNextButton}
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
          >
            <SliderCard
              index={0}
              updateCurrentSlide={updateCurrentSlide}
              bgColor={"#CC9966"}
              content={[
                {
                  number: "79",
                  sufix: "%",
                  text: "Over-Indexed Viewability. Over indexes to display benchmark (61%)"
                },
                {
                  number: "30",
                  prefix: "+",
                  sufix: "%",
                  text: "Higher Attention Quality"
                },
                {
                  number: "31",
                  prefix: "+",
                  sufix: "%",
                  text: "More Site Actions"
                }
              ]}
            />
            <SliderCard
              index={1}
              updateCurrentSlide={updateCurrentSlide}
              bgColor={"#303D78"}
              content={[
                {
                  number: "10-15",
                  prefix: "$",
                  text: "Industry-Leading gross CPMs are driven by our inventory"
                },
                {
                  number: "5-10",
                  sufix: "%",
                  text: "Incremental Demand lift in ad revenue on average"
                },
                {
                  number: "5",
                  prefix: "Top ",
                  text: "Wunderkind regularly appears as a Top 5 Revenue Partner"
                }
              ]}
            />
          </Carousel>
        </div>
        <div className={"row"}>
          <div className={"col-lg-6"}>
            <h2>{"The proof is in the pudding."}</h2>
            <p>{"Triggering ads based on behaviors that signify disengagement from publisher content creates a better user experience and helps garner true qualified engagement compared to standard display and high-impact activations."}</p>
            <img className={"big-image"}
              src={`/images/how-it-works/${currentSlide === 0 ? "Leader.png" : "Adventurer.png"}`}
            />
          </div>
          <div className={"col-lg-6"}>
            <Quote
              quote={"“Wunderkind has been a showstopper for us—specifically for registrations! Wunderkind is actually contributing ~30% of total registration starts for this campaign. We’re very pleased (as is the client).”"}
              author={"Lyndsey Garza\nGlobal VP of Programmatic at Brainlabs"}
              textColor={"#191919"}
              borderColor={"#191919"}
            />
            <div className={"img-card-wrapper"}>
              <ImageCard
                cardTitle={"Success Story:"}
                cardText={"See how Wunderkind drove unparalleled revenue for Weather.com"}
                themeColor={"#3D55CC"}
                image={"/images/how-it-works/img-card-1.png"}
                cardHref={"/resources/case-studies/weather-com/"}
              />
            </div>
            <div className={"img-card-wrapper"}>
              <ImageCard
                cardTitle={"Guide:"}
                cardText={"Want to learn more? Check out our Kindness in Advertising report here."}
                themeColor={"#25B89D"}
                image={"/images/how-it-works/img-card-2.png"}
                cardHref={"/resources/guides/kindness-in-advertising/"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default WhatItMeansSection;
