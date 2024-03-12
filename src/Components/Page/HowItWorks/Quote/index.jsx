import React, {useState} from "react";
import "./styles.scss";

function Quote({quote, author, authorPosition, textColor, borderColor}) {
  return (
    <div>
      <div className={"quote-container"} style={{color: textColor, borderColor: borderColor || "#3D55CC"}} >
        <div className={"quote"}>
          {quote}
        </div>
        <div className={"author"}>
        {author}
      </div>
        <div className={"author-position"}>
        {authorPosition}
      </div>
      </div>
    </div>
  );

}

export default Quote;
