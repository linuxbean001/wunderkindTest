import React from "react";
import "./_Divider.scss";

class Divider extends React.Component {
  constructor(props) {
    super(props);
    this.direction =
      this.props.direction !== undefined ? " " + this.props.direction : "";
    this.additionalClass =
      this.props.additionalClass !== undefined
        ? "" + this.props.additionalClass
        : "divider-styles";
    this.bgColor =
      this.props.bgColor !== undefined ? this.props.bgColor : "#F5EBE1";
    this.maskColor =
      this.props.maskColor !== undefined ? this.props.maskColor : "#191919";
    this.bgColorStyle = this.bgColor ? { backgroundColor: this.bgColor } : {};

    this.mask =
      this.props.invert !== undefined && this.props.invert ? (
        <div
          className={
            "section-mask-wrap invert" +
            (this.props.className !== undefined
              ? " " + this.props.className
              : "") +
            " " +
            this.additionalClass +
            " " +
            this.direction
          }
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 382.9"
          >
            <path
              fill={this.maskColor}
              d="M0,152.1v230.8h1920V0L940.5,212.4C572.8,292.3,259.2,272.1,0,152.1z"
            />
          </svg>
        </div>
      ) : (
        <div
          style={this.bgColorStyle}
          className={
            "section-mask-wrap" +
            (this.props.className !== undefined
              ? " " + this.props.className
              : "") +
            " " +
            this.additionalClass +
            " " +
            this.direction
          }
        >
          <svg
            role="presentation"
            className="divider"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 263.9"
          >
            <g id="divider" transform="translate(0 -73)">
              <path
                style={{ fill: this.maskColor }}
                fill={this.maskColor}
                d="M1920,76.7L940.5,289.1C572.8,368.9,259.2,348.9,0,228.9V73h1920V76.7z"
              />
            </g>
          </svg>
        </div>
      );
  }

  render() {
    return this.mask;
  }
}

export default Divider;
