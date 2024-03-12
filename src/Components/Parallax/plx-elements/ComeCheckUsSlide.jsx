import React from "react";
import Plx from "react-plx";

import Image from "Components/Image/Image";
import Button from "Components/Button/Button";

class ComeCheckUsSlide extends React.Component {
  render() {
    let moveSection = [
      {
        start: ".plx-featured-resources",
        duration: "120vh",
        startOffset: "-40vh",
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

    return (
      <div data-bg-color={this.props.color} className="swiper-slide">
        <svg
          version="1.1"
          className="ccu-mask top"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 2000 470"
        >
          <g>
            <path
              fill="#26B89D"
              d="M0,128c0,0,264,150,622,150C1274,278,2002,0,2002,0v470H0L0,128z"
            />
          </g>
        </svg>

        <div className="swiper-slide-wrap">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10">
                <Plx parallaxData={moveSection} className="slide">
                  <div data-swiper-parallax="-200">
                    <div className="date">22-25 March 2020</div>
                    <div className="location">Mandalay Bay, Las Vegas</div>
                  </div>
                  <div data-swiper-parallax="-300" className="title">
                    Come and check us
                    <br /> out at ShopTalk
                  </div>
                  <div data-swiper-parallax="-400" className="btn-wrap">
                    <Button className="btn-fill-dark" lang={this.props.lang}>
                      Get tickets
                    </Button>
                  </div>
                </Plx>
              </div>
            </div>
          </div>
          <Image
            className="ccu-mask-bottom"
            src="/images/hero-wave-mask-pattern.svg"
          ></Image>
        </div>
      </div>
    );
  }
}

export default ComeCheckUsSlide;
