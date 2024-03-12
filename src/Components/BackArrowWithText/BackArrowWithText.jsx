import React from "react";
import Arrow from "../Arrow/Arrow";
import "./BackArrowWithText.scss";

const BackArrowWithText = ({
  text,
  textClassName,
  linkClassName,
  dark = undefined,
  redirectTo,
}) => {
  return (
    <a
      href={redirectTo}
      className={`arrow-text-container ${linkClassName ?? ""}`}
    >
      <Arrow
        left={true}
        type={2}
        dark={!Boolean(dark)}
        noborder={true}
        noLink={true}
      />
      <h3 className={`back-arrow-with-text ${dark ? "dark" : ""}`}>
        {text}
      </h3>
    </a>
  );
};

export default BackArrowWithText;
