import React from "react";
import "./../ImageText/_ImageText.scss";
import "./_ImageTextQuote.scss";

import Image from "Components/Image/Image";

class ImageText extends React.Component {
  constructor(props) {
    super(props);
    this.imageSide = !!this.props.image.rightAlign;

    this.cmpClass = "img-text-wrap " + (this.props.dark ? "dark" : "");
    this.cmpClass += " " + (this.props.className ? this.props.className : "");
  }

  render() {
    return (
      <div className={this.cmpClass}>
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <Image
                className="main-image"
                src={this.props.image.url}
              ></Image>
            </div>
            <div className="col-xl-7 text-content">
              <div className="text-content-wrap">
                <h3>{this.props.children}"</h3>
                <p>{this.props.testimonialFrom}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageText;
