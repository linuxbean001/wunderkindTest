import React from "react";
import SimpleCarousel from "../UI/SimpleCarousel";
import MobileFrame from "../UI/SVGComponents/AdsSlider/MobileFrame";
import NotebookFrame1 from "../UI/SVGComponents/AdsSlider/NotebookFrame1";
import NotebookFrame2 from "../UI/SVGComponents/AdsSlider/NotebookFrame2";

const getDataArray = data => {
  return data !== undefined ? data.map(edge => edge.node) : [];
};

function GetLookbookData(data, lang = "us") {
  let pageData = data.wordPress;
  let lookbooks = pageData && pageData.hLookbooks && pageData.hLookbooks.nodes;
  let categoriesData =
    pageData &&
    pageData.hLookbookInventoryTypes &&
    pageData.hLookbookInventoryTypes.edges;
  let featuresData =
    pageData && pageData.hLookbookFeatures && pageData.hLookbookFeatures.edges;

  let industriesData =
    pageData &&
    pageData.hLookbookIndustries &&
    pageData.hLookbookIndustries.edges;

  let categories = getDataArray(categoriesData);
  let features = getDataArray(featuresData);
  let industries = getDataArray(industriesData);

  return { lookbooks, categories, features, industries };
}

const filterRelatedLookbooks = data => {
  const relatedbyIndustry = data.wordPress.hLookbookBy.hLookbookIndustries.nodes[0].hLookbooks.nodes.filter(
    lb => lb.id !== data.wordPress.hLookbookBy.id
  );

  const relatedbyFeature = data.wordPress.hLookbookBy.hLookbookFeatures.edges[0].node.hLookbooks.nodes.filter(
    node => node.id !== data.wordPress.hLookbookBy.id
  );

  const relatedByInventoryType = data.wordPress.hLookbookBy.hLookbookInventoryTypes.edges[0].node.hLookbooks.edges
    .filter(edge => edge.node.id !== data.wordPress.hLookbookBy.id)
    .map(node => node.node);

  const filteredLookbooks =
    relatedbyIndustry.length < 3
      ? relatedbyIndustry
          .concat(relatedbyFeature)
          .concat(relatedByInventoryType)
      : relatedbyIndustry;

  return filteredLookbooks.slice(0, 3);
};

const getLookbookAdsInfo = (usFields, ukFields) => {
  const adFieldsNames = Object.keys(usFields).filter(
    field => field.includes("Ad") && field
  );

  const adsInfo = [];

  adFieldsNames.forEach(fieldName => {
    if (usFields[fieldName] !== "") {
      switch (fieldName) {
        case "lbAdSize1":
          const desktopOverlay = {
            type: "Desktop",
            backdropImg:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/desktop-overlay.png",
            innerHtml: usFields[fieldName],
            frame: 1,
            adInfo: {
              title: "Desktop Overlay",
              dimensions: "Dimensions: 900px x 600px",
            },
            addContainerStyle: "lb-ad-size-1",
          };
          adsInfo.push(desktopOverlay);
          break;
        case "lbAdSize3":
          const desktopMastHead = {
            type: "Desktop",
            backdropImg:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/desktop-masthead.png",
            innerHtml: usFields[fieldName],
            frame: 2,
            adInfo: {
              title: "Desktop Masthead",
              dimensions: "Dimensions: 1920px x 480px",
            },
            addContainerStyle: "lb-ad-size-3",
          };
          adsInfo.push(desktopMastHead);
          break;
        case "lbAdSize2":
          const mobileOverlay = {
            type: "Mobile/Tablet",
            backdropImg:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/mobile-overlay.png",
            innerHtml: usFields[fieldName],
            adInfo: {
              title: "Mobile Overlay",
              dimensions: "Dimensions: 800px x 1200px",
            },
            addContainerStyle: "lb-ad-size-2",
          };
          adsInfo.push(mobileOverlay);
          break;
        case "lbAdSize4":
          const mobileInline = {
            type: "Mobile/Tablet",
            backdropImg:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/mobile-inline.png",
            innerHtml: usFields[fieldName],
            adInfo: {
              title: "Mobile Inline",
              dimensions: "Dimensions: 700px x 480px",
            },
            addContainerStyle: "lb-ad-size-4",
          };
          adsInfo.push(mobileInline);
          break;
      }
    }
  });

  return adsInfo.filter(
    ad => ad.innerHtml !== null && ad.innerHtml.length > 10
  );
};

const getLookbookTabInfo = data => {
  const adsInfo = getLookbookAdsInfo(
    data.wordPress.hLookbookBy.hLookbookFieldsUs,
    data.wordPress.hLookbookBy.hLookbookFieldsUk
  );

  const uniqueTypes = [...new Set(adsInfo.map(ad => ad.type))];

  const tabDataArr = [];
  uniqueTypes.forEach(type => {
    if (type === "Desktop") {
      const tabData = {
        title: type,
        content: (
          <div className="m-auto tab-content w-half">
            {/* TEST (this works) */}
            {/* {adsInfo.map((adInfo, index) => {
              return (
                <div className={adInfo.addContainerStyle}>
                  <div
                    className="danger-div"
                    dangerouslySetInnerHTML={{
                      __html: adInfo.innerHtml,
                    }}
                  ></div>
                </div>
              );
            })} */}
            {/* /* END TEST - BORRAR */}
            <div>
              <SimpleCarousel>
                {adsInfo
                  .filter(ad => ad.type === "Desktop")
                  .map((adInfo, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <div className="ad-wrapper text-center relative">
                            {adInfo.frame === 1 ? (
                              <NotebookFrame1 />
                            ) : (
                              <NotebookFrame2 />
                            )}

                            <div className={adInfo.addContainerStyle}>
                              <div
                                className="danger-div"
                                dangerouslySetInnerHTML={{
                                  __html: adInfo.innerHtml,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8">
                          <p className="text-sm m-0 ml-16 text-black ad-info-title">
                            {adInfo.adInfo.title}
                          </p>
                          <p className="text-sm m-0 ml-16 text-black ad-info-dimensions">
                            {adInfo.adInfo.dimensions}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </SimpleCarousel>
            </div>
          </div>
        ),
      };
      tabDataArr.push(tabData);
    } else if (type === "Mobile/Tablet") {
      const tabDataMobile = {
        title: type,
        content: (
          <div className="m-auto tab-content mobile-tab ">
            <SimpleCarousel isMobile={true}>
              {adsInfo
                .filter(ad => ad.type === "Mobile/Tablet")
                .map((adInfo, index) => {
                  return (
                    <div key={index}>
                      <div
                        style={{ height: "32rem" }}
                        className="text-center relative mobile-bd-image-wrapper"
                      >
                        <div className="mobile-frame">
                          <MobileFrame />
                        </div>
                        <div>
                          <img
                            className="backdrop-image"
                            src={adInfo.backdropImg}
                            alt="img"
                          />
                        </div>
                        <div className={adInfo.addContainerStyle}>
                          <div
                            className="danger-wrapper"
                            dangerouslySetInnerHTML={{
                              __html: adInfo.innerHtml,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="mobile-info-wrapper mt-8">
                        <p className="text-sm m-0 ml-16 text-black ad-info-title">
                          {adInfo.adInfo.title}
                        </p>
                        <p className="text-sm m-0 ml-16 text-black ad-info-dimensions">
                          {adInfo.adInfo.dimensions}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </SimpleCarousel>
          </div>
        ),
      };
      tabDataArr.push(tabDataMobile);
    }
  });

  return tabDataArr;
};

export const GetLookbookDataById = data => {
  if (data.wordPress.hLookbookBy) {
    let lookbookData = {
      id: data.wordPress.hLookbookBy.id,
      title: data.wordPress.hLookbookBy.title,
      slug: data.wordPress.hLookbookBy.slug,
      uri: data.wordPress.hLookbookBy.uri,

      relatedLookbooks: filterRelatedLookbooks(data),

      featureName:
        data.wordPress.hLookbookBy.hLookbookFeatures.edges[0].node.name,
      featureDescription:
        data.wordPress.hLookbookBy.hLookbookFeatures.edges[0].node.description,
      industryName:
        data.wordPress.hLookbookBy.hLookbookIndustries.edges[0].node.name,
      industryDescription:
        data.wordPress.hLookbookBy.hLookbookIndustries.edges[0].node
          .description,

      csvTemplateUrlUs:
        data.wordPress.hLookbookBy.hLookbookFieldsUs.lbTemplateUrl,
      csvTemplateUrlUk:
        data.wordPress.hLookbookBy.hLookbookFieldsUk.lbTemplateUrlUk,

      usFieldDescription: data.wordPress.hLookbookBy.hLookbookFieldsUs.lbDescription
        .replace("<p>", "")
        .replace("</p>", "")
        .replace("\n", ""),
      ukFieldDescription: data.wordPress.hLookbookBy.hLookbookFieldsUk.lbDescriptionUk
        .replace("<p>", "")
        .replace("</p>", "")
        .replace("\n", ""),
      inventoryTypeCampaignOptions: data.wordPress.hLookbookBy.hLookbookInventoryTypes.edges[0].node.hLookbookInventoryTypesExtraFields.campaignOptions.split(
        "\n"
      ),
      featuresExtraFields: {
        pdfTemplateUrl:
          data.wordPress.hLookbookBy.hLookbookFeatures.edges[0].node
            .hLookbookFeaturesExtraFields.pdfTemplateUrl,
        technicalRequirements: data.wordPress.hLookbookBy.hLookbookFeatures.edges[0].node.hLookbookFeaturesExtraFields.technicalRequirements.split(
          "\n"
        ),
      },
      lookbookTabInfo: getLookbookTabInfo(data),
    };

    return lookbookData;
  }
};

export default GetLookbookData;
