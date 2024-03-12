import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import MainLayout from "../layouts/Main";
import Intro from "Components/General/Intro/Intro";
import { GetLookbookDataById } from "utils/useLookbook";
import { GetTabCarouselDummyData } from "utils/lookbook-dummy-data";
import { GetTriggersDummyData } from "utils/lookbook-dummy-data";
import TabsComponent from "../UI/TabsComponent";
import RisingCurve from "../UI/SVGComponents/RisingCurve";
import Card from "../UI/Card";
import Button from "Components/Button/Button";
import Modal from "../UI/Modal";

const LookbookPost = props => {
  const { pageContext, data } = props;
  const lookbookData = GetLookbookDataById(data);
  const lang = pageContext.lang;

  /* DUMMY DATA */
  const tabInfoDummyData = GetTabCarouselDummyData();
  const triggersDummyData = GetTriggersDummyData();
  /* END DUMMY DATA */

  const [showTriggerVideo, setShowTriggerVideo] = useState(false);
  const [triggerVideoUrl, setTriggerVideoUrl] = useState(false);

  const handleShowTriggerVideo = (showVideo, videoUrl) => {
    setShowTriggerVideo(showVideo);
    setTriggerVideoUrl(videoUrl);
  };

  const onClose = () => {
    setShowTriggerVideo(false);
  };

  const [activeTab, setActiveTab] = useState(0);

  const onActiveTabChange = e => {
    setActiveTab(e);
  };

  useEffect(() => {
    setActiveTab(activeTab);
  }, [activeTab]);

  const triggerVideo = videoUrl => {
    return (
      <Modal isCentered={true} onClose={onClose}>
        <div className="text-center">
          <video className="video-wrapper" controls>
            <source src={videoUrl} type="video/mp4"></source>
            Your browser does not support HTML video.
          </video>
        </div>
      </Modal>
    );
  };

  return (
    <MainLayout
      style={{ backgroundColor: "#f5ebe1" }}
      lang="us"
      mainClass="main-resources "
      className="mask2"
      headerPattern="/images/patterns/pattern-04.svg"
      footerPattern="/images/patterns/pattern-04.svg"
      {...props}
    >
      {/* INTRO SECTION */}
      <Intro
        bgColor="#f5ebe1"
        color="#191919"
        maxWidth="669px"
        content={{
          sideHeading: lookbookData.industryName,
          title: `${lookbookData.title}: ${lookbookData.featureName}`,
        }}
        sorted={[]}
        list={[]}
      />

      {/* FIELDS DESCRIPTION SECTION */}
      <section className="pt-20" style={{ backgroundColor: "#f5ebe1" }}>
        <div className="fields-section container grid grid-cols-2 text-black">
          <div className="flex flex-col">
            <p
              className="text-2xl"
              dangerouslySetInnerHTML={{
                __html: lookbookData.industryDescription,
              }}
            >
              {/* {lookbookData.industryDescription || "no description"} */}
            </p>
            {lang === "uk" && (
              <p
                dangerouslySetInnerHTML={{
                  __html: lookbookData.ukFieldDescription,
                }}
              />
            )}
            {lang === "us" && (
              <p
                dangerouslySetInnerHTML={{
                  __html: lookbookData.usFieldDescription,
                }}
              />
            )}
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section
        className="showcase-section pt-40"
        style={{ backgroundColor: "#f5ebe1" }}
      >
        <div className="container grid grid-cols-2 text-black p-0">
          <div className="text-showcase text-white">Showcase</div>
          <p
            className="text-3xl font-wunder-brick-display mt-16"
            dangerouslySetInnerHTML={{
              __html: lookbookData.featureDescription,
            }}
          ></p>
        </div>
      </section>

      {/* TABS SECTION */}

      <section style={{ backgroundColor: "#f5ebe1" }} className="tabs-section">
        <TabsComponent
          data={lookbookData.lookbookTabInfo}
          sectionClasses="pt-20 font-larsseit bg-section"
          tabClasses="tab"
          contentClasses="content"
          activeClasses="active"
          innerContentClasses="page m-auto"
          activeTabChange={onActiveTabChange}
        />
      </section>

      {/* CAMPAINGN OPTIONS SECTION */}
      <section className={"campaign-section-wrapper"}>
        <div className="campaign-section container small-container grid text-black">
          <div
            className={`${
              activeTab === "0" ? "mt-4" : "mt-32"
            } flex flex-col mb-12`}
          >
            <p className="text-2xl font-bold m-0 mb-7">Campaign Options</p>
            <p className="text-lg m-0 mb-7">
              {lookbookData.inventoryTypeCampaignOptions[0] ||
                "no campaign options"}
            </p>
            <p className="text-lg m-0 mb-16">
              {lookbookData.inventoryTypeCampaignOptions[2] ||
                "no campaign options"}
            </p>
          </div>
        </div>
      </section>

      {/* TECHNICAL REQUIREMENTS OPTIONS SECTION */}
      <section
        style={{ backgroundColor: "#f5ebe1" }}
        className={`${activeTab === "0" ? "mt-0" : "pt-56"}`}
      >
        <div className="tech-req-section container small-container grid text-black">
          <div className="flex flex-col mb-12">
            <p className="text-2xl font-bold m-0 mb-7">
              Technical Requirements
            </p>
            <p className="text-lg m-0 mb-7">
              {lookbookData.featuresExtraFields.technicalRequirements[0] || ""}
            </p>
            <p className="text-lg m-0 mb-7 font-bold">
              {lookbookData.featuresExtraFields.technicalRequirements[2] || ""}
            </p>
            <p className="text-lg m-0 mb-7">
              {lookbookData.featuresExtraFields.technicalRequirements[4] || ""}
            </p>
            <p className="text-lg m-0 mb-7">
              {lookbookData.featuresExtraFields.technicalRequirements[6] || ""}
            </p>
            <p className="text-lg m-0 mb-7">
              {lookbookData.featuresExtraFields.technicalRequirements[8] || ""}
            </p>
            <p className="text-lg m-0 mb-7">
              {lookbookData.featuresExtraFields.technicalRequirements[10] || ""}
            </p>
          </div>
        </div>
      </section>

      {/* SPECS CSV SECTION */}
      <section style={{ backgroundColor: "#f5ebe1" }}>
        <div className="specs-btn-wrapper container small-container grid text-black">
          <div className="flex gap-7 mb-12">
            <Button
              href={
                lang === "uk"
                  ? lookbookData.csvTemplateUrlUk
                  : lookbookData.csvTemplateUrlUs
              }
              className="btn-dark cta-btn"
              lang={props.lang}
            >
              Specs CSV
            </Button>
            <Button
              href={lookbookData.featuresExtraFields.pdfTemplateUrl}
              className="btn-dark cta-btn"
              lang={props.lang}
            >
              PSD Templates
            </Button>
          </div>
        </div>
        <div className="curve">
          <RisingCurve fillColor="#191919" />
        </div>
      </section>

      {/* TRIGGERS SECTION */}
      <section className="mt-40">
        <div className="container text-white text-3xl text-center mb-20">
          <p className="font-wunder-brick-display">
            Our ad technology knows when you
            <br /> have your audience’s attention
          </p>
        </div>
        {showTriggerVideo && triggerVideo(triggerVideoUrl)}
        <div className="triggers-section container grid grid-cols-3 gap-8 mb-40 gap-y-24">
          {triggersDummyData.map((trigger, index) => {
            return (
              <div className="text-center" key={index}>
                <div className="relative">
                  <img
                    className="triggers-images ui-card-image rounded rounded-b-none h-auto"
                    alt={"Branded Card Logo"}
                    src={trigger.imageUrl}
                  />{" "}
                  <img
                    onClick={() =>
                      handleShowTriggerVideo(true, trigger.videoUrl)
                    }
                    className="expand-trigger-video"
                    src="/images/lookbook/ads-lookbook_expand-arrows.svg"
                  />
                </div>
                <div>
                  <p className="font-wunder-brick-display text-3xl">
                    {trigger.title}
                  </p>
                  <p className="mb-8">{trigger.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="curve">
          <RisingCurve fillColor="#303d78" />
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ backgroundColor: "#303d78" }}>
        <div className="cta-section container grid grid-cols-2 gap-40 mb-32">
          <div className="flex flex-col">
            <p className="font-wunder-brick-display cta-title mb-4">
              Request a demo today
            </p>
            <p className="mb-8">
              Chat to one of our experts about delivering an unparalleled
              user-first ad experience with WunderKIND Ads
            </p>
            <Button
              href="/resources/get-a-demo/"
              className="btn-dark cta-btn"
              lang={props.lang}
            >
              Get Started
            </Button>
          </div>
          <div className="self-center">
            <img
              className="mt-16"
              src="https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/ads-lookbook_ctaSectionImage.png"
            />
          </div>
        </div>

        <div className="cta-pattern-section">
          <img
            className="w-full max-h-full"
            src="/images/patterns/pattern-01.png"
          />
        </div>
      </section>

      {/* RELATED CAMPAIGNS SECTION */}
      {lookbookData.relatedLookbooks.length > 0 && (
        <section className="mb-40 mt-40" style={{ backgroundColor: "#191919" }}>
          <div className="container text-center">
            <div className="mb-20">
              <p className="font-wunder-brick-display text-5xl">
                Check out these related campaigns
              </p>
            </div>
            <div className="cards-grid grid grid-cols-3 gap-6 text-left">
              {lookbookData.relatedLookbooks.map((item, index) => {
                return (
                  <Card
                    key={index}
                    imageUrl={item.featuredImage?.mediaItemUrl}
                    firstSection={item.hLookbookIndustries.edges[0]?.node.name}
                    secondSection={item.title}
                    thirdSection={item.hLookbookFeatures.edges[0]?.node.name}
                    url="/lookbook"
                    item={item}
                  />
                );
              })}
            </div>
            <div></div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default LookbookPost;

export const query = graphql`
  query lookbookQuery($id: ID!) {
    wordPress {
      hLookbookBy(id: $id) {
        id
        title
        slug
        hLookbookFieldsUs {
          fieldGroupName
          lbDescription
          lbTemplateUrl
          lbAdSize1
          lbAdSize2
          lbAdSize3
          lbAdSize4
        }
        hLookbookFieldsUk {
          fieldGroupName
          lbDescriptionUk
          lbTemplateUrlUk
          lbAdSize1Uk
          lbAdSize2Uk
          lbAdSize3Uk
          lbAdSize4Uk
        }
        hLookbookIndustries {
          nodes {
            hLookbooks {
              nodes {
                id
                slug
                title
                hLookbookFeatures {
                  edges {
                    node {
                      name
                    }
                  }
                }
                hLookbookIndustries {
                  edges {
                    node {
                      name
                    }
                  }
                }
                featuredImage {
                  mediaItemUrl
                }
              }
            }
          }
          edges {
            node {
              id
              name
              description
            }
          }
        }
        hLookbookFeatures {
          edges {
            node {
              id
              name
              description
              hLookbookFeaturesExtraFields {
                pdfTemplateUrl
                technicalRequirements
              }
              hLookbooks {
                nodes {
                  id
                  title
                  slug
                  featuredImage {
                    mediaItemUrl
                  }
                  hLookbookFeatures {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                  hLookbookIndustries {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        hLookbookInventoryTypes {
          edges {
            node {
              id
              name
              databaseId
              hLookbookInventoryTypesExtraFields {
                campaignOptions
              }
              hLookbooks {
                edges {
                  node {
                    id
                    title
                    slug
                    featuredImage {
                      mediaItemUrl
                    }
                    hLookbookFeatures {
                      edges {
                        node {
                          name
                        }
                      }
                    }
                    hLookbookIndustries {
                      edges {
                        node {
                          name
                        }
                      }
                    }
                    hLookbookInventoryTypes {
                      edges {
                        node {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
