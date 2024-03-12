import React from "react";
import { graphql } from "gatsby";

import MainLayout from "layouts/Main";
import Intro from "Components/General/Intro/Intro";
import SideHtmlTextContent from "Components/General/SideHtmlTextContent/SideHtmlTextContent";

import GetHeaderFooterData from "utils/useHeaderFooterTemplates";

function getContentWPData(data) {
  return data && data.wordPress && data.wordPress.hPageBy;
}

function getContentSectionData(data) {
  return (
    data && data.hPlainContentFields && data.hPlainContentFields.buildingArea
  );
}

function GenericTemplate(props) {
  const { data } = props;

  const pageData = getContentWPData(data);
  const sections = getContentSectionData(pageData);

  const patterns = GetHeaderFooterData(data);
  const headerPattern = patterns.header && patterns.header.sourceUrl;
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;

  return (
    <MainLayout
      lang="us"
      headerPattern={headerPattern}
      footerPattern={footerPattern}
      seoMeta={pageData.seo}
      languages={pageData.hPageLanguage?.pageLanguage}
      {...props}
    >
      {sections &&
        sections.map((section, index) => {
          const type = section.__typename;
          switch (type) {
            case "WordPress_HPage_Hplaincontentfields_BuildingArea_Intro":
              return (
                <Intro
                  key={"section-" + index}
                  className="general_intro"
                  colClass="col-md-8"
                  content={{
                    sideHeading: section.sectionTitle,
                    title: section.introCopy,
                    subtitle: section.bodyCopy,
                    button: {
                      link: section.ctaGroup && section.ctaGroup.url,
                      label: section.ctaGroup && section.ctaGroup.text,
                    },
                  }}
                  sorted={[]}
                  list={[]}
                ></Intro>
              );
            case "WordPress_HPage_Hplaincontentfields_BuildingArea_Content":
              return (
                <SideHtmlTextContent
                  key={"section-" + index}
                  content={section.pageContent}
                  firstCol={""}
                ></SideHtmlTextContent>
              );
            default:
              return <></>;
          }
        })}
    </MainLayout>
  );
}

export default GenericTemplate;

export const query = graphql`
  query plainContentQuery($id: ID!) {
    wordPress {
      hPageBy(id: $id) {
        databaseId
        title
        hPageLanguage {
          pageLanguage
        }
        hPlainContentFields {
          buildingArea {
            ... on WordPress_HPage_Hplaincontentfields_BuildingArea_Intro {
              bodyCopy
              ctaGroup {
                text
                url
              }
              image {
                altText
                sourceUrl
              }
              introCopy
              sectionTitle
            }
            ... on WordPress_HPage_Hplaincontentfields_BuildingArea_Content {
              pageContent
            }
          }
        }
        hPageLayouts {
          ...HeaderPattern
          ...FooterPattern
        }
        seo {
          ...SeoMeta
        }
      }
    }
  }
`;
