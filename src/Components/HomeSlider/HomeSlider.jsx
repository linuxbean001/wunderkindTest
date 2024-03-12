import React from "react";
import "./_HomeSlider.scss";
class HomeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.className =
      this.props.className !== undefined ? this.props.className + " " : "";

    this.state = {
      outClass: "",
      appClass: "hero-banner",
      src:
        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
      startingSlideBg: {
        backgroundColor: "#191919",
      },
    };
    this.ref = React.createRef();

    this.counter = 0;
  }

  componentDidMount() {
    const slideImagesCount = this.props.slides.length;
    const slideStartingBG =
      this.props.slides[0].backgroundImage &&
      this.props.slides[0].backgroundImage.sourceUrl;

    {
      this.props.slides.map((slide, key) => {
        const imageLoader = new Image();
        imageLoader.src =
          slide.backgroundImage && slide.backgroundImage.sourceUrl;
        imageLoader.onload = () => {
          this.counter++;
          if (this.counter === slideImagesCount) {
            this.setState({
              appClass: this.state.appClass + " loaded",
            });
            setTimeout(() => {
              this.setState({
                startingSlideBg: {
                  backgroundImage: "url(" + slideStartingBG + ")",
                },
              });
            }, 3000);
          }
        };
        return false;
      });
    }

    const imageLoader = document.createElement("img");
    imageLoader.src = this.props.image;
    imageLoader.onload = () => {
      this.setState({
        src: this.props.image,
      });
    };

    window.addEventListener("scroll", () => {
      let outClass = "";
      if (window.scrollY > this.ref.current.offsetHeight) {
        outClass = " out";
      }

      if (this.state.outClass !== outClass) {
        this.setState({
          outClass: outClass,
        });
      }
    });
  }

  render() {
    const { slides } = this.props;

    return (
      <section ref={this.ref} className={"section-home-slider"}>
        <div
          className={
            "hero-patterns " +
            this.className +
            this.state.appClass +
            "" +
            this.state.outClass
          }
        >
          <div className="waw-slide">
            <div
              className="heading-bg"
              style={this.state.startingSlideBg}
            ></div>
          </div>
          {slides.map((slide, index) => {
            if (index === 0) {
              return;
            }
            return (
              <div key={slide.backgroundImage.id} className="waw-slide">
                <div
                  className="heading-bg"
                  style={{
                    backgroundImage:
                      "url(" + slide.backgroundImage.sourceUrl + ")",
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        <div
          className={
            "hero-titles " +
            this.className +
            this.state.appClass +
            "" +
            this.state.outClass
          }
        >
          <div className="heading-row">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="big-title">
                    {slides.map((slide, index) => {
                      return (
                        <span key={index}>
                          {slide.title +
                            (index !== slides.length - 1 ? " " : "")}
                        </span>
                      );
                    })}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeSlider;
