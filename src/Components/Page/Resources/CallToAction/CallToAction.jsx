import React from "react";

import "./_CallToAction.scss";

function CallToAction() {
  return (
    <>
      <img
        className="divider-image d-none d-lg-block"
        src="/images/patterns/pattern-21.svg"
      />
      <img
        className="divider-image d-inline d-lg-none"
        src="/images/patterns/pattern-23.svg"
      />
      <section className="call-to-action-section">
        <div className="container">
          <div className="row call-to-action-container">
            <div className="col-12 col-lg-7">
              <h2 className="call-to-action-heading">
                Ready to drive 11-15% in additional eCommerce revenue? Get
                started with a custom projection.
              </h2>
              <a
                href="#resources-article-section"
                className="call-to-action-button"
              >
                Get My Estimate
              </a>
            </div>
            <div className="col-12 col-lg-5 call-to-action-image">
              <img
                className="d-none d-lg-block"
                src="/images/resources/wk-Storyteller.png"
              />
              <img
                className="d-inline d-lg-none"
                src="/images/resources/wk-Storyteller-mbl.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
