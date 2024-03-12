import React from "react";

import "./_CallToActionCustomizable.scss";

function CallToActionCustomizable({
  mainTitle,
  buttonText,
  patternImages,
  ctaImages,
}) {
  return (
    <>
      <img
        className="divider-image d-none d-lg-block"
        src={patternImages.largeSrc}
        alt={patternImages.largeAlt}
      />
      <img
        className="divider-image d-inline d-lg-none"
        src={patternImages.smallSrc}
        alt={patternImages.smallAlt}
      />
      <section className="call-to-action-section">
        <div className="container">
          <div className="row call-to-action-container">
            <div className="col-12 col-lg-7">
              <h1 className="call-to-action-heading">{mainTitle}</h1>
              <a
                href="#resources-article-section"
                className="call-to-action-button"
              >
                {buttonText}
              </a>
            </div>
            <div className="col-12 col-lg-5 call-to-action-image">
              <img
                className="d-none d-lg-block"
                src={ctaImages.largeSrc}
                alt={ctaImages.largeAlt}
              />
              <img
                className="d-inline d-lg-none"
                src={ctaImages.smallSrc}
                alt={ctaImages.smallAlt}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CallToActionCustomizable;
