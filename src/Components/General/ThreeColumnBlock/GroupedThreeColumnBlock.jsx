import React from "react";
import "./_ThreeColumnBlock.scss";

class GroupedThreeColumnBlock extends React.Component {
  render() {
    return (
      <section
        className={
          "grouped-three-block" +
          (this.props.className !== undefined ? " " + this.props.className : "")
        }
      >
        {this.props.children}
      </section>
    );
  }
}

export default GroupedThreeColumnBlock;
