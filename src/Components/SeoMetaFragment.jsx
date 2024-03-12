import React from "react";
import { graphql } from "gatsby";

function SeoMetaFragment() {
  return <></>;
}

export default SeoMetaFragment;

export const fragment = graphql`
  fragment SeoMeta on WordPress_SEO {
    __typename
    metaDesc
    opengraphDescription
    opengraphTitle
    opengraphImage {
      sourceUrl
      altText
    }
    title
    twitterDescription
    twitterTitle
    twitterImage {
      sourceUrl
      altText
    }
  }
`;
