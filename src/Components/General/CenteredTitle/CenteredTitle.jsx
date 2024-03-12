import React from "react";
import "./_CenteredTitle.scss";

class CenteredTitle extends React.Component {
  render() {
    return (
      <div
        className={
          "centered-title-wrap" + (this.props.dark !== undefined ? " dark" : "")
        }
      >
        {this.props.children && (
          <h3
            className={"section-title centered"}
            dangerouslySetInnerHTML={{ __html: this.props.children }}
          ></h3>
        )}
      </div>
    );
  }
}

export default CenteredTitle;
