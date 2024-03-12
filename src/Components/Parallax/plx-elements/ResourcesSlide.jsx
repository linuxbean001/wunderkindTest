import React from "react";

import Image from "Components/Image/Image";
import Arrow from "Components/Arrow/Arrow";
import { AddLang } from "../../../utils/addLang";

const ResourcesSlide = props => {
  let dark = props.dark === true ? " dark" : "";

  return (
    <div className="swiper-slide">
      <div className={"resource-card" + dark}>
        <div
          style={{
            backgroundColor: props.maskColor,
          }}
          className="image"
        >
          <Image className="heading-image" src={props.image}></Image>
        </div>
        <div className="info-wrap">
          <div className="info">
            <div className="category">
              <a href={AddLang("/", props.lang)}>Case Study</a>
            </div>
            <div className="title">
              <a href={AddLang("/", props.lang)}>
                Lorem ipsum dolor sit in amet, con sectetur adipis.
              </a>
            </div>
            <div className="btn-wrap">
              <Arrow type={2} dark={dark}></Arrow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResourcesSlide;
