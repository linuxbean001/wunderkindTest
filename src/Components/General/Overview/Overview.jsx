import React from "react";

import Plx from "react-plx";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import "./_Overview.scss";
import Image from "Components/Image/Image";
import Button from "Components/Button/Button";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    const { content } = props;

    this.ref = React.createRef();
    this.dark = this.props.dark !== undefined && this.props.dark ? " dark" : "";
    this.bigTitle = "";

    this.state = {
      solutionsSubtitleParallax: [
        {
          start: content.subtitle.parallaxData,
          duration: "300vh",
          startOffset: "-50vh",
          properties: [
            {
              startValue: 0,
              endValue: -20,
              unit: "rem",
              property: "translateY",
            },
          ],
        },
        {
          start: content.subtitle.parallaxData,
          duration: "30vh",
          startOffset: "50vh",
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity",
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    let windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.setState({
        solutionsTitleParallax: [
          {
            start: this.ref.current,
            duration: "180vh",
            startOffset: "-80vh",
            easing: this.cubicEasing,
            properties: [
              {
                startValue: 220,
                endValue: 0,
                unit: "vw",
                property: "translateX",
              },
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ],
      });

      this.setState({
        moveImage: [
          {
            start: this.ref.current,
            duration: "400vh",
            startOffset: "-70vh",
            properties: [
              {
                startValue: 0,
                endValue: -47,
                unit: "rem",
                property: "translateY",
              },
            ],
          },
        ],
        moveParagraph: [
          {
            start: this.ref.current,
            duration: "480vh",
            startOffset: "-60vh",
            properties: [
              {
                startValue: 0,
                endValue: -50,
                unit: "rem",
                property: "translateY",
              },
            ],
          },
        ],
      });
    } else if (windowWidth >= 768 && windowWidth < 1025) {
      this.setState({
        solutionsTitleParallax: [
          {
            start: this.ref.current,
            duration: "230vh",
            startOffset: "-140vh",
            easing: this.cubicEasing,
            properties: [
              {
                startValue: 220,
                endValue: -10,
                unit: "vw",
                property: "translateX",
              },
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ],
      });

      this.setState({
        moveImage: [
          {
            start: this.ref.current,
            duration: "400vh",
            startOffset: "-70vh",
            properties: [
              {
                startValue: 0,
                endValue: -47,
                unit: "rem",
                property: "translateY",
              },
            ],
          },
        ],
        moveParagraph: [
          {
            start: this.ref.current,
            duration: "480vh",
            startOffset: "-60vh",
            properties: [
              {
                startValue: 0,
                endValue: -50,
                unit: "rem",
                property: "translateY",
              },
            ],
          },
        ],
      });
    } else {
      this.setState({
        solutionsTitleParallax: [
          {
            start: this.ref.current,
            duration: "300vh",
            startOffset: "-180vh",
            easing: this.cubicEasing,
            properties: [
              {
                startValue: 220,
                endValue: -10,
                unit: "vw",
                property: "translateX",
              },
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ],
      });

      this.setState({
        moveImage: [
          {
            start: this.ref.current,
            duration: "400vh",
            startOffset: "-30vh",
            properties: [
              {
                startValue: 0,
                endValue: -57,
                unit: "rem",
                property: "translateY",
              },
            ],
          },
        ],
        moveParagraph: [
          {
            start: this.ref.current,
            duration: "480vh",
            startOffset: "-20vh",
            properties: [
              {
                startValue: 0,
                endValue: -60,
                unit: "rem",
                property: "translateY",
              },
            ],
          },
        ],
      });
    }
  }

  render() {
    let bigTitle = "";
    let subtitle = "";

    const { content } = this.props;

    if (
      (content.title || content.subtitle) &&
      (content.title || content.subtitle).parallaxData
    ) {
      bigTitle = (
        <Parallax x={[40, -20]}>
          <h3 className="big-title">{content.title.value}</h3>
        </Parallax>
      );

      subtitle = (
        <h4 dangerouslySetInnerHTML={{ __html: content.subtitle.value }}></h4>
      );
    } else {
      bigTitle = <h2 className="big-title">{content.title}</h2>;
      subtitle = content.subtitle && (
        <h4 dangerouslySetInnerHTML={{ __html: content.subtitle }}></h4>
      );
    }

    return (
      <ParallaxProvider>
        <section
          ref={this.ref}
          className={
            "overview " +
            (this.props.className !== undefined ? this.props.className : "") +
            " " +
            this.dark
          }
        >
          <div className="big-title-wrap">
            <div className="container">{bigTitle}</div>
          </div>
          <div className="container">
            <div className={`row ${this.props.centered ? 'justify-content-center' : 'justify-content-end'} overview-row`}>
              {content.image && (
                <div className="col-md-6 order-2 order-md-1">
                  <Plx
                    parallaxData={this.state.moveImage}
                    className={
                      "img-wrap" +
                      (content.flipImage !== undefined ? " img-flip" : "")
                    }
                  >
                    <Image src={content.image}></Image>
                  </Plx>
                </div>
              )}
              <Plx
                parallaxData={this.state.moveParagraph}
                className="col-md-6 col-lg-6 order-1 order-md-2"
              >
                <div className="info">
                  {subtitle}
                  {content.htmlContent?
                      <div className={"body-html-content"}
                           dangerouslySetInnerHTML={{ __html: content.htmlContent }}
                      ></div> :
                      <p
                          dangerouslySetInnerHTML={{ __html: content.text }}
                          className={`${
                              content.button && content.button.link ? "" : "no-button"
                          }`}
                      ></p>
                  }
                  {content.button && content.button.link && (
                    <div className="btn-wrap">
                      <Button
                        href={content.button.link}
                        className={
                          "btn-fill-dark" +
                          (this.props.className
                            ? " " + this.props.className
                            : "")
                        }
                        lang={this.props.lang}
                      >
                        {content.button.label}
                      </Button>
                    </div>
                  )}
                </div>
              </Plx>
            </div>
          </div>
        </section>
        {this.props.children}
      </ParallaxProvider>
    );
  }
}

export default Overview;
