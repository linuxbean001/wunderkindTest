import React from "react";

import { Parallax } from "react-scroll-parallax";

import "./_RequestDemo.scss";

import Image from "Components/Image/Image";
import Button from "Components/Button/Button";
import Divider from "Components/General/Divider/Divider";

class RequestDemo extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.bgColor =
      this.props.bgColor !== undefined ? this.props.bgColor : "#ffbb00";
    this.maskColor =
      this.props.maskColor !== undefined ? this.props.maskColor : "#191919";
    this.className =
      this.props.className !== undefined ? " " + this.props.className : "";
    this.sectionClass = "plx-request-demo" + this.className;
    this.sectionClass += this.props.dark ? " dark" : "";
    this.btnClass = !this.props.dark ? "btn-dark" : "btn-fill";

    if(!this.props.removeDivider) {
      this.divider =
        this.props.maskInvert !== undefined ? (
          <Divider
            className={"invert-mask-" + this.className}
            invert={true}
            maskColor={this.bgColor}
          />
        ) : (
          <Divider maskColor={this.maskColor} bgColor={false} />
        );
    }
  }

  render() {
    // Don't render empty component
    if (!this.props.content.title) {
      return <></>;
    }

    let container = (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-sm-9">
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: this.props.content.title }}
            ></div>
            {this.props.content.subtitle && <div
              className="subtitle"
              dangerouslySetInnerHTML={{__html: this.props.content.subtitle}}
            ></div>}
            <div className="btn-wrap">
              <Button
                href={this.props.content.button.link}
                className={this.props.content.button.className || this.btnClass}
                lang={this.props.lang}
              >
                {this.props.content.button.label}
              </Button>
            </div>
          </div>
          <div className="col-xl-6 illu-img">
            {this.props.content.image && (
              <Image src={this.props.content.image}></Image>
            )}
          </div>
        </div>
      </div>
    );

    container = this.props.hasParallax ? (
      <Parallax y={[-20, 80]}> {container} </Parallax>
    ) : (
      container
    );

    return (
      <>
        {this.props.maskInvert !== undefined && this.divider}
        <section
          ref={this.ref}
          className={`${this.sectionClass} ${
            this.props.disableParallax ? "rq-no-parallax" : ""
          }`}
          style={{
            backgroundColor: this.bgColor,
          }}
        >
          {this.props.maskInvert === undefined && this.divider}
          <div className="rq-demo-wrap">
            <div className="rq-demo">{container}</div>
          </div>
        </section>
      </>
    );
  }
}

export default RequestDemo;
