import React from "react";
import "./_CaseStudy.scss";

function CaseStudy() {
  return (
    <section className="case-study-section">
      <div className="container case-study-container">
        <div className="row">
          <div className="col-lg-8">
            <img
              className="d-none d-lg-block case-study-logo"
              src="/images/resources/RagBone.png"
            />
            <img
              className="d-block d-lg-none case-study-logo"
              src="/images/resources/RagBone-mbl.png"
            />
            {/* <h2 className="case-study-heading">Nautica nearly tripled their digital revenue with  Wunderkind</h2> */}
            <blockquote className="case-study-quote">
              <q className="double-quotes">
                Wunderkind has been an incredible tool to ensure that we’re
                maximizing our spend. They help us bring consumers back to site
                with thoughtful experiences based on intent they’ve shown on our
                website.
              </q>
            </blockquote>
            <p className="quote-author-name">Aaron Detrick</p>
            <p className="quote-author-position">VP of Digital at rag & bone</p>
          </div>
          <div className="col-lg-4 case-study-stats">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-12 case-study-box">
                <p className="stats-number-first stats-number">10.5%</p>
                <p className="stats-text">
                  of total digital revenue driven by Wunderkind email
                </p>
                <hr />
              </div>
              <div className="col-6 col-md-4 col-lg-12 case-study-box">
                <p className="stats-number">9.8</p>
                <p className="stats-text">
                  of total digital revenue driven by Wunderkind Texts alone
                </p>
                <hr />
              </div>
              <div className="col-6 col-md-4 col-lg-12 case-study-box">
                <p className="stats-number">4.7x</p>
                <p className="stats-text">
                  YoY growth in revenue driven by Wunderkind
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
