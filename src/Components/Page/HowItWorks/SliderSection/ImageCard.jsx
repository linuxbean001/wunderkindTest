import React from "react";
import "./styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Arrow from '../../../Arrow/Arrow';

function ImageCard({image, cardTitle, cardText, cardHref, themeColor}) {

  const gradient = `linear-gradient(to bottom right, transparent 50%, ${themeColor} 50%) no-repeat, linear-gradient(to top left, transparent 0.1%, ${themeColor} 0.1%) no-repeat`;
  const bgSize = '10% 100%, 90.2% 100%';
  const bgPosition = '0% 0%, 100% 0%';
  return (
    <div className={"flex gradient-card"}>
      <div><img src={image} /></div>
      <div className={"solid-bg"} style={{background: themeColor}}></div>
      <div className={"gradient left"} style={{background: gradient, backgroundSize: bgSize, backgroundPosition: bgPosition}}>
        <div>
          <div className={"title"}>{cardTitle}</div>
          <div className={"back-arrow-with-text"}>{cardText}</div>
          <Arrow dark href={cardHref} />
        </div>
      </div>
    </div>
  );

}

export default ImageCard;
