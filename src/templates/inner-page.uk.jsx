import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";

//General Components
import Button from "Components/Button/Button";
import Overview from "Components/General/Overview/Overview";
import Intro from "Components/General/Intro/Intro";
import RequestDemo from "Components/General/RequestDemo/RequestDemo";
import Divider from "Components/General/Divider/Divider";
import TwoColumns from "Components/General/ContentBeforeFooter/TwoColumns";
import IllustrationContent from "Components/General/ContentBeforeFooter/IllustrationContent";

//About Us Components
import CenteredTitle from "Components/General/CenteredTitle/CenteredTitle";
import Testimonial from "Components/General/Testimonial/Testimonial";
import StaffGallery from "Components/General/StaffGallery/StaffGallery";
import LogoWallStatic from "Components/General/LogoWallStatic/LogoWallStatic";
import ImageAndText from "Components/General/ImageAndText/ImageAndText";
import ThreeColumnBlock from "Components/General/ThreeColumnBlock/ThreeColumnBlock";
import Gallery from "Components/General/Gallery/Gallery";
import GroupedThreeColumnBlock from "Components/General/ThreeColumnBlock/GroupedThreeColumnBlock";

import GetHeaderFooterData from "utils/useHeaderFooterTemplates";
import LogoTable from "../Components/General/LogoTable/LogoTable";
import MarketoFormSection from "../Components/General/MarketoFormSection/MarketoFormSection";

function getInnerWPData(data) {
  return data && data.wordPress && data.wordPress.hPageBy;
}

function getInnerSectionData(data) {
  return (
    data && data.hInnerPageFieldsUk && data.hInnerPageFieldsUk.ukBuildingArea
  );
}

function InnerTemplate(props) {
  const { data } = props;

  const pageData = getInnerWPData(data);
  const sections = getInnerSectionData(pageData);

  const patterns = GetHeaderFooterData(data);
  const headerPattern = patterns.header && patterns.header.sourceUrl;
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;

  return (
    <MainLayout
      lang={"uk"}
      mainClass="about-us"
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
            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Header":
              return (
                <Intro
                  key={"section-" + index}
                  className="general_intro"
                  colClass="col-md-8"
                  content={{
                    sideHeading: section.sectionTitle,
                    title: section.largeTitle,
                    subtitle: section.bodyCopy,
                    button: {
                      label: section.ctaGroup.text,
                      link: section.ctaGroup.url,
                    },
                  }}
                  lang={"uk"}
                  sorted={[]}
                  list={[]}
                ></Intro>
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Intro":
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
                    icon: section.icon && section.icon.sourceUrl,
                    image: section.image && section.image.sourceUrl,
                    button: {
                      label: section.ctaGroup.text,
                      link: section.ctaGroup.url,
                    },
                  }}
                  lang={"uk"}
                />
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_ImageAndTextBlock":
              return (
                <ImageAndText
                  className="section-role-locations"
                  sectionIndex={index}
                  key={"section-" + index}
                  dark={section.colorMode === "dark"}
                  {...section}
                  lang={"uk"}
                />
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_LogoWallStatic":
              return (
                <LogoWallStatic
                  {...section}
                  key={"section-" + index}
                  lang={"uk"}
                ></LogoWallStatic>
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_ThreeColumnsContent":
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
                  sectionIndex={index}
                  key={"section-" + index}
                  content={content}
                  lang={"uk"}
                />
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_CenteredTextOrButton":
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
                        lang={"uk"}
                      >
                        {section.ctaGroup.text}
                      </Button>
                    </div>
                  )}
                </div>
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_GroupedThreeColumnsContent":
              const cols = (section.columns || []).map(col => {
                return {
                  title: col.title,
                  image: col.image && col.image.sourceUrl,
                  subtitle: col.bodyCopy,
                };
              });

              return (
                <GroupedThreeColumnBlock
                  className="culture-benefits"
                  key={"section-" + index}
                >
                  {section.text && (
                    <CenteredTitle>{section.text}</CenteredTitle>
                  )}

                  <div className="desktop-cols">
                    <ThreeColumnBlock content={cols} lang={"uk"} />
                  </div>

                  <div className="mobile-cols">
                    <ThreeColumnBlock content={cols} lang={"uk"} />
                  </div>

                  {section.ctaGroup &&
                    section.ctaGroup.text &&
                    section.ctaGroup.url && (
                      <div className="btn-wrap">
                        <Button
                          href={section.ctaGroup.url}
                          className="btn-fill-dark"
                          lang={"uk"}
                        >
                          {section.ctaGroup.text}
                        </Button>
                      </div>
                    )}
                </GroupedThreeColumnBlock>
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_StaffGallery":
              return (
                <StaffGallery
                  {...section}
                  key={"section-" + index}
                  lang={"uk"}
                />
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Testimonials":
              return (
                <Testimonial
                  key={"section-" + index}
                  {...section}
                  dark={section.displayMode === "dark"}
                  lang={"uk"}
                />
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Divider":
              return (
                <Divider
                  additionalClass={section.additionalClass}
                  key={"section-" + index}
                  bgColor={section.bgColor}
                  maskColor={section.maskColor}
                  direction={section.position + "-" + section.orientation}
                />
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_RequestADemo":
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
                  lang={"uk"}
                />
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_PromoBlock":
              return (
                <TwoColumns {...section} key={"section-" + index} lang={"uk"} />
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_BrandBlock":
              return (
                <IllustrationContent
                  {...section}
                  key={"section-" + index}
                  lang={"uk"}
                />
              );

            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Gallery":
              return (
                <Gallery
                  key={"section-" + index}
                  dark={section.displayMode === "dark"}
                  navArrows={section.displayArrows}
                  {...section}
                  lang={"uk"}
                />
              );
            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_LogoTable":
              return <LogoTable key={"section-" + index} {...section} />;
            case "WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_MarketoForm":
              return (
                <MarketoFormSection
                  key={"section-" + index}
                  submissionMessage={
                    "Thank you! You've successfully filled out the form. We'll be in contact with you shortly."
                  }
                  {...section}
                />
              );
            default:
              return <></>;
          }
        })}
    </MainLayout>
  );
}

export default InnerTemplate;

export const query = graphql`
  query innerPageUkQuery($id: ID!) {
    wordPress {
      hPageBy(id: $id) {
        databaseId
        title
        hPageLanguage {
          pageLanguage
        }
        hInnerPageFieldsUk {
          ukBuildingArea {
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Header {
              bodyCopy
              ctaGroup {
                text
                url
              }
              largeTitle
              sectionTitle
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Intro {
              bodyCopy
              displayMode
              sectionTitle
              introCopy
              isSecondary
              image {
                altText
                sourceUrl
              }
              ctaGroup {
                text
                url
              }
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_ImageAndTextBlock {
              bodyCopy
              colorMode
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
              title
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_LogoWallStatic {
              title
              logos {
                destinationUrl
                logo {
                  altText
                  sourceUrl
                }
              }
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_ThreeColumnsContent {
              columns {
                title
                bodyCopy
                ctaGroup {
                  text
                  url
                }
                image {
                  altText
                  sourceUrl
                }
              }
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_CenteredTextOrButton {
              text
              ctaGroup {
                url
                text
              }
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_GroupedThreeColumnsContent {
              text
              ctaGroup {
                url
                text
              }
              columns {
                title
                bodyCopy
                ctaGroup {
                  text
                  url
                }
                image {
                  altText
                  sourceUrl
                }
              }
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Testimonials {
              slides {
                bodyCopy
                title
                image {
                  altText
                  sourceUrl
                }
                person {
                  name
                  jobTitle
                  avatar {
                    altText
                    sourceUrl
                  }
                }
              }
              displayMode
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Divider {
              bgColor
              maskColor
              orientation
              position
              additionalClass
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_StaffGallery {
              staffMembers {
                biography
                jobPosition
                name
                image {
                  altText
                  sourceUrl
                }
              }
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_RequestADemo {
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
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_PromoBlock {
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
                title
                image {
                  altText
                  sourceUrl
                }
              }
              secondColumn {
                content
                ctaGroup {
                  text
                  url
                }
                title
                image {
                  altText
                  sourceUrl
                }
              }
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_BrandBlock {
              text
              ctaGroup {
                text
                url
              }
              image {
                altText
                sourceUrl
              }
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_Gallery {
              slides {
                image {
                  altText
                  sourceUrl
                }
                imageCaptions
              }
              displayMode
              displayArrows
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_LogoTable {
              bgColor
              title
              subtitle
              subtitleImage {
                altText
                sourceUrl
              }
              logos {
                logo {
                  altText
                  sourceUrl
                }
              }
            }
            ... on WordPress_HPage_Hinnerpagefieldsuk_UkBuildingArea_MarketoForm {
              copy
              formId
              title
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
