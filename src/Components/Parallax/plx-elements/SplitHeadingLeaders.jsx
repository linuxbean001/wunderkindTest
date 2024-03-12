import React from "react";
import Plx from "react-plx";

class SplitHeadingLeaders extends React.Component {
  constructor(props) {
    super(props);

    this.start_offset =
      this.props.plxData.start_offset !== undefined
        ? this.props.plxData.start_offset
        : "50vh";
    this.startContainer = this.props.plxData.start_container;

    this.fadeIn = {
      startValue: 0,
      endValue: 1,
      property: "opacity",
    };

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

    this.fadeText = {
      left: [
        {
          start: this.startContainer,
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
          start: this.startContainer,
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
    };

    this.hide = {
      startValue: 1,
      endValue: 0,
      property: "opacity",
    };

    this.show = {
      startValue: 0,
      endValue: 1,
      property: "opacity",
    };

    this.duration = "1vh";

    this.plxExpHide = [
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "150vh",
        properties: [this.hide],
      },
    ];
    this.plxTrailHide = [
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "150vh",
        properties: [this.show],
      },
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "190vh",
        properties: [this.hide],
      },
    ];
    this.plxLeadersHide = [
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "190vh",
        properties: [this.show],
      },
    ];
    this.plxPioneersHide = [
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "190vh",
        properties: [this.show],
      },
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "230vh",
        properties: [this.hide],
      },
    ];
    this.plxLeaders2Hide = [
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "230vh",
        properties: [this.show],
      },
    ];
  }

  render() {
    return (
      <h2 className="plx-title split-heading">
        <Plx
          parallaxData={this.state.fadeText.left}
          className="plx-heading-left"
        >
          <span>We get</span>
        </Plx>
        <Plx
          parallaxData={this.state.fadeText.right}
          className="plx-heading-right"
        >
          <div className="textplaceholder">leaders</div>
          <Plx className="start" parallaxData={this.plxExpHide}>
            explorers
          </Plx>
          <Plx parallaxData={this.plxTrailHide}>rebels</Plx>
          <Plx parallaxData={this.plxPioneersHide}>pioneers</Plx>
          <Plx parallaxData={this.plxLeaders2Hide}>leaders</Plx>
        </Plx>
      </h2>
    );
  }
}

export default SplitHeadingLeaders;
