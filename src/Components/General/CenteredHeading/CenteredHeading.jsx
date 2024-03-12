import React from "react";
import "./_CenteredHeading.scss";
import Image from "Components/Image/Image";

class CenteredHeading extends React.Component {
  render() {
    return (
      <div className="section-centered-heading">
        <div className="wrapper">
          {this.props.headingTitleDesktop !== undefined && (
            <h1
              className="h-desktop"
              dangerouslySetInnerHTML={{
                __html: this.props.headingTitleDesktop,
              }}
            ></h1>
          )}
          {this.props.headingTitleMobile !== undefined && (
            <h1
              className="h-mobile"
              dangerouslySetInnerHTML={{
                __html: this.props.headingTitleMobile,
              }}
            ></h1>
          )}
          {this.props.headingImg !== undefined && (
            <Image src={this.props.headingImg}></Image>
          )}
        </div>
      </div>
    );
  }
}

export default CenteredHeading;
