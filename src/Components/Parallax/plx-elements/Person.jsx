import React from "react";
import Plx from "react-plx";
import Image from "Components/Image/Image";

import "./../scss/style.scss";
class Person extends React.Component {
  render() {
    return (
      <>
        <Plx className={this.props.className} parallaxData={this.props.plxData}>
          <Image src={this.props.image} />
        </Plx>
      </>
    );
  }
}

export default Person;
