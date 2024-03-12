import React from "react";
import "./_DividerGetADemo.scss";

class Divider extends React.Component {
  constructor(props) {
    super(props);
    this.direction =
      this.props.direction !== undefined ? " " + this.props.direction : "";
    this.additionalClass =
      this.props.additionalClass !== undefined
        ? " " + this.props.additionalClass
        : "";
    this.bgColor =
      this.props.bgColor !== undefined ? this.props.bgColor : "#F5EBE1";
    this.maskColor =
      this.props.maskColor !== undefined ? this.props.maskColor : "#191919";
    this.bgColorStyle = this.bgColor ? { backgroundColor: this.bgColor } : {};

    this.mask =
      this.props.invert !== undefined && this.props.invert ? (
        <div
          className={
            "section-mask-wrap-divider-get-a-demo invert" +
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
            viewBox="0 0 1440 428" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M1586.95 307.975L746.271 57.2417C430.595 -36.9116 161.502 -13.1753 -61.0098 128.407V427.21L1586.95 427.21V307.975Z" 
              fill={this.maskColor}
            />
          </svg>
        </div>
      ) : (
        <div
          style={this.bgColorStyle}
          className={
            "section-mask-wrap-divider-get-a-demo" +
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
            viewBox="0 0 1440 428" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M1586.95 307.975L746.271 57.2417C430.595 -36.9116 161.502 -13.1753 -61.0098 128.407V427.21L1586.95 427.21V307.975Z" 
              fill={this.maskColor}
            />
          </svg>
        </div>
      );
  }

  render() {
    return this.mask;
  }
}

export default Divider;
