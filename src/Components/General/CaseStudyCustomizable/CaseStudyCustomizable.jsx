import React from "react";
function CaseStudy({ testimonial }) {
  return (
    <section className="case-study-section">
      <div className="container case-study-container">
        <div className="row">
          <div className="col-lg-8">
            <picture>
              <source
                media="(min-width:992px)"
                alt={testimonial.alt}
                srcSet={testimonial.image}
              />
              <img src={testimonial.imageSmall} alt={testimonial.imageAlt} />
            </picture>
            <blockquote className="case-study-quote">
              <q className="double-quotes">{testimonial.text}</q>
            </blockquote>
            <p className="quote-author-name">{testimonial.author}</p>
            <p className="quote-author-position">{testimonial.authorRole}</p>
          </div>
          <div className="col-lg-4 case-study-stats">
            <div className="row">
              {testimonial.statistics.map((statistic, index) => (
                <div
                  key={statistic.statistic}
                  className="col-6 col-md-4 col-lg-12 case-study-box"
                >
                  <p
                    className={`${
                      index ? "stats-number" : "stats-number stats-number-first"
                    }`}
                  >
                    {statistic.statistic}
                  </p>
                  <p className="stats-text">{statistic.suffix}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
