import React from "react";

const RisingCurve = props => {
  const { fillColor, complementColor } = props;

  return (
    <svg
      style={{ marginBottom: "-1rem" }}
      fill={fillColor}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1440 160.8"
      xmlSpace="preserve"
    >
      <g>
        <path fill={complementColor} d="M1440.3,35.6c-97.8,38.9-242.9,75-443.3,74.9c-71,0-149.1-4.6-234.7-15.2L-0.3,0v160.8h1440.7" />
      </g>
    </svg>
  );
};

export default RisingCurve;
