import React from "react";
import Plx from "react-plx";

import "./scss/style.scss";
import "./scss/_WeGetLeaders.scss";

import Divider from "./../General/Divider/Divider";
import Image from "./../Image/Image";
import Button from "./../Button/Button";

import SplitHeadingLeaders from "./plx-elements/SplitHeadingLeaders";

class WeGetLeaders extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.startContainer = ".plx-we-get-leaders";
    this.hide = {
      startValue: 1,
      endValue: 0,
      property: "opacity",
    };

    this.show = {
      startValue: 0,
      endValue: 1,
      property: "opacity",
    };

    this.duration = "1vh";

    this.plxExpHide = [
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "75vh",
        properties: [this.hide],
      },
    ];
    this.plxTrailHide = [
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "75vh",
        properties: [this.show],
      },
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "100vh",
        properties: [this.hide],
      },
    ];
    this.plxLeadersHide = [
      {
        start: this.startContainer,
        duration: this.duration,
        startOffset: "100vh",
        properties: [this.show],
      },
    ];

    this.state = {
      fadeOut: [
        {
          start: this.startContainer,
          duration: "50vh",
          startOffset: "230vh",
          properties: [
            {
              startValue: 1,
              endValue: 0.1,
              property: "opacity",
            },
          ],
        },
      ],
      plxData: [
        {
          start: this.startContainer,
          duration: "250vh",
          startOffset: "-10vh",
          properties: [
            {
              startValue: 0,
              endValue: -50,
              unit: "vh",
              property: "marginTop",
            },
          ],
        },
      ],
    };

    this.plxTextMove1 = [
      {
        start: "#plx-1",
        duration: "200vh",
        startOffset: "-20vh",
        properties: [
          {
            startValue: 0,
            endValue: 30,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
    ];

    this.plxImageMove1 = [
      {
        start: "#plx-1",
        duration: "200vh",
        startOffset: "-80vh",
        properties: [
          {
            startValue: 0,
            endValue: -40,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
    ];

    this.plxImageMove5 = [
      {
        start: "#plx-1",
        duration: "200vh",
        startOffset: "0vh",
        properties: [
          {
            startValue: 0,
            endValue: 60,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
    ];

    this.plxMove1 = [
      {
        start: "#plx-1",
        duration: "200vh",
        startOffset: "-80vh",
        properties: [
          {
            startValue: 0,
            endValue: -50,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
    ];

    this.plxMove2 = [
      {
        start: "#plx-2",
        duration: "200vh",
        startOffset: "-50vh",
        properties: [
          {
            startValue: 0,
            endValue: -50,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
    ];

    this.plxMoveFullSection = [
      {
        start: ".plx-come-check-us",
        duration: "150vh",
        startOffset: "25vh",
        properties: [
          {
            startValue: 0,
            endValue: 10,
            unit: "%",
            property: "translateY",
          },
        ],
      },
    ];
  }

  componentDidMount() {
    let windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.setState({
        fadeOut: [
          {
            start: this.startContainer,
            duration: "50vh",
            startOffset: "280vh",
            properties: [
              {
                startValue: 1,
                endValue: 0.1,
                property: "opacity",
              },
            ],
          },
        ],
      });
      this.setState({
        plxData: [
          {
            start: ".plx-we-get-leaders",
            duration: "300vh",
            startOffset: "-60vh",
            properties: [
              {
                startValue: 0,
                endValue: -30,
                unit: "rem",
                property: "marginTop",
              },
            ],
          },
        ],
      });
    } else if (windowWidth > 767 && windowWidth < 1025) {
      this.setState({
        plxData: [
          {
            start: ".plx-we-get-leaders",
            duration: "300vh",
            startOffset: "-60vh",
            properties: [
              {
                startValue: 0,
                endValue: -50,
                unit: "rem",
                property: "marginTop",
              },
            ],
          },
        ],
      });
    } else {
      this.setState({
        plxData: [
          {
            start: ".plx-we-get-leaders",
            duration: "300vh",
            startOffset: "-60vh",
            properties: [
              {
                startValue: 0,
                endValue: -70,
                unit: "rem",
                property: "marginTop",
              },
            ],
          },
        ],
      });
    }
  }

  render() {
    const { firstContentSection, secondContentSection } = this.props;
    return (
      <Plx
        parallaxData={this.plxMoveFullSection}
        ref={this.ref}
        className="plx-we-get-leaders"
      >
        <Divider className="top-left" maskColor="#191919" bgColor={null} />

        <Plx
          parallaxData={this.state.fadeOut}
          className="plx-heading plx-sticky-heading"
        >
          <SplitHeadingLeaders
            plxData={{
              start_container: ".plx-we-get-leaders",
              start_offset: "60vh",
            }}
          />
        </Plx>
        <div className="wgl-content">
          <div className="container">
            <div className="row justify-content-end align-items-end">
              <Plx parallaxData={this.plxImageMove1} className="col-6 col-lg-4">
                <Image
                  src={
                    firstContentSection.image1
                      ? firstContentSection.image1.sourceUrl
                      : "/images/wgl-2_new.jpg"
                  }
                ></Image>
              </Plx>
              <div className="col-6 col-lg-4 offset-lg-1">
                <Image
                  className="img-1"
                  src={
                    firstContentSection.image2
                      ? firstContentSection.image2.sourceUrl
                      : "/images/wgl-1_new.png"
                  }
                ></Image>
              </div>
            </div>
            <div id="plx-1" className="wgl-row row justify-content-between">
              <Plx
                parallaxData={this.plxTextMove1}
                className="col-10 col-md-6 col-lg-4 text-content"
              >
                <div className="title">{firstContentSection.title}</div>
                <div className="text">{firstContentSection.content}</div>
                <div className="btn-wrap">
                  {firstContentSection.ctaGroup.url && (
                    <Button
                      href={firstContentSection.ctaGroup.url}
                      className="btn-fill-dark"
                      lang={this.props.lang}
                    >
                      {firstContentSection.ctaGroup.text}
                    </Button>
                  )}
                </div>
              </Plx>
              <div className="col-4 col-md-2 col-lg-3">
                <Plx className="img-2" parallaxData={this.plxMove1}>
                  <Image
                    src={
                      firstContentSection.image3
                        ? firstContentSection.image3.sourceUrl
                        : "/images/wgl-4_new.jpg"
                    }
                  ></Image>
                </Plx>
              </div>
              <div className="col-8 col-md-4 col-lg-5">
                <Image
                  className="img-3"
                  src={
                    firstContentSection.image4
                      ? firstContentSection.image4.sourceUrl
                      : "/images/wgl-5_new.jpg"
                  }
                ></Image>
              </div>
            </div>
            <div id="plx-2" className="wgl-row row align-items-end">
              <div className="col-md-6 col-lg-5 offset-lg-1 order-2 order-md-1">
                <Image
                  src={
                    secondContentSection.image5
                      ? secondContentSection.image5.sourceUrl
                      : "/images/wgl-3_new.jpg"
                  }
                ></Image>
              </div>
              <Plx
                parallaxData={this.plxMove2}
                className="col-9 col-md-6 offset-md-0 offset-2 col-lg-4 offset-lg-2 wpl-col-2 order-1 order-md-2"
              >
                <div className="title">{secondContentSection.title}</div>
                <div className="text">{secondContentSection.content}</div>
                <div className="btn-wrap">
                  {secondContentSection.ctaGroup.url && (
                    <Button
                      href={secondContentSection.ctaGroup.url}
                      className="btn-fill-dark"
                      lang={this.props.lang}
                    >
                      {secondContentSection.ctaGroup.text}
                    </Button>
                  )}
                </div>
              </Plx>
            </div>
          </div>
        </div>
      </Plx>
    );
  }
}

export default WeGetLeaders;
