import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";

//General Components
import LogoWallTicker from "Components/General/LogoWallTicker/LogoWallTicker";
import Overview from "Components/General/Overview/Overview";
import ThreeColumnBlock from "Components/General/ThreeColumnBlock/ThreeColumnBlock";
import Intro from "Components/General/Intro/Intro";
import RequestDemo from "Components/General/RequestDemo/RequestDemo";
import Divider from "Components/General/Divider/Divider";
import ImageAndText from "Components/General/ImageAndText/ImageAndText";
import TabbedContent from "Components/General/TabbedContent/TabbedContent";

//Solutions Components
import UserIdentification from "Components/Page/Solutions/UserIdentification/UserIdentification";
import CaseStudy from "Components/Page/Solutions/CaseStudy/CaseStudy";
import CMS from "Components/Page/Solutions/CMS/CMS";
import CenteredTitle from "Components/General/CenteredTitle/CenteredTitle";
import Button from "Components/Button/Button";

import GetHeaderFooterData from "utils/useHeaderFooterTemplates";

function getSoltionsPageWPData(data) {
  return data && data.wordPress && data.wordPress.hPageBy;
}

function getSolutionsSections(data) {
  return (
    data && data.hSolutionsPageFields && data.hSolutionsPageFields.buildingArea
  );
}

function Solutions(props) {
  const { data } = props;

  const pageData = getSoltionsPageWPData(data);
  const sections = getSolutionsSections(pageData);

  const patterns = GetHeaderFooterData(data);
  const headerPattern = patterns.header && patterns.header.sourceUrl;
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;

  return (
    <MainLayout
      lang={"us"}
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
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_Header":
              return (
                <Intro
                  sectionIndex={index}
                  key={"section-" + index}
                  content={{
                    sideHeading: section.sectionTitle,
                    title: section.largeTitle,
                    subtitle: section.bodyCopy,
                    button: {
                      label: section.ctaGroup.text,
                      link: section.ctaGroup.url,
                    },
                  }}
                  lang={"us"}
                  sorted={[]}
                  list={[]}
                ></Intro>
              );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_Intro":
              return (
                <Overview
                  sectionIndex={index}
                  key={"section-" + index}
                  className={section.isSecondary ? "secondary" : ""}
                  dark={section.displayMode === "dark"}
                  content={{
                    title: section.sectionTitle,
                    subtitle: section.introCopy,
                    text: section.bodyCopy,
                    image: section.image && section.image.sourceUrl,
                    flipImage: true,
                    button: {
                      label: section.ctaGroup.text,
                      link: section.ctaGroup.url,
                    },
                  }}
                  lang={"us"}
                />
              );
            // case "WordPress_HPage_Hsolutionspagefields_BuildingArea_CaseStudySlider":
            //   return (
            //     <CaseStudy
            //       sectionIndex={index}
            //       key={"section-" + index}
            //       list={section.caseStudies}
            //       lang={"us"}
            //     />
            //   );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_LogoWallTicker":
              return (
                <LogoWallTicker
                  sectionIndex={index}
                  key={"section-" + index}
                  logos={section.logos}
                  content={section.content}
                  className="solutions-logo-slider"
                  lang={"us"}
                />
              );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_ThreeColumnBlock":
              const content = section.columns.map(column => {
                return {
                  title: column.title,
                  icon: column.image && column.image.sourceUrl,
                  subtitle: column.bodyCopy,
                  link: column.ctaGroup.url,
                };
              });
              return (
                <ThreeColumnBlock
                  className="sl-three-icons"
                  sectionIndex={index}
                  key={"section-" + index}
                  content={content}
                  lang={"us"}
                />
              );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_Divider":
              return (
                <Divider
                  sectionIndex={index}
                  key={"section-" + index}
                  bgColor={section.bgColor}
                  maskColor={section.maskColor}
                  lang={"us"}
                />
              );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_UserIdentification":
              return (
                <UserIdentification
                  sectionIndex={index}
                  key={"section-" + index}
                  {...section}
                  lang={"us"}
                />
              );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_ImageAndTextBlock":
              return (
                <ImageAndText
                  className="main-solutions"
                  sectionIndex={index}
                  key={"section-" + index}
                  {...section}
                  lang={"us"}
                />
              );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_TabbedContent":
              return (
                <TabbedContent
                  sectionIndex={index}
                  key={"section-" + index}
                  {...section}
                  lang={"us"}
                />
              );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_CenteredTextOrButton":
              return (
                <div key={"section-" + index}>
                  {section.text && (
                    <CenteredTitle>{section.text}</CenteredTitle>
                  )}
                  {section.ctaGroup.url && section.ctaGroup.text && (
                    <div className="btn-wrap">
                      <Button
                        href={section.ctaGroup.url}
                        className="btn-fill-dark"
                        lang={"us"}
                      >
                        {section.ctaGroup.text}
                      </Button>
                    </div>
                  )}
                </div>
              );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_LogoWallStatic":
              return (
                <CMS
                  sectionIndex={index}
                  key={"section-" + index}
                  {...section}
                  lang={"us"}
                />
              );
            case "WordPress_HPage_Hsolutionspagefields_BuildingArea_GetADemo":
              return (
                <RequestDemo
                  sectionIndex={index}
                  key={"section-" + index}
                  content={{
                    title: section.title,
                    subtitle: section.subTitle,
                    button: {
                      label: section.ctaGroup && section.ctaGroup.text,
                      link: section.ctaGroup && section.ctaGroup.url,
                    },
                    image: section.image && section.image.sourceUrl,
                  }}
                  maskColor={section.bgColor}
                  bgColor={section.maskColor}
                  dark={true}
                  lang={"us"}
                ></RequestDemo>
              );
            default:
              return "";
          }
        })}
    </MainLayout>
  );
}

export default Solutions;

export const query = graphql`
  query solutionsQuery($id: ID!) {
    wordPress {
      hPageBy(id: $id) {
        databaseId
        title
        hPageLanguage {
          pageLanguage
        }
        hSolutionsPageFields {
          buildingArea {
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_Header {
              bodyCopy
              ctaGroup {
                text
                url
              }
              largeTitle
              sectionTitle
            }
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_LogoWallTicker {
              content
              logos {
                destinationUrl
                logo {
                  altText
                  sourceUrl
                }
              }
            }
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_Intro {
              bodyCopy
              isSecondary
              displayMode
              ctaGroup {
                text
                url
              }
              introCopy
              sectionTitle
              image {
                altText
                sourceUrl
              }
            }
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_ThreeColumnBlock {
              columns {
                title
                image {
                  altText
                  sourceUrl
                }
                bodyCopy
                ctaGroup {
                  url
                }
              }
            }
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_Divider {
              bgColor
              maskColor
            }
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_UserIdentification {
              content
              featuredText
              sectionTitle
              featuredImage {
                altText
                sourceUrl
              }
              flipCards {
                backContent
                backTitle
                frontTitle
                note
                backgroundImage {
                  altText
                  sourceUrl
                }
              }
            }

            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_ImageAndTextBlock {
              bodyCopy
              colorMode
              title
              ctaGroup {
                text
                url
              }
              icon {
                altText
                sourceUrl
              }
              image {
                altText
                sourceUrl
              }
              introCopy
              sectionTitle
              textAlign
            }
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_TabbedContent {
              tabs {
                ctaGroup {
                  text
                  url
                }
                image {
                  altText
                  sourceUrl
                }
                introCopy
                tabTitle
              }
            }
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_CenteredTextOrButton {
              text
              ctaGroup {
                text
                url
              }
            }
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_LogoWallStatic {
              title
              logos {
                destinationUrl
                logo {
                  altText
                  sourceUrl
                }
              }
            }
            ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_GetADemo {
              subTitle
              ctaGroup {
                text
                url
              }
              title
              image {
                altText
                sourceUrl
              }
              bgColor
              maskColor
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

// ... on WordPress_HPage_Hsolutionspagefields_BuildingArea_CaseStudySlider {
//   caseStudies {
//     ...CaseStudy
//   }
// }
