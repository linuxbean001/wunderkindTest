import React from "react";
import "./_JobForm.scss";

class JobForm extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://boards.greenhouse.io/embed/job_board/js?for=wunderkind";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.Grnhse) {
        window.Grnhse.Iframe.load(this.props.currentJob.id);
      }
    });
  }

  render() {
    return (
      <section className="open-roles-form cream-bg" id="job-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <h3 className="open-role-form-apply">Apply for:</h3>
            </div>
            <div className="col-xl-6">
              <h3 className="open-role-form-title">
                {this.props.currentJob.title}
              </h3>
              <p className="open-role-form-notice">
                Required fields are marked *
              </p>
              <div id="grnhse_app"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JobForm;
