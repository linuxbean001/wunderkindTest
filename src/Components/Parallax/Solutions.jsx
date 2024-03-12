import React from "react";

import { graphql } from "gatsby";

import Divider from "Components/General/Divider/Divider";
import Image from "Components/Image/Image";
import Arrow from "Components/Arrow/Arrow";

import "./scss/style.scss";
import "./scss/_Solutions.scss";
import SolutionsSlider from "./SolutionsSlider";

class Solutions extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.infoBoxRef = React.createRef();
    this.tabsRef = [];
    this.tabItemsRef = [];
    this.state = {
      loaded: false,
      windowWidth: typeof window !== `undefined` ? window.innerWidth : 0,
      activeTab: 0,
      fadeOut: false,
    };
    this.sectionMoveBigTitle = [
      {
        start: ".plx-solutions",
        duration: "600vh",
        startOffset: "40vh",
        properties: [
          {
            startValue: 0,
            endValue: 150,
            unit: "vh",
            property: "translateY",
          },
        ],
      },
    ];
  }

  loadInView = () => {
    let elementPosition = document
      .getElementById("sl-info-tab-0")
      .getBoundingClientRect();
    if (!this.state.loaded) {
      if (window.innerHeight - window.innerHeight / 4 > elementPosition.top) {
        this.setState({
          loaded: true,
        });
      }
    }
  };

  adjustActiveLineWidth = () => {
    if (!this.ref.current) {
      return;
    }
    let active_tab = this.ref.current.querySelector(".sl-info-tabs .active");

    this.setActiveLineWidthAndOffset(active_tab);
  };

  setActiveLineWidthAndOffset = active_tab => {
    let active_tab_rect = active_tab.getBoundingClientRect();
    let active_line = this.ref.current.querySelector(
      ".sl-info-tabs .active-line"
    );

    active_line.style.width = active_tab_rect.width + "px";
    active_line.style.left = active_tab.offsetLeft + "px";
  };

  adjustHeight = () => {
    let slInfoTabs = document.querySelectorAll(".sl-info-tab");
    let highestHeights = [];
    slInfoTabs.forEach((item, index) => {
      let tabElements = item.querySelectorAll(".equal-height");
      let maxHeight = 0;
      tabElements.forEach(element => {
        element.style.height = "auto";
        maxHeight =
          maxHeight < element.offsetHeight ? element.offsetHeight : maxHeight;
      });
      highestHeights[index] = maxHeight;
    });

    slInfoTabs.forEach((item, index) => {
      let tabElements = item.querySelectorAll(".equal-height");
      tabElements.forEach(element => {
        element.style.height = highestHeights[index] + "px";
      });
      let infoBoxes = item.querySelectorAll(".sl-info-box");
      infoBoxes.forEach(element => {
        element.style.height = highestHeights[index] + 96 + "px";
      });
    });
  };

  componentDidMount() {
    this.adjustActiveLineWidth();
    window.addEventListener("scroll", this.loadInView);
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentDidUpdate() {
    this.adjustHeight();
    this.addInfoBoxClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadInView);
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.adjustHeight();
    this.setState({
      windowWidth: typeof window !== `undefined` ? window.innerWidth : 0,
    });
    this.adjustActiveLineWidth();
  };

  addInfoBoxClass = () => {
    document.querySelector(".sl-info-tab.active")?.classList.contains("nav-on")
      ? document.querySelector(".sl-info-boxes").classList.add("sl-nav-on")
      : document.querySelector(".sl-info-boxes").classList.remove("sl-nav-on");
  };

  changeTab = (index, e) => {
    if (this.state.activeTab !== index && !this.state.fadeOut) {
      let current = e.currentTarget;
      this.setState({ activeTab: index, fadeOut: true }, () => {
        this.setActiveLineWidthAndOffset(current.parentNode);
        setTimeout(() => {
          this.setState({ fadeOut: false });
          this.addInfoBoxClass();
        }, 1000);
      });
    }
  };

  renderTabs(tabs) {
    if (!tabs || !tabs.length) {
      return;
    }

    return (
      <ul>
        {tabs.map((tab, i) => {
          const activeClass = i === this.state.activeTab ? "active" : "";
          const ref1 = React.createRef();
          this.tabsRef.push(ref1);
          return (
            <li ref={ref1} key={"tab-menu-" + i} className={activeClass}>
              <button onClick={this.changeTab.bind(this, i)} href="#">
                {tab.tabTitle}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  renderTabSections(tab, i) {
    if (!tab.items || !tab.items.length) {
      return;
    }

    const ConditionalWrapper = ({ condition, wrapper, children }) =>
      condition ? wrapper(children) : children;
    const fadeOut =
      this.state.fadeOut && this.state.activeTab !== i ? "fadeOut" : "";
    const active =
      !this.state.fadeOut && this.state.activeTab === i ? "active" : "";
    const status = fadeOut || active;

    const renderSwiper = sliderParams => {
      return (
        <SolutionsSlider
          tab={tab}
          lang={this.props.lang}
          ConditionalWrapper={ConditionalWrapper}
          index={i}
          status={status}
          loaded={this.state.loaded}
        />
      );
    };

    return <div key={"sl-info-tab-" + i}>{renderSwiper()}</div>;
  }

  leftTrim(string) {
    return string.replace(/^\/+/, "");
  }

  addLang(url) {
    if (
      !(
        url.indexOf("http://") === 0 ||
        url.indexOf("https://") === 0 ||
        url.indexOf("#") === 0
      )
    ) {
      url = this.props.lang === "uk" ? "/uk/" + this.leftTrim(url) : url;
    }
    return url;
  }

  render() {
    const pageData = this.props.wpdata;

    return (
      <section ref={this.ref} className="plx-solutions">
        <Divider invert={true} direction="bottom-left" maskColor="#f5ebe1" />

        <div className="solutions-wrap">
          <div className="container">
            <div className="row">
              <div className="col">
                {this.props.children}
                <div className="sl-info-wrap">
                  <div className="sl-info-tabs">
                    {this.renderTabs(pageData.tabs)}
                    <span className="active-line"></span>
                  </div>
                  <div
                    style={{ height: this.state.infoBoxesStyle }}
                    className="sl-info-boxes"
                  >
                    <div className="solution-helper-item">
                      <div className="sl-info-box">
                        <div className="img">
                          {pageData.tabs[0].items[0].itemImage &&
                            pageData.tabs[0].items[0].itemImage.sourceUrl && (
                              <Image
                                src={
                                  pageData.tabs[0].items[0].itemImage.sourceUrl
                                }
                              ></Image>
                            )}
                        </div>

                        <div className="title">
                          {pageData.tabs[0].items[0].itemTitle}
                        </div>
                        <div
                          className="text"
                          dangerouslySetInnerHTML={{
                            __html: pageData.tabs[0].items[0].itemCopy,
                          }}
                        ></div>
                        {pageData.tabs[0].items[0].cta &&
                          pageData.tabs[0].items[0].cta.buttonUrl && (
                            <Arrow
                              className="dark-fill"
                              href={pageData.tabs[0].items[0].cta.buttonUrl}
                              lang={this.props.lang}
                            ></Arrow>
                          )}
                      </div>
                    </div>
                    {pageData.tabs.map((tab, i) => {
                      return this.renderTabSections(tab, i);
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Solutions;

export const query = graphql`
  fragment HomeSolutions on WordPress_HPage_Hhomepagefields_BuildingArea_Solutions {
    bodyCopy
    title
    tabs {
      tabTitle
      items {
        destinationUrl
        itemCopy
        itemImage {
          altText
          sourceUrl
        }
        itemTitle
      }
    }
  }
`;
