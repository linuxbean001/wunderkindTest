import React from "react";
import "./_ImageText.scss";

import Image from "Components/Image/Image";

class ImageText extends React.Component {
  constructor(props) {
    super(props);
    this.imageSide = !!this.props.image.rightAlign;

    this.cmpClass = "img-text-wrap " + (this.props.dark ? "dark" : "");
    this.cmpClass += " " + (this.props.className ? this.props.className : "");
  }

  render() {
    if (!this.imageSide) {
      return (
        <div className={this.cmpClass}>
          <div className="container-fluid">
            <div className="row">
              <div className="col col-xl-6 mob-hide">
                <Image
                  className="main-image"
                  src={this.props.image.url}
                ></Image>
              </div>
              <div className="col-text-content">{this.props.children}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={this.cmpClass + " img-right"}>
          <div className="container-fluid">
            <div className="row justify-content-between justify-content-xl-end">
              <div className="order-2 order-xl-1 col-text-content">
                {this.props.children}
              </div>
              <div className="col order-1 order-xl-2 col-xl-6 mob-hide">
                <Image
                  className="main-image"
                  src={this.props.image.url}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ImageText;
