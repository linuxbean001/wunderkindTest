import React from "react";
import Image from "./../Image/Image";
import "./Arrow.scss";
import { AddLang } from "../../utils/addLang";
import { getVideoData } from "../../utils/getVideoData";
function Arrow(props) {
  const dark = props.dark !== undefined ? props.dark : false;
  const plus = props.plus !== undefined ? props.plus : false;
  const left = props.left !== undefined ? props.left : false;
  const vertical = props.vertical !== undefined ? props.vertical : false;
  let cmpClass = "arrow";
  cmpClass += dark ? " dark" : "";
  cmpClass += vertical ? " vertical" : "";
  cmpClass += props.noborder ? " no-border" : "";
  let arrow = "";
  const ConditionalWrapper = ({
    condition,
    link_wrapper,
    no_link_wrapper,
    children,
  }) => (condition ? link_wrapper(children) : no_link_wrapper(children));
  if (props.type !== 2) {
    if (dark) {
      arrow = (
        <>
          <span className="in">
            <Image
              src={left ? "/images/arrow-left.svg" : "/images/arrow.svg"}
            ></Image>
          </span>
          <span className="out">
            <Image
              src={
                left
                  ? "/images/arrow-left-light.svg"
                  : "/images/arrow-light.svg"
              }
            ></Image>
          </span>
        </>
      );
    } else {
      arrow = (
        <>
          <span className="in">
            <Image
              src={
                left
                  ? "/images/arrow-left-light.svg"
                  : "/images/arrow-light.svg"
              }
            ></Image>
          </span>
          <span className="out">
            <Image
              src={left ? "/images/arrow-left.svg" : "/images/arrow.svg"}
            ></Image>
          </span>
        </>
      );
    }
  } else {
    if (dark) {
      arrow = (
        <>
          <span className="in">
            {left ? (
              <Image src={"/images/arrow-2-left.svg"}></Image>
            ) : (
              <Image src={"/images/arrow-2.svg"}></Image>
            )}
          </span>
          <span className="out">
            {left ? (
              <Image src={"/images/arrow-2-left-light.svg"}></Image>
            ) : (
              <Image src={"/images/arrow-2-light.svg"}></Image>
            )}
          </span>
        </>
      );
    } else {
      arrow = (
        <>
          <span className="in">
            {left ? (
              <Image src={"/images/arrow-2-left-light.svg"}></Image>
            ) : (
              <Image src={"/images/arrow-2-light.svg"}></Image>
            )}
          </span>
          <span className="out">
            {left ? (
              <Image src={"/images/arrow-2-left.svg"}></Image>
            ) : (
              <Image src={"/images/arrow-2.svg"}></Image>
            )}
          </span>
        </>
      );
    }
  }
  if (dark) {
    if (plus) {
      return (
        <a
          href={AddLang(props.href, props.lang)}
          {...getVideoData(props.href)}
          className={cmpClass + (props.className ? " " + props.className : "")}
        >
          <span className="in plus">
            <Image src={"/images/plus.png"}></Image>
          </span>
        </a>
      );
    } else {
      return props.noLink ? (
        <div
          className={cmpClass + (props.className ? " " + props.className : "")}
        >
          {arrow}
        </div>
      ) : (
        <a
          href={AddLang(props.href, props.lang)}
          {...getVideoData(props.href)}
          className={cmpClass + (props.className ? " " + props.className : "")}
        >
          {arrow}
        </a>
      );
    }
  } else {
    if (plus) {
      return (
        <a
          href={AddLang(props.href, props.lang)}
          {...getVideoData(props.href)}
          className={cmpClass + (props.className ? " " + props.className : "")}
        >
          <span className="in plus">
            <Image src={"/images/plus.png"}></Image>
          </span>
          <span className="out plus">
            <Image src={"/images/plus.png"}></Image>
          </span>
        </a>
      );
    } else {
      return props.noLink ? (
        <div
          className={cmpClass + (props.className ? " " + props.className : "")}
        >
          {arrow}
        </div>
      ) : (
        <ConditionalWrapper
          condition={props.href !== ""}
          link_wrapper={children => (
            <a
              className={
                cmpClass + (props.className ? " " + props.className : "")
              }
              href={AddLang(props.href, props.lang)}
              {...getVideoData(props.href)}
            >
              {children}
            </a>
          )}
          no_link_wrapper={children => (
            <span
              className={
                cmpClass + (props.className ? " " + props.className : "")
              }
            >
              {children}
            </span>
          )}
        >
          {arrow}
        </ConditionalWrapper>
      );
    }
  }
}
export default Arrow;
