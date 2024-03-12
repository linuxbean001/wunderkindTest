import React from "react";
import ButtonArrow from "../../../ButtonArrow/ButtonArrow";
import "./_JobItem.scss";

class JobItem extends React.Component {
  render() {
    return (
      this.props.job.metadata[1] &&
      this.props.job.metadata[1].value &&
      this.props.job.metadata[1].value.map((jobLocation, index) => {
        return (
          <div key={this.props.job.id + "-" + index} className="jobs-grid row">
            <div className="col-lg-10 col-md-9 col-10 job-first-column">
              <div className="row">
                <div className="col-xl-6 col-md-5">
                  <p className="jobs-grid-title">{this.props.job.title}</p>
                </div>
                <div className="col-xl-6 col-md-7">
                  <div className="job-middle-column">
                    <p className="split-equal">
                      {this.props.job.metadata[0].value}
                    </p>
                    <p className="split-equal">{jobLocation}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-2 job-last-column">
              <ButtonArrow
                href={"/open-roles/" + this.props.job.id + "/"}
                className="btn-dark"
                lang={this.props.lang}
              >
                See Details
              </ButtonArrow>
            </div>
          </div>
        );
      })
    );
  }
}
export default JobItem;
