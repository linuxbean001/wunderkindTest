import React, { useState } from "react";
import "./_Subtitle.scss";

const Subtitle = ({ subtitle }) => {
  const [isReadMore, setIsReadMore] = useState(subtitle.length > 333);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <h3 className="m-0 subtitle-text">
      {isReadMore ? subtitle.slice(0, 333).concat("...") : subtitle}
      {isReadMore && (
        <span
          onClick={toggleReadMore}
          className="subtitle-read-more"
          role="button"
        >
          continue reading →
        </span>
      )}
    </h3>
  );
};

export default Subtitle;
