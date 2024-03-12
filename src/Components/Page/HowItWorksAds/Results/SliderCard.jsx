import React from "react";
import "./styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SliderCard({bgColor, index, content, updateCurrentSlide}) {
  const renderResultItem = (item) => {
    const {prefix, number, sufix, text} = item;
    return (
      <div className={"results-wrapper"}>
        <div>
          <div className={"number"}>
            {prefix && <span>{prefix}</span>}
            {number}
            {sufix && <span>{sufix}</span>}
          </div>
          <p>{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={"card-container"} style={{backgroundColor: bgColor}}>
      <div className={"flex flex-wrap card-tabs"}>
        <div className={index === 0 ? "active" : ""} onClick={() => updateCurrentSlide(0)}>{"For Advertisers"}</div>
        <div className={index === 1 ? "active" : ""} onClick={() => updateCurrentSlide(1)}>{"For Publishers"}</div>
      </div>
      <div className={"flex justify-content-between all-results"}>
        {content.map(item => renderResultItem(item))}
      </div>
    </div>
  );

}

export default SliderCard;
