import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";

//About Us Components
import ThreeColumnBlock from "Components/General/ThreeColumnBlock/ThreeColumnBlock";
import GroupedThreeColumnBlock from "Components/General/ThreeColumnBlock/GroupedThreeColumnBlock";
import CenteredTitle from "Components/General/CenteredTitle/CenteredTitle";
import CenteredHeading from "Components/General/CenteredHeading/CenteredHeading";

function get404Data(data) {
  return data.wordPress.generalSettingsHeadless.hGeneralSettingsPage;
}

function Page404(props) {
    const { data } = props;
  const browser = typeof window !== "undefined" && window;
  const pageData = get404Data(data);
  const threeColumnCols = !pageData.threeColumnsSection.columns
    ? []
    : pageData.threeColumnsSection.columns.map(e => {
        return {
          title: e.title,
          image: e.image ? e.image.sourceUrl : "",
          subtitle: e.bodyCopy,
          link: e.ctaGroup && e.ctaGroup.url,
        };
      });
  return (
    browser && (
      <MainLayout
        headerPattern="/images/patterns/pattern-14.svg"
        footerPattern="/images/patterns/pattern-14.svg"
        hideLanguageSwitch={true}
        seoMeta={{
          title: `404 | Wunderkind`,
          metaDesc: `404`,
        }}
        {...props}
      >
        <CenteredHeading
          headingImg="/images/illustrations/wk-char-blackbg-Visionary.svg"
          headingTitleDesktop="We can't find<br> the page you're looking for"
          headingTitleMobile="We can't<br> find the page<br> you're<br> looking for"
        ></CenteredHeading>
        <GroupedThreeColumnBlock>
          {pageData.threeColumnsSection.text && (
            <CenteredTitle>{pageData.threeColumnsSection.text}</CenteredTitle>
          )}

          <ThreeColumnBlock content={threeColumnCols} arrowVertical={false} />
        </GroupedThreeColumnBlock>
      </MainLayout>
    )
  );
}

export default Page404;

export const query = graphql`
  {
    wordPress {
      generalSettingsHeadless {
        hGeneralSettingsPage {
          threeColumnsSection {
            text
            columns {
              title
              bodyCopy
              image {
                sourceUrl
                altText
              }
              ctaGroup {
                text
                url
              }
            }
          }
        }
      }
    }
  }
`;
