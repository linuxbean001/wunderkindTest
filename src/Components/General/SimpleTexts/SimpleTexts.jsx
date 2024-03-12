import React from "react";
import "./_SimpleTexts.scss";

function SimpleTexts(props) {
  const { paragraphs } = props;
  return (
    <div className="simple-texts">
      {paragraphs.map(p => (
        <p className={p.style}>{p.text}</p>
      ))}
    </div>
  );
}

export default SimpleTexts;
