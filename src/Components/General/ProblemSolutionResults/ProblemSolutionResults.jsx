import React from "react";
import "./_ProblemSolutionResults.scss";
import Arrow from "Components/Arrow/Arrow";

class ProblemSolutionResults extends React.Component {
  constructor(props) {
    super(props);
    this.cmpClass =
      "section-problem-solution " + (this.props.dark ? "dark" : "");
    this.cmpClass += " " + (this.props.className ? this.props.className : "");
  }

  render() {
    return (
      <div className={this.cmpClass}>
        <div className="container">
          <div className="col-12 p-0 content-container-wrapper">
            {this.props.content.map((value, index) => (
              <div className="content-container">
                <div className="row custom-row m-0 p-0">
                  <Arrow></Arrow>
                  <h3 className="m-0">{value.title}</h3>
                </div>
                <div className="custom-content-container">
                  <div
                    className="content-title"
                    dangerouslySetInnerHTML={{ __html: value.text }}
                  ></div>
                  {value.image != undefined ? (
                    <div className="content-image">
                      <img
                        className="psrImage"
                        src={value.image}
                        alt="psrAlt"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default ProblemSolutionResults;
