import React from "react";

const ModalOverlay = props => {
  const { isCentered, moStyle } = props;

  return (
    <div
      style={{ zIndex: moStyle === "hidden" ? "-1" : "100010" }}
      className={isCentered ? "modal-centered" : "modal"}
    >
      <div className={isCentered ? "" : "content"}>{props.children}</div>
    </div>
  );
};

export default ModalOverlay;
