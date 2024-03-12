import React from "react";

import Plx from "react-plx";

import Person from "./plx-elements/Person";
import SplitHeading from "./plx-elements/SplitHeading";

import "./scss/style.scss";
import "./scss/_WeGetPeople.scss";

class WeGetPeople extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.startingContainer = ".plx-we-get-ppl";

    this.fadeIn = {
      startValue: 0,
      endValue: 1,
      property: "opacity",
    };

    this.sectionMove = [
      {
        start: this.startingContainer,
        duration: "600vh",
        startOffset: "0vh",
        properties: [
          {
            startValue: 0,
            endValue: -60,
            unit: "%",
            property: "translateY",
          },
        ],
      },
    ];

    this.movePersonDuration = "650vh";
    this.movePerson = [
      {
        start: this.startingContainer,
        duration: this.movePersonDuration,
        startOffset: "140vh",
        properties: [
          {
            startValue: 0,
            endValue: -50,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
      {
        start: this.startingContainer,
        duration: this.movePersonDuration,
        startOffset: "160vh",
        properties: [
          {
            startValue: 0,
            endValue: -65,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
      {
        start: this.startingContainer,
        duration: this.movePersonDuration,
        startOffset: "120vh",
        properties: [
          {
            startValue: 0,
            endValue: -55,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
    ];

    this.wgpPersonDuration = "10vh";
    this.wgpPerson = [
      [
        {
          image: this.props.image1
            ? this.props.image1.sourceUrl
            : "/images/people/person-04.svg",
          start: this.startingContainer,
          duration: this.wgpPersonDuration,
          easing: "easeInOut",
          startOffset: "110vh",
          properties: [this.fadeIn],
        },
      ],
      [
        {
          image: this.props.image2
            ? this.props.image2.sourceUrl
            : "/images/people/person-03.svg",
          start: this.startingContainer,
          duration: this.wgpPersonDuration,
          easing: "easeInOut",
          startOffset: "100vh",
          properties: [this.fadeIn],
        },
      ],
      [
        {
          image: this.props.image3
            ? this.props.image3.sourceUrl
            : "/images/people/person-05.svg",
          start: this.startingContainer,
          duration: this.wgpPersonDuration,
          easing: "easeInOut",
          startOffset: "125vh",
          properties: [this.fadeIn],
        },
      ],
      [
        {
          image: this.props.image4
            ? this.props.image4.sourceUrl
            : "/images/people/person-02.svg",
          start: this.startingContainer,
          duration: this.wgpPersonDuration,
          easing: "easeInOut",
          startOffset: "135vh",
          properties: [this.fadeIn],
        },
      ],
      [
        {
          image: this.props.image5
            ? this.props.image5.sourceUrl
            : "/images/people/person-01.svg",
          start: this.startingContainer,
          duration: this.wgpPersonDuration,
          easing: "easeInOut",
          startOffset: "135vh",
          properties: [this.fadeIn],
        },
      ],
    ];
  }

  render() {
    return (
      <>
        <div className="we-get-ppl-mask section-mask-wrap">
          <button id="hero-scroll-down">
            <span></span>
            <span className="sr-only">Scroll down</span>
          </button>

          <svg
            className="desktop-show"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 2000 334.2"
          >
            <g>
              <path
                fill="#191919"
                d="M1999.9,49.4c-135.7,54-337.2,104.1-615.3,104c-98.6,0-207-6.4-325.9-21.1L0,0v334.2h2000"
              />
            </g>
          </svg>
        </div>

        <section ref={this.ref} className="plx-we-get-ppl">
          <div className="container">
            <div className="row">
              <div className="plx-heading plx-sticky-heading">
                <SplitHeading
                  plxData={{
                    start_container: this.startingContainer,
                  }}
                  text={{
                    left: "We get",
                    right: "people",
                  }}
                />

                <Plx parallaxData={this.sectionMove} className="people">
                  {this.wgpPerson &&
                    this.wgpPerson.map((personData, index) => {
                      return (
                        <Person
                          plxData={personData}
                          key={index}
                          className={"person person-" + (index + 1)}
                          image={personData[0].image}
                        ></Person>
                      );
                    })}
                </Plx>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default WeGetPeople;
