import React from "react";
import "./_SectionsNav.scss";

import { animateScroll } from "react-scroll";
import ReactDOM from "react-dom";

class SectionsNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections_range: [],
      sections_offsets: [],
    };
  }

  scrollToSection(index, e) {
    if (!e.currentTarget.classList.contains("active")) {
      /* const node = ReactDOM.findDOMNode(this.props.children[index].ref.current);
            const node_margin_top = parseFloat(window.getComputedStyle(node).marginTop.replace('px', '')); */

      let curr_section_offset = this.state.sections_offsets[index];

      animateScroll.scrollTo(curr_section_offset);

      if (document.querySelector(".section-nav-btn.active") !== null) {
        document
          .querySelector(".section-nav-btn.active")
          .classList.remove("active");
      }

      e.currentTarget.classList.add("active");
    }
  }

  updateActiveSection = () => {
    const w_height =
      (typeof window !== `undefined` ? window.innerHeight : 0) / 3;
    let sections_range = [];

    for (let i = 0; i < this.props.children.length; i++) {
      if (
        !this.props.children[i].ref ||
        !this.props.children[i].ref.current ||
        !this.props.children[i].ref.current.ref ||
        !this.props.children[i].ref.current.ref.current
      ) {
        continue;
      }

      const node = ReactDOM.findDOMNode(this.props.children[i].ref.current);
      const node_offset_top = this.state.sections_offsets[i];

      sections_range[i] = {
        from: node_offset_top - w_height / 3,
        to: node_offset_top + node.offsetHeight + w_height / 3,
      };
    }
    this.setState({ sections_range: sections_range });

    for (let i = 0; i < this.state.sections_range.length; i++) {
      if (!this.state.sections_range[i]) {
        continue;
      }

      if (
        window.scrollY >= this.state.sections_range[i].from &&
        window.scrollY <= this.state.sections_range[i].to
      ) {
        document
          .querySelector(".section-nav-btn.active")
          .classList.remove("active");
        document
          .querySelectorAll(".section-nav-btn")
          [i].classList.add("active");
      }
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.updateActiveSection);

    let sections_offsets_init = [];

    for (let i = 0; i < this.props.children.length; i++) {
      let curr_cmp = this.props.children[i];
      let offset = curr_cmp.props.scrollOffset
        ? curr_cmp.props.scrollOffset
        : 0;
      sections_offsets_init[i] =
        ReactDOM.findDOMNode(this.props.children[i].ref?.current)?.offsetTop +
        offset;
    }

    this.setState({
      sections_offsets: sections_offsets_init,
    });
  }

  adjustNavName = item => {
    switch (item) {
      case "We Get Results":
        return "Results";
      case "We Get Brands":
        return "Case Studies";
      case "Request a demo":
        return "Demo";
      case "We Get Leaders":
        return "We get you";
      case "Come and Check Us":
        return "Events";
      case "Featured Resources":
        return "Resources";
      default:
        return item;
    }
  };

  render() {
    return (
      <>
        <div className="sections-nav desktop-show">
          {this.props.children.map((item, index) => (
            <button
              onClick={this.scrollToSection.bind(this, index)}
              key={index}
              section-num={index}
              className={
                index === 0 ? "section-nav-btn active" : "section-nav-btn"
              }
            >
              <span className="dot"></span>
              <span className="nav-sec-name">
                {this.adjustNavName(item.props.sectionName)}
              </span>
              <span className="sr-only">Nav Link</span>
            </button>
          ))}
        </div>
        {this.props.children}
      </>
    );
  }
}

export default SectionsNav;
