import React from "react";
import Plx from "react-plx";

import "./scss/style.scss";
import "./scss/_FeaturedResources.scss";

import Button from "./../Button/Button";

import Card from "Components/General/Card/Card";
import ResourcesSlider from "./plx-elements/ResourcesSlider";
import { graphql } from "gatsby";
import { getResourceUrlPath } from "../../utils/common";

const cardTypes = [
  {
    type: "case-study",
    color: "#F5EBE1",
    dark: false,
  },
  {
    type: "research-study",
    color: "#3D55CC",
    dark: true,
  },
  {
    type: "webinar",
    color: "#FBFCFD",
    dark: false,
  },
  {
    type: "podcast",
    color: "#FBFCFD",
    dark: false,
  },
  {
    type: "c-suite-series",
    color: "#FFBB00",
    dark: false,
  },
  {
    type: "guide",
    color: "#303D78",
    dark: true,
  },
  {
    type: "podcast",
    color: "#303D78",
    dark: true,
  },
];

class FeaturedResources extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.state = {
      plxData: [
        {
          start: ".plx-come-check-us",
          duration: "250vh",
          startOffset: "-50vh",
          properties: [
            {
              startValue: -1,
              endValue: -28,
              unit: "rem",
              property: "marginTop",
            },
          ],
        },
      ],
    };
  }

  loadInView = () => {
    let elementPosition = this.ref.current.getBoundingClientRect();
    if (window.innerHeight - window.innerHeight / 8 > elementPosition.top) {
      this.ref.current.classList.add("loaded");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.loadInView);

    let windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.setState({
        plxData: [
          {
            start: ".plx-come-check-us",
            duration: "200vh",
            startOffset: "100vh",
            properties: [
              {
                startValue: -1,
                endValue: -28,
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
            start: ".plx-come-check-us",
            duration: "200vh",
            startOffset: "100vh",
            properties: [
              {
                startValue: -1,
                endValue: -32,
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
            start: ".plx-featured-resources",
            duration: "200vh",
            startOffset: "20vh",
            properties: [
              {
                startValue: -1,
                endValue: -35,
                unit: "rem",
                property: "marginTop",
              },
            ],
          },
        ],
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadInView);
  }

  sanitize(data, lang) {
    const { hResourcesData, hResourceTypes, slug } = data;
    const type =
      hResourceTypes && hResourceTypes.nodes && hResourceTypes.nodes[0];
    const { logo, cardBackground, cardTitle, marketoFormIdUk } = hResourcesData;
    const href = getResourceUrlPath(slug, type.slug);
    return {
      cardTitle,
      href,
      cardBackground,
      typeName: type.name,
      logo,
      marketoFormIdUk,
      ...cardTypes.find(e => e.type === type.slug),
    };
  }

  checkMarketoID(lang, resource) {
    let returnR = true;
    if (lang === "uk" && !resource.hResourcesData.marketoFormIdUk) {
      returnR = false;
    }
    if (lang === "us" && !resource.hResourcesData.marketoFormId) {
      returnR = false;
    }
    return returnR;
  }

  render() {
    const self = this;
    const langR = self.props.lang || "us";
    let resources = this.props.resources || [];
    resources = resources.filter(resource =>
      self.checkMarketoID(langR, resource)
    );
    const cards = resources.map(e => {
      const lang = self.props.lang || "us";
      const data = self.sanitize(e, lang);
      return (
        <div className="card-list-wrapper" key={e.id}>
          <div className="card-box">
            <Card lang={lang} {...data} />
          </div>
        </div>
      );
    });

    return (
      <Plx
        animateWhenNotInViewport={true}
        parallaxData={this.state.plxData}
        className="plx-featured-resources"
      >
        <div ref={this.ref} className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col">
              {this.props.title && (
                <h2 className="section-title">{this.props.title}</h2>
              )}

              <ResourcesSlider lang={this.props.lang}>{cards}</ResourcesSlider>

              <div className="btn-wrap">
                <Button
                  href="/resources/"
                  className="btn-fill-dark"
                  lang={this.props.lang}
                >
                  View all resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Plx>
    );
  }
}

export default FeaturedResources;

export const fragment = graphql`
  fragment HomeResrouces on WordPress_HPage_Hhomepagefields_BuildingArea_Resources {
    resources {
      ... on WordPress_HResrource {
        id
        slug
        hResourcesData {
          sectionTitle
          featuredSentence
          logo {
            sourceUrl
            altText
          }
          cardBackground {
            altText
            sourceUrl
          }
          cardTitle
          marketoFormId
          marketoFormIdUk
        }
        hResourceTypes {
          nodes {
            name
            slug
          }
        }
        title
        modified
      }
    }
  }
`;
