import React from "react";

class PercentCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentCounter: 1,
    };
    this.ref = React.createRef();
  }

  incrementPercentOnScroll = () => {
    let elementPosition = this.ref.current.getBoundingClientRect();
    let percentIncrementor = this.state.percentCounter;
    if (
      window.innerHeight - window.innerHeight / 3 > elementPosition.top &&
      this.state.percentCounter < this.props.children
    ) {
      percentIncrementor++;
      this.setState({
        percentCounter: percentIncrementor,
      });
    }
  };

  componentDidMount() {
    setInterval(this.incrementPercentOnScroll, 100);
  }

  render() {
    return (
      <div ref={this.ref} className={this.props.className + " pc-counter"}>
        <span className="val">{this.state.percentCounter}</span>
        <span className="sign">{this.props.sign ? this.props.sign : "%"}</span>
      </div>
    );
  }
}

export default PercentCounter;
