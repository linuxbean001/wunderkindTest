import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";
import "../template-styles/culture.scss";
import CultureBgImg from "../../static/images/culture-image.png";
import BlackSemiCircle from "../../static/images/Black-Semi-Circle_vector.svg";

//General Components
import Button from "Components/Button/Button";
import Overview from "Components/General/Overview/Overview";
import Intro from "Components/General/Intro/Intro";
import RequestDemo from "Components/General/RequestDemo/RequestDemo";
import Divider from "Components/General/Divider/Divider";
import TwoColumns from "Components/General/ContentBeforeFooter/TwoColumns";
import IllustrationContent from "Components/General/ContentBeforeFooter/IllustrationContent";

//About Us Components
import Gallery from "Components/General/Gallery/Gallery";
import Testimonial from "Components/General/Testimonial/Testimonial";
import ImageAndText from "Components/General/ImageAndText/ImageAndText";
import CenteredTitle from "Components/General/CenteredTitle/CenteredTitle";
import ThreeColumnBlock from "Components/General/ThreeColumnBlock/ThreeColumnBlock";
import GroupedThreeColumnBlock from "Components/General/ThreeColumnBlock/GroupedThreeColumnBlock";

import GetHeaderFooterDataPages from "utils/useHeaderFooterTemplates";

function getInnerWPData(data) {
  return data && data.wordPress && data.wordPress.hPageBy;
}

function getInnerSectionData(data) {
  return data && data.hCultureFields && data.hCultureFields.buildingArea;
}

function CultureTemplate(props) {
  const { data } = props;

  const pageData = getInnerWPData(data);
  const sections = getInnerSectionData(pageData);

  const patterns = GetHeaderFooterDataPages(data);
  const headerPattern = patterns.header && patterns.header.sourceUrl;
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;

  return (
    <MainLayout
      lang="us"
      mainClass="about-us inclusion"
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
            case "WordPress_HPage_Hculturefields_BuildingArea_Header":
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
                  sorted={[]}
                  list={[]}
                ></Intro>
              );

            case "WordPress_HPage_Hculturefields_BuildingArea_Intro":
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
                />
              );

            case "WordPress_HPage_Hculturefields_BuildingArea_CentredTextOrButton":
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
                      >
                        {section.ctaGroup.text}
                      </Button>
                    </div>
                  )}
                </div>
              );

            case "WordPress_HPage_Hculturefields_BuildingArea_ImageAndTextBlock":
              return (
                <ImageAndText
                  key={"section-" + index}
                  className={`our-values ${
                    section.colorMode == "dark" ? "dark-bg" : ""
                  }`}
                  sectionIndex={index}
                  {...section}
                />
              );

            case "WordPress_HPage_Hculturefields_BuildingArea_Testimonials":
              return (
                <Testimonial
                  key={"section-" + index}
                  {...section}
                  dark={section.displayMode === "dark"}
                />
              );

            case "WordPress_HPage_Hculturefields_BuildingArea_Divider":
              return (
                <Divider
                  additionalClass={section.additionalClass}
                  key={"section-" + index}
                  bgColor={`#f5ebe1`}
                  maskColor={`#f5ebe1`}
                  direction={section.position + "-" + section.orientation}
                />
              );

            case "WordPress_HPage_Hculturefields_BuildingArea_RequestADemo":
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
                />
              );

            case "WordPress_HPage_Hculturefields_BuildingArea_PromoBlock":
              return <TwoColumns {...section} key={"section-" + index} />;

            case "WordPress_HPage_Hculturefields_BuildingArea_BrandBlock":
              return (
                <IllustrationContent {...section} key={"section-" + index} />
              );

            case "WordPress_HPage_Hculturefields_BuildingArea_Gallery":
              return (
                <Gallery
                  key={"section-" + index}
                  dark={section.displayMode === "dark"}
                  navArrows={section.displayArrows}
                  {...section}
                />
              );

            case "WordPress_HPage_Hculturefields_BuildingArea_ThreeColumnsContent":
              const cols = (section.columns || []).map(col => {
                return {
                  title: col.title,
                  image: col.image && col.image.sourceUrl,
                  subtitle: col.bodyCopy,
                };
              });

              return (
                <>
                  <img
                    className="culture-bg-img"
                    src={CultureBgImg}
                    alt="background"
                  />
                  <img
                    className="culture-semi-circle"
                    src={BlackSemiCircle}
                    alt="background"
                  />
                  <div className="container">
                    <div className="full-page-container">
                      <div className="header-desc-container">
                        <h2 className="culture-main-header">
                          Benefits and Perks to Enrich Your Wunderfull Life
                        </h2>
                        <p className="culture-description">
                          We believe Wunderkinds thrive when they and their
                          families are recognized as individuals. Your
                          Wunderfull Life is our online benefits and perks guide
                          showcasing our diverse, comprehensive, and uniquely
                          customizable set of benefits from the world’s leading
                          carriers.
                        </p>
                      </div>
                      <div className="small-desc-btn-container">
                        <p className="culture-small-desc">
                          Want to learn more about what Wunderkind has to offer?
                        </p>
                        <a
                          href="https://dbg.nfp.com/ywl-prospects/"
                          target="_blank"
                        >
                          <Button className="culture-btn">
                            View all our offerings
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );

            default:
              return <></>;
          }
        })}
    </MainLayout>
  );
}

export default CultureTemplate;

export const query = graphql`
  query cultureQuery($id: ID!) {
    wordPress {
      hPageBy(id: $id) {
        databaseId
        title
        hPageLanguage {
          pageLanguage
        }
        hCultureFields {
          buildingArea {
            ... on WordPress_HPage_Hculturefields_BuildingArea_Header {
              bodyCopy
              ctaGroup {
                text
                url
              }
              largeTitle
              sectionTitle
            }
            ... on WordPress_HPage_Hculturefields_BuildingArea_Intro {
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
            ... on WordPress_HPage_Hculturefields_BuildingArea_ImageAndTextBlock {
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
            ... on WordPress_HPage_Hculturefields_BuildingArea_Testimonials {
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
            ... on WordPress_HPage_Hculturefields_BuildingArea_Divider {
              bgColor
              maskColor
              orientation
              position
              additionalClass
            }
            ... on WordPress_HPage_Hculturefields_BuildingArea_RequestADemo {
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
            ... on WordPress_HPage_Hculturefields_BuildingArea_PromoBlock {
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
            ... on WordPress_HPage_Hculturefields_BuildingArea_BrandBlock {
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
            ... on WordPress_HPage_Hculturefields_BuildingArea_Gallery {
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
            ... on WordPress_HPage_Hculturefields_BuildingArea_ThreeColumnsContent {
              text
              ctaGroup {
                text
                url
              }
              columns {
                ctaGroup {
                  text
                  url
                }
                image {
                  altText
                  sourceUrl
                }
                bodyCopy
                title
              }
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
