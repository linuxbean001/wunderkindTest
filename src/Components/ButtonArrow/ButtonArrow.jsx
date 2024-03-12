import React from "react";
import Image from "./../Image/Image";

import "./ButtonArrow.scss";
import { AddLang } from "../../utils/addLang";
import { getVideoData } from "../../utils/getVideoData";

function ButtonArrow(props) {
  return (
    <a
      href={AddLang(props.href, props.lang)}
      {...getVideoData(props.href)}
      className={"btn-arrow" + (props.className ? " " + props.className : "")}
    >
      <span className="in desktop-arrow">{props.children}</span>
      <span className="out desktop-arrow">{props.children}</span>
      <span className="in mob-arrow">
        <Image src={"/images/arrow-light.svg"}></Image>
      </span>
      <span className="out mob-arrow">
        <Image src={"/images/arrow.svg"}></Image>
      </span>
    </a>
  );
}

export default ButtonArrow;
