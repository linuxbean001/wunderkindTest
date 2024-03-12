import React from "react";

function CerosEmbed(props) {
  const { embeddedContent } = props;
  return (
    embeddedContent && (
      <div dangerouslySetInnerHTML={{ __html: embeddedContent }}></div>
    )
  );
}

export default CerosEmbed;
