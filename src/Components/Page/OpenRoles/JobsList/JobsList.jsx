import React from "react";

import JobItem from "../JobItem/JobItem";

class JobsList extends React.Component {
  render() {
    return (
      <div className="jobs-list">
        {this.props.jobs.map(job => (
          <JobItem
            key={"job-" + job.id}
            job={job}
            lang={this.props.lang}
          ></JobItem>
        ))}
      </div>
    );
  }
}
export default JobsList;
