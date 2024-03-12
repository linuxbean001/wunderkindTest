import React from "react";
import "./_JobsTitle.scss";

class JobsTitle extends React.Component {
  render() {
    return (
      <h3 className="jobs-title">
        Showing: {this.props.totalJobs}{" "}
        {this.props.totalJobs === 1 ? "job" : "jobs"}
      </h3>
    );
  }
}
export default JobsTitle;
