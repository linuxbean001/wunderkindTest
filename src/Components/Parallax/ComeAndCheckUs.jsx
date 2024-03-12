import React from "react";

import "./scss/style.scss";
import "./scss/_ComeAndCheckUs.scss";

import ComeCheckUsSlider from "./plx-elements/ComeCheckUsSlider";

class ComeAndCheckUs extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.state = {
      plxData: [
        {
          start: ".plx-come-check-us",
          duration: "250vh",
          startOffset: "-10vh",
          properties: [
            {
              startValue: 0,
              endValue: -70,
              unit: "vh",
              property: "marginTop",
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
        plxData: [
          {
            start: ".plx-come-check-us",
            duration: "400vh",
            startOffset: "-50vh",
            properties: [
              {
                startValue: -75,
                endValue: -120,
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
            duration: "400vh",
            startOffset: "-50vh",
            properties: [
              {
                startValue: -75,
                endValue: -120,
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
            start: ".plx-come-check-us",
            duration: "230vh",
            startOffset: "-50vh",
            properties: [
              {
                startValue: -65,
                endValue: -110,
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
    const { events, pattern } = this.props;

    if (!events) {
      return <div ref={this.ref}></div>;
    }

    let formatted = events.map(event => {
      return {
        ...event,
        button: {
          label: event.ctaGroup.text,
          link: event.ctaGroup.url,
        },
      };
    });

    return (
      <section ref={this.ref} className="plx-come-check-us">
        <ComeCheckUsSlider
          list={formatted}
          pattern={pattern}
          lang={this.props.lang}
        />
      </section>
    );
  }
}

export default ComeAndCheckUs;
