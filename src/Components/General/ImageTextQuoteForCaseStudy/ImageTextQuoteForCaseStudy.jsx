import React from "react";
import "./ImageTextQuoteForCaseStudy.scss";
function ImageTextQuoteForCaseStudy({
  testimonialAuthor,
  testimonialText,
  testimonialImage,
}) {
  const finalTestimonialText = testimonialText.concat("”");
  let isShortTestimonialText = true;
  if (finalTestimonialText.length > 150) {
    isShortTestimonialText = false;
  }

  return (
    <div className="quote-section">
      <div className="container quote-section-container">
        <div className="quote-section-image-container">
          <img
            src={testimonialImage}
            alt="quote-image"
            className="quote-section-image"
          />
        </div>
        <div
          className={`quote-section-text-container ${
            isShortTestimonialText ? "quote-section-text-container-short" : ""
          }`}
        >
          <h3 className="quote-section-text-title">{finalTestimonialText}</h3>
          <p className="quote-section-text-author">{testimonialAuthor}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageTextQuoteForCaseStudy;
