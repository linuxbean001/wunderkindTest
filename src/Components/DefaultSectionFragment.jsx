import React from "react";
import { graphql } from "gatsby";

export const getDefaultSectionsData = data => {
  return (
    data &&
    data.wordPress &&
    data.wordPress.generalSettingsHeadless &&
    data.wordPress.generalSettingsHeadless.hGeneralSettingsPage
  );
};

function DefaultSectionFragment() {
  return <></>;
}

export default DefaultSectionFragment;

export const fragment = graphql`
  fragment DefaultSectionsFragment on WordPress_GeneralSettingsHeadless {
    hGeneralSettingsPage {
      brandBlockSection {
        ctaGroup {
          text
          url
        }
        image {
          altText
          sourceUrl
        }
        text
      }
      promoBlockSection {
        bgColor
        backgroundImage {
          altText
          sourceUrl
        }
        firstColumn {
          content
          ctaGroup {
            text
            url
          }
          image {
            altText
            sourceUrl
          }
          title
        }
        secondColumn {
          content
          ctaGroup {
            text
            url
          }
          image {
            altText
            sourceUrl
          }
          title
        }
      }
      getADemoSection {
        bgColor
        ctaGroup {
          text
          url
        }
        image {
          altText
          sourceUrl
        }
        maskColor
        subTitle
        title
      }
      processBlockSection {
        title
        steps {
          step {
            number
            text
          }
        }
      }
    }
  }
`;
