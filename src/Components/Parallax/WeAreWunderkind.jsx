import React from "react";

import "./scss/_WeAreWunderkind.scss";

class WeAreWunderkind extends React.Component {
  constructor(props) {
    super(props);

    this.className =
      this.props.className !== undefined ? this.props.className + " " : "";

    this.state = {
      outClass: "",
      appClass: "hero-banner",
      src:
        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    };
    this.ref = React.createRef();

    this.counter = 0;
  }

  scrollEvent = () => {
    let outClass = "";
    if (window.scrollY > this.ref.current.offsetHeight) {
      outClass = " out";
    }
    if (this.state.outClass != outClass) {
      this.setState({
        outClass: outClass,
      });
    }
  };

  componentDidMount() {
    const slideImagesCount = this.props.slideImagesLoad.length;

    this.props.slideImagesLoad.map((item, key) => {
      const imageLoader = new Image();
      imageLoader.src = item;
      imageLoader.onload = () => {
        this.counter++;
        if (this.counter === slideImagesCount) {
          this.setState({
            appClass: this.state.appClass + " loaded",
          });
        }
      };
      return false;
    });

    const imageLoader = new Image();
    imageLoader.src = this.props.image;
    imageLoader.onload = () => {
      this.setState({
        src: imageLoader.src,
      });
    };

    window.addEventListener("scroll", this.scrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEvent);
  }

  render() {
    return (
      <div
        ref={this.ref}
        style={{ backgroundImage: "url(" + this.state.src + ")" }}
        className={
          this.className + this.state.appClass + "" + this.state.outClass
        }
      >
        {this.props.children}
      </div>
    );
  }
}

export default WeAreWunderkind;
