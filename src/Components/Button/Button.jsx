import React from "react";

import "./Button.scss";
import { AddLang } from "../../utils/addLang";
import { getVideoData } from "../../utils/getVideoData";
import { animateScroll } from "react-scroll";

function Button(props) {
  const scrollToForm = e => {
    e.preventDefault();
    const headerHeight =
      document.querySelector(".sticky-header") &&
      document.querySelector(".sticky-header").getBoundingClientRect().height;
    const offset = props.scrollToElement ?
        document.getElementById(props.scrollToElement) &&
        document.getElementById(props.scrollToElement).getBoundingClientRect().top :
      document.getElementById("job-form") &&
      document.getElementById("job-form").getBoundingClientRect().top;
    const windowOffset = window.pageYOffset;
    animateScroll.scrollTo(offset - headerHeight + windowOffset);
  };

  return props.scrollTo ? (
    <a
      href={AddLang(props.href, props.lang)}
      className={"btn" + (props.className ? " " + props.className : "")}
      onClick={scrollToForm}
    >
      <div className="btn-lbl-helper">{props.children}</div>
      <span className="in">{props.children}</span>
      <span className="out">{props.children}</span>
    </a>
  ) : (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={AddLang(props.href, props.lang)}
        {...getVideoData(props.href)}
        className={"btn " + (props.className ? " " + props.className : "")}
      >
        <div className="btn-lbl-helper">{props.children}</div>
        <span className="in">{props.children}</span>
        <span className="out">{props.children}</span>
      </a>
    </>
  );
}

export default Button;
