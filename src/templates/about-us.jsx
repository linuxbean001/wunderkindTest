import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";

//General Components
import Overview from "Components/General/Overview/Overview";
import Intro from "Components/General/Intro/Intro";
import RequestDemo from "Components/General/RequestDemo/RequestDemo";
import Divider from "Components/General/Divider/Divider";
import TwoColumns from "Components/General/ContentBeforeFooter/TwoColumns";
import IllustrationContent from "Components/General/ContentBeforeFooter/IllustrationContent";

//About Us Components
import Testimonial from "Components/General/Testimonial/Testimonial";
import StaffGallery from "Components/General/StaffGallery/StaffGallery";
import LogoWallStatic from "Components/General/LogoWallStatic/LogoWallStatic";
import ImageAndText from "Components/General/ImageAndText/ImageAndText";

import GetHeaderFooterDataPages from "utils/useHeaderFooterTemplates";

function getInnerWPData(data) {
  return data && data.wordPress && data.wordPress.hPageBy;
}

function getInnerSectionData(data) {
  return data && data.hAboutUsFields && data.hAboutUsFields.buildingArea;
}

function InnerTemplate(props) {
  const { data } = props;

  const pageData = getInnerWPData(data);
  const sections = getInnerSectionData(pageData);

  const patterns = GetHeaderFooterDataPages(data);
  const headerPattern = patterns.header && patterns.header.sourceUrl;
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;

  return (
    <MainLayout
      lang="us"
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
            case "WordPress_HPage_Haboutusfields_BuildingArea_Header":
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

            case "WordPress_HPage_Haboutusfields_BuildingArea_Intro":
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

            case "WordPress_HPage_Haboutusfields_BuildingArea_ImageAndTextBlock":
              return (
                <ImageAndText
                  className="section-role-locations"
                  sectionIndex={index}
                  key={"section-" + index}
                  dark={section.colorMode === "dark"}
                  {...section}
                />
              );

            case "WordPress_HPage_Haboutusfields_BuildingArea_LogoWallStatic":
              return (
                <LogoWallStatic
                  {...section}
                  key={"section-" + index}
                ></LogoWallStatic>
              );

            case "WordPress_HPage_Haboutusfields_BuildingArea_StaffGallery":
              return <StaffGallery {...section} key={"section-" + index} />;

            case "WordPress_HPage_Haboutusfields_BuildingArea_Testimonials":
              return (
                <Testimonial
                  key={"section-" + index}
                  {...section}
                  dark={section.displayMode === "dark"}
                />
              );

            case "WordPress_HPage_Haboutusfields_BuildingArea_Divider":
              return (
                <Divider
                  additionalClass={section.additionalClass}
                  key={"section-" + index}
                  bgColor={section.bgColor}
                  maskColor={section.maskColor}
                  direction={section.position + "-" + section.orientation}
                />
              );

            case "WordPress_HPage_Haboutusfields_BuildingArea_RequestADemo":
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
                  maskColor={section.maskColor}
                  bgColor={section.bgColor}
                  dark={true}
                />
              );

            case "WordPress_HPage_Haboutusfields_BuildingArea_PromoBlock":
              return <TwoColumns {...section} key={"section-" + index} />;

            case "WordPress_HPage_Haboutusfields_BuildingArea_BrandBlock":
              return (
                <IllustrationContent {...section} key={"section-" + index} />
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
  query aboutUsQuery($id: ID!) {
    wordPress {
      hPageBy(id: $id) {
        databaseId
        title
        hPageLanguage {
          pageLanguage
        }
        hAboutUsFields {
          buildingArea {
            ... on WordPress_HPage_Haboutusfields_BuildingArea_Header {
              bodyCopy
              ctaGroup {
                text
                url
              }
              largeTitle
              sectionTitle
            }
            ... on WordPress_HPage_Haboutusfields_BuildingArea_Intro {
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
            ... on WordPress_HPage_Haboutusfields_BuildingArea_ImageAndTextBlock {
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
            ... on WordPress_HPage_Haboutusfields_BuildingArea_LogoWallStatic {
              title
              logos {
                destinationUrl
                logo {
                  altText
                  sourceUrl
                }
              }
            }
            ... on WordPress_HPage_Haboutusfields_BuildingArea_Testimonials {
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
            ... on WordPress_HPage_Haboutusfields_BuildingArea_Divider {
              bgColor
              maskColor
              orientation
              position
              additionalClass
            }
            ... on WordPress_HPage_Haboutusfields_BuildingArea_StaffGallery {
              staffMembers {
                biography
                jobPosition
                name
                image {
                  altText
                  sourceUrl
                }
                sillyPhotos {
                  photo {
                    altText
                    sourceUrl
                  }
                }
              }
            }
            ... on WordPress_HPage_Haboutusfields_BuildingArea_RequestADemo {
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
            ... on WordPress_HPage_Haboutusfields_BuildingArea_PromoBlock {
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
            ... on WordPress_HPage_Haboutusfields_BuildingArea_BrandBlock {
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
