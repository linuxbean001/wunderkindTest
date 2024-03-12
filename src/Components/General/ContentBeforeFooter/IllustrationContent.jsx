import React from "react";

import "./_ContentBeforeFooter.scss";

import Image from "Components/Image/Image";
import Button from "Components/Button/Button";

class IllustrationContent extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.bgColor = this.props.bgColor || "#F5EBE1";
    this.sectionColor = this.props.sectionColor || "#ffbb00";
    this.sectionClass = "general-illu-content";
    this.sectionClass += this.props.dark ? " dark" : "";
    this.btnClass = this.props.dark ? "btn-fill" : "btn-dark";
    this.text = this.props.text || "Unleashing messaging to go here and here.";
    if (this.props.image) {
      if (this.props.image.sourceUrl) {
        this.image = this.props.image.sourceUrl;
      } else {
        this.image = this.props.image;
      }
    } else {
      this.image = "/images/illustrations/illo-1.svg";
    }
  }

  render() {
    let { ctaGroup } = this.props;

    // Don't render the section if no content in it!
    if (!this.image && !this.text) {
      return <></>;
    }

    return (
      <section
        ref={this.ref}
        className={
          this.sectionClass +
          (this.props.className ? " " + this.props.className : "")
        }
        style={{ backgroundColor: this.sectionColor }}
      >
        <div style={{ backgroundColor: this.bgColor }} className="full-color">
          <div className="container">
            <div className="row justify-content-center">
              {this.image && (
                <div className="col-lg-5 col-md-5 col-illu">
                  <Image src={this.image}></Image>
                </div>
              )}

              <div className="col-lg-6 offset-lg-1 col-md-7">
                <div className="info">
                  <div
                    className="title"
                    dangerouslySetInnerHTML={{ __html: this.text }}
                  ></div>
                  {/* {ctaGroup && ctaGroup.text && ( */}
                    <div className="btn-wrap">
                      <a
                        href="https://www.wunderkind.co/open-roles"
                        target="_blank"
                        rel="nofollow noopener"
                      >
                      <Button
                        className={this.btnClass}
                        lang={this.props.lang}
                      >
                        {ctaGroup.text}
                      </Button>
                      </a>
                    </div>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IllustrationContent;
