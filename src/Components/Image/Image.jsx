import React from "react";

class Image extends React.Component {
  state = { src: null };

  componentDidMount() {
    if (this.props.src) {
      const { src } = this.props.src;

      const imageLoader = new Image();
      imageLoader.src = src;

      imageLoader.onload = () => {
        this.setState({ src });
      };
    }
  }

  render() {
    return (
      <>
        {this.props.src && (
          <img
            alt={this.props.alt ? this.props.alt : ""}
            className={
              this.props.className ? "img " + this.props.className : "img"
            }
            src={this.props.src}
            style={this.props.style}
          />
        )}
      </>
    );
  }
}

export default Image;
