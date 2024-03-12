import React from "react";
import Plx from "react-plx";

import "./scss/style.scss";

const stickyTextData = [
  {
    start: ".plx-we-are-w",
    duration: "40vh",
    easing: "easeInOut",
    startOffset: "20vh",
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
  {
    start: ".plx-we-are-w",
    duration: "250vh",
    easing: "easeInOut",
    startOffset: "0vh",
    properties: [
      {
        startValue: 0,
        endValue: 100,
        unit: "vh",
        property: "translateY",
      },
    ],
  },
  {
    start: ".plx-we-are-w",
    duration: "40vh",
    startOffset: "170vh",
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
    ],
  },
];

class WeAre extends React.Component {
  render() {
    return (
      <div className="plx-we-are-w">
        <div className="plx-section">
          <Plx className="plx-heading" parallaxData={stickyTextData}>
            <h2>{this.props.children}</h2>
          </Plx>
        </div>
      </div>
    );
  }
}

export default WeAre;
