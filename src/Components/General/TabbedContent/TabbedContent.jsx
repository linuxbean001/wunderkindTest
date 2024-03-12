import React from "react";
import Image from "Components/Image/Image";
import Button from "Components/Button/Button";
import AnimateHeight from "react-animate-height";

import "./_TabbedContent.scss";

const Tab = props => {
  let { tab, id, elClass, index } = props;

  return (
    <div key={index} id={id} className={elClass}>
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div
            className="tab-info-box"
            dangerouslySetInnerHTML={{ __html: tab.introCopy }}
          ></div>
          {tab.ctaGroup.url && (
            <Button href={tab.ctaGroup.url} lang={this.props.lang}>
              {tab.ctaGroup.text}
            </Button>
          )}
        </div>
        <div className="col-lg-6">
          <div className="tab-info-box">
            {tab.image && (
              <Image src={tab.image.sourceUrl} alt={tab.image.altText}></Image>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

class TabbedContent extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      height: 0,
    };
  }
  adjustActiveLineWidth = () => {
    // If no content is added to the component
    if (!this.ref.current) {
      return;
    }

    let tab = this.divElement.querySelector(".tab-info.active");

    this.setState({
      height: tab.clientHeight,
    });

    let active_tab = this.ref.current
      .querySelector(".info-tabs .active")
      .getBoundingClientRect();
    let active_line = this.ref.current.querySelector(".info-tabs .active-line");
    active_line.style.width = active_tab.width + "px";
  };

  componentDidMount() {
    this.adjustActiveLineWidth();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.adjustActiveLineWidth();
  };

  changeTab = (index, e) => {
    let current = e.currentTarget;
    let self = this;
    let active_line = e.currentTarget.parentNode.parentNode.parentNode.querySelector(
      ".active-line"
    );
    let main_tab_wrap =
      e.currentTarget.parentNode.parentNode.parentNode.parentNode;

    if (
      !e.currentTarget.parentNode.classList.contains("active") &&
      document.querySelector(".tab-info.fadeOut") === null
    ) {
      e.currentTarget.parentNode.parentNode
        .querySelector(".active")
        .classList.remove("active");
      active_line.style.width = current.offsetWidth + "px";
      active_line.style.left = current.parentNode.offsetLeft + "px";
      e.currentTarget.parentNode.classList.add("active");

      main_tab_wrap.querySelector(".tab-info.active").classList.add("fadeOut");
      main_tab_wrap
        .querySelector(".tab-info.active")
        .classList.remove("active");

      setTimeout(function() {
        main_tab_wrap
          .querySelector(".tab-info.fadeOut")
          .classList.remove("fadeOut");
        main_tab_wrap
          .querySelector("#tab-info-" + index)
          .classList.add("active");
      }, 450);
    }

    this.setState({
      height: main_tab_wrap.querySelector("#tab-info-" + index).clientHeight,
    });
  };

  render() {
    let { tabs } = this.props;

    if (!tabs) {
      return <></>;
    }

    if (tabs.lenght > 3) {
      tabs = tabs.slice(0, 3);
    }

    let mapped = tabs.map((tab, index) => {
      const id = "tab-info-" + (index + 1);
      const elClass = !index ? "tab-info active" : "tab-info";
      return <Tab tab={tab} id={id} elClass={elClass} index={index} />;
    });

    return (
      <section ref={this.ref} className="tabs-content">
        <div className="container">
          <div className="tabs-content-wrap">
            <div className="info-tabs">
              <ul>
                {tabs.map((tab, index) => {
                  const active = !index ? "active" : "";
                  return (
                    <li key={index} className={active}>
                      <button
                        onClick={this.changeTab.bind(this, index + 1)}
                        href="#"
                      >
                        {tab.tabTitle}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <span className="active-line"></span>
            </div>
            <div
              className="tab-info-boxes"
              ref={divElement => {
                this.divElement = divElement;
              }}
            >
              <AnimateHeight time={450} height={this.state.height}>
                <div></div>
              </AnimateHeight>

              {mapped}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TabbedContent;
