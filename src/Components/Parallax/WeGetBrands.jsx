import React from "react";
import Plx from "react-plx";
import { graphql } from "gatsby";

import "./scss/style.scss";
import "./scss/_WeGetBrands.scss";

import Divider from "Components/General/Divider/Divider";
import LogoScroller from "Components/General/LogoScroller/LogoScroller";

import SplitHeading from "./plx-elements/SplitHeading";
import WeGetBrandsSlider from "./plx-elements/WeGetBrandsSlider";

class WeGetBrands extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.state = {
      fadeOutText: [
        {
          start: ".plx-we-get-brands",
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
      ],
    };
  }

  componentDidMount() {
    let windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.setState({
        fadeOutText: [
          {
            start: ".plx-we-get-brands",
            duration: "50vh",
            startOffset: "120vh",
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
    }
  }

  render() {
    const pageData = this.props.wpdata;
    return (
      <>
        <Divider
          direction="top-left"
          className="home-wgb"
          maskColor="#191919"
          bgColor={false}
        />
        <section ref={this.ref} className="plx-we-get-brands">
          <div className="plx-heading plx-sticky-heading">
            <Plx
              animateWhenNotInViewport={true}
              parallaxData={this.state.fadeOutText}
              className="container"
            >
              <SplitHeading
                plxData={{
                  start_container: ".plx-we-get-brands",
                  start_offset: "60vh",
                }}
                text={{
                  left: "We get",
                  right: "brands",
                }}
              />
            </Plx>
            <LogoScroller
              parallaxData={{
                start_container: ".plx-we-get-brands",
                start_offset: "70vh",
              }}
              logos={pageData.logos}
            />
          </div>

          <div className="brands-wrapper">
            <WeGetBrandsSlider
              sliderData={pageData.slides}
              lang={this.props.lang}
            />
          </div>
        </section>
      </>
    );
  }
}

export default WeGetBrands;

export const fragment = graphql`
  fragment HomeBrands on WordPress_HPage_Hhomepagefields_BuildingArea_Brands {
    slides {
      title
      brandBackgroundImage {
        altText
        sourceUrl
      }
      cta1 {
        text
        url
      }
      cta2 {
        text
        url
      }
      rightSide {
        ... on WordPress_HPage_Hhomepagefields_BuildingArea_Brands_slides_RightSide_Testimonial {
          jobTitle
          avatar {
            altText
            sourceUrl
          }
          name
          quote
        }
        ... on WordPress_HPage_Hhomepagefields_BuildingArea_Brands_slides_RightSide_Stats {
          allStats {
            aboveLine
            underLine
          }
        }
      }
    }
  }
`;
