import React from "react";

import "./_ButtonSigns.scss";
import Image from "./../Image/Image";
import { AddLang } from "../../utils/addLang";
import { getVideoData } from "../../utils/getVideoData";

function Plus(props) {
  return (
    <a
      href={AddLang(props.href, props.lang)}
      {...getVideoData(props.href)}
      className={
        "btn btn-sign" + (props.className ? " " + props.className : "")
      }
    >
      <span className="in">
        <Image src={"/images/icons/plus.svg"}></Image>
      </span>
      <span className="out">
        <Image src={"/images/icons/plus-light.svg"}></Image>
      </span>
    </a>
  );
}

export default Plus;
