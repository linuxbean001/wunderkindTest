import React from "react";
import Plx from "react-plx";

class SplitHeading extends React.Component {
  constructor(props) {
    super(props);

    this.fadeIn = {
      startValue: 0,
      endValue: 1,
      property: "opacity",
    };

    this.start_offset =
      this.props.plxData.start_offset !== undefined
        ? this.props.plxData.start_offset
        : "50vh";

    this.state = {
      fadeText: {
        left: [
          {
            start: this.props.plxData.start_container,
            duration: "40vh",
            startOffset: this.start_offset,
            properties: [
              {
                startValue: -10,
                endValue: -5,
                unit: "rem",
                property: "translateX",
              },
              this.fadeIn,
            ],
          },
        ],
        right: [
          {
            start: this.props.plxData.start_container,
            duration: "40vh",
            startOffset: this.start_offset,
            properties: [
              {
                startValue: 10,
                endValue: 5,
                unit: "rem",
                property: "translateX",
              },
              this.fadeIn,
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="plx-split-title-container">
        <h2 className="plx-title split-heading">
          <Plx
            parallaxData={this.state.fadeText.left}
            className="plx-heading-left"
          >
            <span>{this.props.text.left}</span>
          </Plx>
          <Plx
            parallaxData={this.state.fadeText.right}
            className="plx-heading-right"
          >
            <span>{this.props.text.right}</span>
          </Plx>
        </h2>
      </div>
    );
  }
}

export default SplitHeading;
