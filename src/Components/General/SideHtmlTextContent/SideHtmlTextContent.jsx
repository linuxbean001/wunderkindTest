import React from "react";
import "./_SideHtmlTextContent.scss";


class SideHtmlTextContent extends React.Component {
  render() {
    return (
      <section
        className={`side-html-text-content ${
          this.props.className !== undefined ? this.props.className : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div
              className={
                this.props.firstCol !== undefined
                  ? " " + this.props.firstCol
                  : "col-lg-4"
              }
            ></div>
            <div
              className={
                this.props.secondCol !== undefined
                  ? this.props.secondCol
                  : "col-sm-10 col-lg-8"
              }
            >
              {this.props.content !== undefined && (
                <div
                  dangerouslySetInnerHTML={{ __html: this.props.content }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SideHtmlTextContent;



