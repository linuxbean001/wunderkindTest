import React from "react";
import MainHeader from "./MainHeader";
import { graphql } from "gatsby";

import "./Header.scss";
import DemoHeader from "./DemoHeader";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: props.lang || "",
    };

    if (typeof window !== "undefined" && this.props.defaultSticky) {
      document.body.classList.add("sticky-menu");
    }

    this.moveBg = [
      {
        start: ".site-header",
        duration: "30vh",
        startOffset: "0vh",
        properties: [
          {
            startValue: -20,
            endValue: 20,
            unit: "%",
            property: "translateY",
          },
        ],
      },
    ];
  }

  activateSticky = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (document.body.classList.contains("mob-open")) {
      return;
    }
    if (winScroll > 200) {
      document.body.classList.add("sticky-menu");
    } else {
      document.body.classList.remove("sticky-menu");
    }
  };

  componentDidMount() {
    if (!this.props.defaultSticky) {
      window.addEventListener("scroll", this.activateSticky);
    }
  }

  componentWillUnmount() {
    if (!this.props.defaultSticky) {
      window.removeEventListener("scroll", this.activateSticky);
    }
  }

  render() {
    const { bgPattern, className, lang } = this.props;
    return (
      <section className={"main-header " + this.props.className || ""}>
        {!this.props.showDemoHeader && <MainHeader dark={true} lang={lang} />}
        {this.props.showDemoHeader && <DemoHeader dark={true} lang={lang} />}

        {bgPattern !== undefined && (
          <div className={`header-pattern`}>
            <div
              style={{
                backgroundImage: "url(" + bgPattern + ")",
              }}
              className="header-pattern-bg"
            ></div>
          </div>
        )}

        <div className={"section-mask-wrap invert " + className || ""}>
          <svg
            role="presentation"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1440 160.8"
            xmlSpace="preserve"
          >
            <g>
              <path d="M1440.3,35.6c-97.8,38.9-242.9,75-443.3,74.9c-71,0-149.1-4.6-234.7-15.2L-0.3,0v160.8h1440.7" />
            </g>
          </svg>
        </div>
      </section>
    );
  }
}

export default Header;

export const fragment = graphql`
  fragment HeaderPattern on WordPress_HPage_Hpagelayouts {
    __typename
    header {
      sourceUrl
    }
    footer {
      sourceUrl
    }
  }
`;
