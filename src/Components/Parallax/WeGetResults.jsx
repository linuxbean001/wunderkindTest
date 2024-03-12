import React from "react";
import Plx from "react-plx";

import Button from "./../Button/Button";
import PercentCounter from "./plx-elements/PercentCounter";
import SplitHeading from "./plx-elements/SplitHeading";
import Divider from "Components/General/Divider/Divider";

import "./scss/style.scss";
import "./scss/_WeGetResults.scss";

class WeGetResults extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.start_container = ".plx-we-get-results";

    this.fadeOutText = [
      {
        start: this.start_container,
        duration: "50vh",
        startOffset: "150vh",
        properties: [
          {
            startValue: 1,
            endValue: 0.1,
            property: "opacity",
          },
        ],
      },
    ];

    this.sectionMoveFaster = [
      {
        start: this.start_container,
        duration: "500vh",
        startOffset: "200vh",
        properties: [
          {
            startValue: 0,
            endValue: -100,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
      {
        start: this.start_container,
        duration: "25vh",
        startOffset: "200vh",
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: "opacity",
          },
        ],
      },
    ];

    this.sectionOptInMovePercent = [
      {
        start: this.start_container,
        duration: "700vh",
        startOffset: "150vh",
        properties: [
          {
            startValue: 0,
            endValue: 40,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
    ];

    this.fadeLine = (startOffset, endValue) => {
      return [
        {
          start: this.start_container,
          duration: "20vh",
          startOffset: startOffset,
          properties: [
            {
              startValue: 0,
              endValue: endValue,
              unit: "%",
              property: "width",
            },
            {
              startValue: 0,
              endValue: 1,
              property: "opacity",
            },
          ],
        },
      ];
    };
    this.fadePercentLabel = startOffset => {
      return [
        {
          start: this.start_container,
          duration: "20vh",
          startOffset: startOffset,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity",
            },
          ],
        },
      ];
    };
  }

  render() {
    const pageData = this.props.wpdata;

    return (
      <>
        <Divider direction="top-right" maskColor="#3d55cc" bgColor="#f5ebe1" />
        <section ref={this.ref} className="plx-we-get-results">
          <div className="wgr-wrap">
            <Plx
              parallaxData={this.fadeOutText}
              className="plx-heading plx-sticky-heading"
            >
              <SplitHeading
                plxData={{
                  start_container: this.start_container,
                  start_offset: "70vh",
                }}
                text={{
                  left: "We get",
                  right: "results",
                }}
              />
            </Plx>
          </div>
          <Plx className="wgr-revenue">
            <PercentCounter className="percent">10</PercentCounter>
            <Plx
              parallaxData={this.fadeLine("170vh", 30)}
              className="line"
            ></Plx>
            <Plx parallaxData={this.fadePercentLabel("180vh")} className="text">
              of digital revenue
            </Plx>
          </Plx>
          <Plx
            className="wgr-opt-ins"
            parallaxData={this.sectionOptInMovePercent}
          >
            <div className="container">
              <div className="row align-items-end justify-content-center">
                <div className="col-md-6">
                  <Plx
                    className="small-content"
                    parallaxData={this.sectionMoveFaster}
                  >
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{ __html: pageData.bodyCopy }}
                    ></div>
                    {pageData.cta && pageData.cta.buttonText && (
                      <Button
                        className="btn-fill"
                        href={pageData.cta.buttonUrl}
                        lang={this.props.lang}
                      >
                        {pageData.cta.buttonText}
                      </Button>
                    )}
                  </Plx>
                </div>
                <div className="col-md-4 offset-md-2 offset-xl-1">
                  <Plx className="small-percents">
                    <PercentCounter sign="x" className="percent">
                      6
                    </PercentCounter>
                    <Plx
                      parallaxData={this.fadeLine("200vh", 100)}
                      className="line"
                    ></Plx>
                    <Plx
                      parallaxData={this.fadePercentLabel("210vh")}
                      className="text"
                    >
                      more opt-ins
                    </Plx>
                  </Plx>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 offset-md-3">
                  <Plx className="small-percents wgr-growth">
                    <PercentCounter sign="x" className="percent">
                      5
                    </PercentCounter>
                    <Plx
                      parallaxData={this.fadeLine("250vh", 100)}
                      className="line"
                    ></Plx>
                    <Plx
                      parallaxData={this.fadePercentLabel("260vh")}
                      className="text"
                    >
                      growth in abandonment revenue
                    </Plx>
                  </Plx>
                </div>
              </div>
            </div>
          </Plx>
        </section>
      </>
    );
  }
}

export default WeGetResults;
