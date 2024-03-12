import React, { useEffect } from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";

//General Components
import Intro from "Components/General/Intro/Intro";
import RequestDemo from "Components/General/RequestDemo/RequestDemo";
import TwoColumns from "Components/General/ContentBeforeFooter/TwoColumns";
import IllustrationContent from "Components/General/ContentBeforeFooter/IllustrationContent";
import Divider from "Components/General/Divider/Divider";

//Resrouces Components
import ResourcesComponent from "Components/Page/Resources/Resources/Resources";
import GetResourcesData from "utils/useResources";

function Resources(props) {
  const { data } = props;
  const { pageData, resourcesData } = GetResourcesData(data, "uk");
  const sections = pageData.hResourcesPageFieldsUk.ukBuildingArea;

  const resourcesCategoriesUrlQueryFilterMap = new Map([
    ["All", ""],
    ["Case%20Studies", "case-studies"],
    ["Research%20Studies", "research-study"],
    ["Guides", "guides"],
    ["Webinars", "webinars"],
    ["Podcasts", "podcasts"],
  ]);

  const shouldRedirect = () => {
    if (!(typeof window !== `undefined`)) {
      return false;
    }
    const { pathname, search } = window.location;
    if (pathname === "/uk/resources/" && search !== "") {
      return true;
    }
    return false;
  };

  const getRedirectUrl = () => {
    const { pathname, search } = window.location;
    const mappedFilter =
      resourcesCategoriesUrlQueryFilterMap.get(
        search.substring(search.indexOf("=") + 1)
      ) || "";
    return `${pathname}${mappedFilter}${mappedFilter !== "" ? "/" : ""}`;
  };

  useEffect(() => {
    if (shouldRedirect()) {
      window.location.replace(getRedirectUrl());
    }
  }, []);

  return shouldRedirect() ? (
    ""
  ) : (
    <MainLayout
      lang="uk"
      headerPattern="/images/patterns/pattern-02.svg"
      footerPattern="/images/patterns/pattern-02.svg"
      seoMeta={pageData.seo}
      languages={pageData.hPageLanguage?.pageLanguage}
      {...props}
    >
      {sections.map((section, index) => {
        const typeName = section.__typename;

        switch (typeName) {
          case "WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_Header":
            return (
              <Intro
                key={"section-" + index}
                content={{
                  sideHeading: section.sectionTitle,
                  title: section.largeTitle,
                  subtitle: section.bodyCopy,
                }}
                lang={"uk"}
                {...resourcesData}
              />
            );
          case "WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_ResroucesSection":
            return (
              <ResourcesComponent
                key={"section-" + index}
                {...resourcesData}
                lang={"uk"}
              />
            );
          case "WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_RequestADemo":
            return (
              <RequestDemo
                key={"section-" + index}
                content={{
                  title: section.title,
                  subtitle: section.subTitle,
                  button: {
                    label: section.ctaGroup.text,
                    link: section.ctaGroup.url,
                  },
                  image:
                    (section.image && section.image.sourceUrl) ||
                    "/images/illustrations/request-demo.svg",
                }}
                maskColor={section.maskColor || "#191919"}
                bgColor={section.bgColor || "#3D55CC"}
                dark={true}
                lang={"uk"}
              />
            );
          case "WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_PromoBlock":
            return (
              <TwoColumns {...section} key={"section-" + index} lang={"uk"} />
            );
          case "WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_Divider":
            return (
              <Divider
                additionalClass="yellow-divider"
                key={"section-" + index}
                bgColor={section.bgColor || "#ffbb00"}
                maskColor={section.maskColor || "#F5EBE1"}
                direction="top-right"
              />
            );
          case "WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_BrandBlock":
            return (
              <IllustrationContent
                {...section}
                key={"section-" + index}
                lang={"uk"}
              />
            );
          default:
            return <></>;
        }
      })}
    </MainLayout>
  );
}

export default Resources;

export const query = graphql`
  {
    wordPress {
      hPageTemplates(where: { slug: "resources" }) {
        nodes {
          hPages {
            nodes {
              databaseId
              title
              hPageLanguage {
                pageLanguage
              }
              hResourcesPageFieldsUk {
                ukBuildingArea {
                  __typename
                  ... on WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_Header {
                    bodyCopy
                    largeTitle
                    sectionTitle
                    ctaGroup {
                      text
                      url
                    }
                  }
                  ... on WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_ResroucesSection {
                    displayOnFront
                    featuredResource {
                      ... on WordPress_HResrource {
                        id
                        slug
                        hResourcesDataUK {
                          sectionTitleUk
                          featuredSentenceUk
                          logoUk {
                            sourceUrl
                            altText
                          }
                          cardBackgroundUk {
                            altText
                            sourceUrl
                          }
                          cardBackgroundColorUk
                          cardTitleUk
                          marketoFormIdUk
                        }
                        hResourceTypes {
                          nodes {
                            name
                            slug
                          }
                        }
                        hResourceLanguage {
                          resourceLanguage
                        }
                        title
                        modified
                      }
                    }
                    pinnedResources {
                      ... on WordPress_HResrource {
                        id
                        slug
                        hResourcesDataUK {
                          sectionTitleUk
                          featuredSentenceUk
                          logoUk {
                            sourceUrl
                            altText
                          }
                          cardBackgroundUk {
                            altText
                            sourceUrl
                          }
                          cardBackgroundColorUk
                          cardTitleUk
                          marketoFormIdUk
                        }
                        hResourceTypes {
                          nodes {
                            name
                            slug
                          }
                        }
                        hResourceLanguage {
                          resourceLanguage
                        }
                        title
                        modified
                        hResourceTermCategory {
                          resourcesTermCategory {
                            ... on WordPress_Category {
                              name
                              slug
                            }
                          }
                        }
                        hResourcePostURL {
                          customUrl
                        }
                      }
                    }
                  }
                  ... on WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_Divider {
                    bgColor
                    maskColor
                  }
                  ... on WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_RequestADemo {
                    bgColor
                    ctaGroup {
                      url
                      text
                    }
                    image {
                      altText
                      sourceUrl
                    }
                    maskColor
                    subTitle
                    title
                  }
                  ... on WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_PromoBlock {
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
                      image {
                        altText
                        sourceUrl
                      }
                      ctaGroup {
                        text
                        url
                      }
                      title
                    }
                    backgroundImage {
                      altText
                      sourceUrl
                    }
                    bgColor
                  }
                  ... on WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_BrandBlock {
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
              seo {
                ...SeoMeta
              }
            }
          }
        }
      }
      hResrources(first: 500) {
        nodes {
          id
          slug
          hResourcesDataUK {
            sectionTitleUk
            featuredSentenceUk
            logoUk {
              sourceUrl
              altText
            }
            cardBackgroundUk {
              altText
              sourceUrl
            }
            cardBackgroundColorUk
            cardTitleUk
            marketoFormIdUk
          }
          hResourceTypes {
            nodes {
              name
              slug
            }
          }
          hResourceLanguage {
            resourceLanguage
          }
          title
          modified
          hResourceTermCategory {
            resourcesTermCategory {
              ... on WordPress_Category {
                name
                slug
              }
            }
          }
          hResourcePostURL {
            customUrl
          }
        }
      }
      podcasts(first: 500) {
        nodes {
          slug
          id
          modified
          hResourceLanguage {
            resourceLanguage
          }
          PodcastFieldsUK {
            pcHeroTitleUk
          }
          hResourcePostURL {
            customUrl
          }
          hResourceTermCategory {
            resourcesTermCategory {
              ... on WordPress_Category {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;
