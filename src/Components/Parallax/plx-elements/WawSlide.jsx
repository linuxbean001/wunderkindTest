import React from "react";
import Plx from "react-plx";

class WawSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src:
        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    };

    this.plxHero = [
      {
        start: 0,
        duration: "80vh",
        startOffset: "0",
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

    this.plxText = [
      {
        start: 0,
        duration: "50vh",
        startOffset: "0",
        properties: [
          {
            startValue: 0,
            endValue: -25,
            unit: "vh",
            property: "translateY",
          },
          {
            startValue: 1,
            endValue: 0,
            property: "opacity",
          },
        ],
      },
    ];
  }

  componentDidMount() {
    const imageLoader = document.createElement("img");
    imageLoader.src = this.props.image;
    imageLoader.onload = () => {
      this.setState({
        src: this.props.image,
      });
    };
  }

  render() {
    return (
      <div className="waw-slide">
        <Plx
          parallaxData={this.plxHero}
          className="heading-bg"
          style={{ backgroundImage: "url(" + this.state.src + ")" }}
        ></Plx>
        {this.props.children !== undefined && (
          <div className="heading-row">
            <div className="container">
              <Plx parallaxData={this.plxText}>
                <h2 className="big-title">{this.props.children}</h2>
              </Plx>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default WawSlide;
