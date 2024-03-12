import React from "react";

import "./_ButtonSigns.scss";
import Image from "./../Image/Image";
import { AddLang } from "../../utils/addLang";
import { getVideoData } from "../../utils/getVideoData";

function Close(props) {
  const className = props.className;
  return (
    <a
      href={AddLang(props.href, props.lang)}
      {...getVideoData(props.href)}
      className={"btn btn-sign btn-close" + (className ? " " + className : "")}
    >
      <span className={className && className == "btn-inv" ? "out" : "in"}>
        <Image src={"/images/icons/icon-close.svg"}></Image>
      </span>
      <span className={className && className == "btn-inv" ? "in" : "out"}>
        <Image src={"/images/icons/icon-close-light.svg"}></Image>
      </span>
    </a>
  );
}

export default Close;
