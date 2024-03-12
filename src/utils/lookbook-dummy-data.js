import React from "react";
import SimpleCarousel from "../UI/SimpleCarousel";
import NotebookFrame1 from "../UI/SVGComponents/AdsSlider/NotebookFrame1";
import NotebookBase from "../UI/SVGComponents/AdsSlider/NotebookBase";

const lookbook_dummy_data_2 = {
  data: {
    hLookbooks: {
      nodes: [
        {
          databaseId: 3643,
          title: "Honda Passport",
          slug: "honda-passport-video",
          uri: "h-lookbook/honda-passport-video/",
          featuredImage: {
            altText: "",
            mediaItemUrl:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/CleanShot-2022-07-25-at-09.35.23.png",
          },
          hLookbookFeatures: {
            edges: [
              {
                node: {
                  name: "Branded Video",
                  databaseId: 3066,
                },
              },
            ],
          },
          hLookbookIndustries: {
            edges: [
              {
                node: {
                  databaseId: 3069,
                  name: "Automotive",
                },
              },
            ],
          },
          hLookbookInventoryTypes: {
            edges: [
              {
                node: {
                  databaseId: 3070,
                  name: "High Impact",
                },
              },
            ],
          },
        },
        {
          databaseId: 3654,
          title: "BCBS",
          slug: "bcbs",
          uri: "h-lookbook/bcbs-multi-video-selector/",
          featuredImage: {
            altText: "",
            mediaItemUrl:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/bcsb-multi-video.png",
          },
          hLookbookFeatures: {
            edges: [
              {
                node: {
                  name: "Multi Video Selector",
                  databaseId: 3066,
                },
              },
            ],
          },
          hLookbookIndustries: {
            edges: [
              {
                node: {
                  databaseId: 3079,
                  name: "Healthcare",
                },
              },
            ],
          },
          hLookbookInventoryTypes: {
            edges: [
              {
                node: {
                  databaseId: 3077,
                  name: "Outstream Video",
                },
              },
            ],
          },
        },
        {
          databaseId: 3645,
          title: "Samsung Galaxy",
          slug: "samsung-galaxy",
          uri: "h-lookbook/samsung-galaxy/",
          featuredImage: {
            altText: "",
            mediaItemUrl:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/samsung-galaxy.png",
          },
          hLookbookFeatures: {
            edges: [
              {
                node: {
                  name: "Shoppable",
                  databaseId: 3066,
                },
              },
            ],
          },
          hLookbookIndustries: {
            edges: [
              {
                node: {
                  databaseId: 3059,
                  name: "Consumer Electronics",
                },
              },
            ],
          },
          hLookbookInventoryTypes: {
            edges: [
              {
                node: {
                  databaseId: 3078,
                  name: "Standard IAB",
                },
              },
            ],
          },
        },
        {
          databaseId: 3647,
          title: "Hulu",
          slug: "hulu-multi-video-selector",
          uri: "h-lookbook/hulu-multi-video-selector/",
          featuredImage: {
            altText: "",
            mediaItemUrl:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/hulu-multi-video.png",
          },
          hLookbookFeatures: {
            edges: [
              {
                node: {
                  name: "Multi Video Selector",
                  databaseId: 3068,
                },
              },
            ],
          },
          hLookbookIndustries: {
            edges: [
              {
                node: {
                  databaseId: 3069,
                  name: "Entertainment",
                },
              },
            ],
          },
          hLookbookInventoryTypes: {
            edges: [
              {
                node: {
                  databaseId: 3077,
                  name: "Outstream Video",
                },
              },
            ],
          },
        },
        {
          databaseId: 3690,
          title: "Flonase Sensimist",
          slug: "flonase-sensimist",
          uri: "h-lookbook/flonase-sensimist/",
          featuredImage: {
            altText: "",
            mediaItemUrl:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/flonase.png",
          },
          hLookbookFeatures: {
            edges: [
              {
                node: {
                  name: "Tap to map",
                  databaseId: 3068,
                },
              },
            ],
          },
          hLookbookIndustries: {
            edges: [
              {
                node: {
                  databaseId: 3069,
                  name: "Pharma",
                },
              },
            ],
          },
          hLookbookInventoryTypes: {
            edges: [
              {
                node: {
                  databaseId: 3077,
                  name: "Outstream Video",
                },
              },
            ],
          },
        },
        {
          databaseId: 3691,
          title: "Wells Fargo",
          slug: "wells-fargo-calculator",
          uri: "h-lookbook/wells-fargo-calculator/",
          featuredImage: {
            altText: "",
            mediaItemUrl:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/wells-fargo.png",
          },
          hLookbookFeatures: {
            edges: [
              {
                node: {
                  name: "Calculator",
                  databaseId: 3068,
                },
              },
            ],
          },
          hLookbookIndustries: {
            edges: [
              {
                node: {
                  databaseId: 3069,
                  name: "Finance",
                },
              },
            ],
          },
          hLookbookInventoryTypes: {
            edges: [
              {
                node: {
                  databaseId: 3077,
                  name: "Outstream Video",
                },
              },
            ],
          },
        },
        {
          databaseId: 3652,
          title: "Quantas Airways",
          slug: "quantas-airways-animation",
          uri: "h-lookbook/quantas-airways-animation/",
          featuredImage: {
            altText: "",
            mediaItemUrl:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/qantas-airlines.png",
          },
          hLookbookFeatures: {
            edges: [
              {
                node: {
                  name: "Travel",
                  databaseId: 3064,
                },
              },
            ],
          },
          hLookbookIndustries: {
            edges: [
              {
                node: {
                  databaseId: 3059,
                  name: "Travel",
                },
              },
            ],
          },
          hLookbookInventoryTypes: {
            edges: [
              {
                node: {
                  databaseId: 3070,
                  name: "High Impact",
                },
              },
            ],
          },
        },
        {
          databaseId: 3650,
          title: "Farmers Insurance",
          slug: "farmers-insurance-countdown",
          uri: "h-lookbook/farmers-insurance-countdown/",
          featuredImage: {
            altText: "",
            mediaItemUrl:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/CleanShot-2022-07-25-at-09.44.28.png",
          },
          hLookbookFeatures: {
            edges: [
              {
                node: {
                  name: "Countdown",
                  databaseId: 3064,
                },
              },
            ],
          },
          hLookbookIndustries: {
            edges: [
              {
                node: {
                  databaseId: 3059,
                  name: "Insurance",
                },
              },
            ],
          },
          hLookbookInventoryTypes: {
            edges: [
              {
                node: {
                  databaseId: 3070,
                  name: "High Impact",
                },
              },
            ],
          },
        },
        {
          databaseId: 3650,
          title: "HBO Max Event",
          slug: "hbo-max-event",
          uri: "h-lookbook/hbo-max-event/",
          featuredImage: {
            altText: "",
            mediaItemUrl:
              "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/hbo-max.png",
          },
          hLookbookFeatures: {
            edges: [
              {
                node: {
                  name: "Save the date",
                  databaseId: 3064,
                },
              },
            ],
          },
          hLookbookIndustries: {
            edges: [
              {
                node: {
                  databaseId: 3059,
                  name: "Entertainment",
                },
              },
            ],
          },
          hLookbookInventoryTypes: {
            edges: [
              {
                node: {
                  databaseId: 3070,
                  name: "High Impact",
                },
              },
            ],
          },
        },
      ],
    },
    hLookbookInventoryTypes: {
      edges: [
        {
          node: {
            databaseId: 3079,
            name: "All",
          },
        },
        {
          node: {
            databaseId: 3070,
            name: "High Impact",
          },
        },
        {
          node: {
            databaseId: 3077,
            name: "Outstream Video",
          },
        },
        {
          node: {
            databaseId: 3078,
            name: "Standard IAB",
          },
        },
      ],
    },
    hLookbookIndustries: {
      edges: [
        {
          node: {
            name: "Automotive",
            databaseId: 3059,
          },
        },
        {
          node: {
            name: "Healthcare",
            databaseId: 3079,
          },
        },
        {
          node: {
            name: "Media",
            databaseId: 3069,
          },
        },
        {
          node: {
            name: "Consumer Electronics",
            databaseId: 3070,
          },
        },
        {
          node: {
            name: "Entertainment",
            databaseId: 3070,
          },
        },
        {
          node: {
            name: "Pharma",
            databaseId: 3070,
          },
        },
        {
          node: {
            name: "Finance",
            databaseId: 3070,
          },
        },
        {
          node: {
            name: "Travel",
            databaseId: 3070,
          },
        },
        {
          node: {
            name: "Insurance",
            databaseId: 3070,
          },
        },
      ],
    },
    hLookbookFeatures: {
      edges: [
        {
          node: {
            databaseId: 3060,
            name: "Save the date",
          },
        },
        {
          node: {
            databaseId: 3061,
            name: "Calculator",
          },
        },
        {
          node: {
            databaseId: 3062,
            name: "Branded Video",
          },
        },
        {
          node: {
            databaseId: 3063,
            name: "Multi Video Selector",
          },
        },
        {
          node: {
            databaseId: 3064,
            name: "Animation",
          },
        },
        {
          node: {
            databaseId: 3065,
            name: "Carosel",
          },
        },
        {
          node: {
            databaseId: 3066,
            name: "Countdown",
          },
        },
        {
          node: {
            databaseId: 3068,
            name: "Shoppable",
          },
        },
        {
          node: {
            databaseId: 3063,
            name: "Static",
          },
        },
        {
          node: {
            databaseId: 3067,
            name: "Tap to Map",
          },
        },
        {
          node: {
            databaseId: 3068,
            name: "Travel",
          },
        },
      ],
    },
  },
};

export const GetTabCarouselDummyData = () => {
  // DUMMY DATA FOR TAB AND CAROUSEL COMPONENTS
  const hondaImg =
    "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/honda-laptop.png";
  const hondaImg2 =
    "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/honda-laptop-2.png";
  const hondaImg3 =
    "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/honda-laptop-3.png";
  const hondaImgMobile =
    "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/honda-mobile.png";
  const hondaImgMobile2 =
    "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/honda-mobile-2.png";

  const lbDesktopAdInfo = [
    {
      type: "Desktop",
      // adImageSrc: hondaImg,
      backdropImg:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/desktop-overlay.png",
      innerHtml:
        "<div class=\"celtra-ad-v3\">\r\n  <img src=\"data:image/png,celtra\" style=\"display: none\" onerror=\"\r\n      (function(img) {\r\n          var params = {'clickUrl':'','expandDirection':'undefined','preferredClickThroughWindow':'new','clickEvent':'advertiser','externalAdServer':'Custom','tagVersion':'html-standard-7'};\r\n          var req = document.createElement('script');\r\n          req.id = params.scriptId = 'celtra-script-' + (window.celtraScriptIndex = (window.celtraScriptIndex||0)+1);\r\n          params.clientTimestamp = new Date/1000;\r\n          params.clientTimeZoneOffsetInMinutes = new Date().getTimezoneOffset();\r\n          params.hostPageLoadId=window.celtraHostPageLoadId=window.celtraHostPageLoadId||(Math.random()+'').slice(2);\r\n          var qs = '';\r\n          for (var k in params) {\r\n              qs += '&amp;' + encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);\r\n          }\r\n          var src = 'https://ads.celtra.com/e6f2322f/web.js?' + qs;\r\n          req.src = src;\r\n          img.parentNode.insertBefore(req, img.nextSibling);\r\n      })(this);\r\n  \"/>\r\n</div>",
      adInfo: {
        title: "Desktop Overlay",
        dimesions: "Dimensions: 900px x 600px",
      },
    },
    {
      type: "Desktop",
      // adImageSrc: hondaImg2,
      backdropImg:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/desktop-masthead.png",
      innerHtml:
        "<div class=\"celtra-ad-v3\">\r\n  <img src=\"data:image/png,celtra\" style=\"display: none\" onerror=\"\r\n      (function(img) {\r\n          var params = {'clickUrl':'','expandDirection':'undefined','preferredClickThroughWindow':'new','clickEvent':'advertiser','externalAdServer':'Custom','tagVersion':'html-standard-7'};\r\n          var req = document.createElement('script');\r\n          req.id = params.scriptId = 'celtra-script-' + (window.celtraScriptIndex = (window.celtraScriptIndex||0)+1);\r\n          params.clientTimestamp = new Date/1000;\r\n          params.clientTimeZoneOffsetInMinutes = new Date().getTimezoneOffset();\r\n          params.hostPageLoadId=window.celtraHostPageLoadId=window.celtraHostPageLoadId||(Math.random()+'').slice(2);\r\n          var qs = '';\r\n          for (var k in params) {\r\n              qs += '&amp;' + encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);\r\n          }\r\n          var src = 'https://ads.celtra.com/fcd55f5b/web.js?' + qs;\r\n          req.src = src;\r\n          img.parentNode.insertBefore(req, img.nextSibling);\r\n      })(this);\r\n  \"/>\r\n</div>",
      adInfo: {
        title: "Desktop Masterhead",
        dimesions: "Dimensions: 1920px x 480px",
      },
    },
    {
      type: "Desktop",
      adImageSrc: hondaImg3,
      backdropImg:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/desktop-inline.png",
      innerHtml:
        "<div class=\"celtra-ad-v3\">\r\n  <img src=\"data:image/png,celtra\" style=\"display: none\" onerror=\"\r\n      (function(img) {\r\n          var params = {'clickUrl':'','expandDirection':'undefined','preferredClickThroughWindow':'new','clickEvent':'advertiser','externalAdServer':'Custom','tagVersion':'html-standard-7'};\r\n          var req = document.createElement('script');\r\n          req.id = params.scriptId = 'celtra-script-' + (window.celtraScriptIndex = (window.celtraScriptIndex||0)+1);\r\n          params.clientTimestamp = new Date/1000;\r\n          params.clientTimeZoneOffsetInMinutes = new Date().getTimezoneOffset();\r\n          params.hostPageLoadId=window.celtraHostPageLoadId=window.celtraHostPageLoadId||(Math.random()+'').slice(2);\r\n          var qs = '';\r\n          for (var k in params) {\r\n              qs += '&amp;' + encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);\r\n          }\r\n          var src = 'https://ads.celtra.com/e591b4a6/web.js?' + qs;\r\n          req.src = src;\r\n          img.parentNode.insertBefore(req, img.nextSibling);\r\n      })(this);\r\n  \"/>\r\n</div>",
      adInfo: {
        title: "Desktop Inline",
        dimesions: "Dimensions: 800px x 1200px",
      },
    },
  ];
  const lbMobileAdInfo = [
    {
      type: "Mobile",
      adImageSrc: hondaImgMobile,
      adInfo: {
        title: "Mobile Overlay",
        dimesions: "Dimensions: 800px x 1200px",
      },
    },
    {
      type: "Mobile",
      adImageSrc: hondaImgMobile2,
      adInfo: {
        title: "Mobile Inline",
        dimesions: "Dimensions: 700px x 480px",
      },
    },
  ];

  const tabData = [
    {
      title: "Desktop",
      content: (
        <div className="m-auto tab-content w-half">
          <div>
            <SimpleCarousel>
              {lbDesktopAdInfo.map((adInfo, index) => {
                return (
                  <div key={index}>
                    <div>
                      <div className="ad-wrapper text-center relative">
                        <img
                          className="ml-auto mr-auto block"
                          src={adInfo.backdropImg}
                          alt="img"
                        />
                        <div>
                          <NotebookFrame1 />
                        </div>
                        <div className="notebook-base">
                          <NotebookBase />
                        </div>

                        <div className="ad-container">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: adInfo.innerHtml,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-sm m-0 ml-16 text-black">
                        {adInfo.adInfo.title}
                      </p>
                      <p className="text-sm m-0 ml-16 text-black">
                        {adInfo.adInfo.dimesions}
                      </p>
                    </div>
                  </div>
                );
              })}
            </SimpleCarousel>
          </div>
        </div>
      ),
    },
    {
      title: "Mobile/Tablet",
      content: (
        <div className="m-auto tab-content w-half">
          <div>
            <SimpleCarousel>
              {lbMobileAdInfo.map((adInfo, index) => {
                return (
                  <div key={index}>
                    <img
                      className="ml-auto mr-auto block max-w-full"
                      src={adInfo.adImageSrc}
                      alt="img"
                    />
                    <div className="mt-8">
                      <p className="text-sm m-0 ml-16 text-black">
                        {adInfo.adInfo.title}
                      </p>
                      <p className="text-sm m-0 ml-16 text-black">
                        {adInfo.adInfo.dimesions}
                      </p>
                    </div>
                  </div>
                );
              })}
            </SimpleCarousel>
          </div>
        </div>
      ),
    },
  ];
  // END DUMMY DATA FOR TAB AND CAROUSEL COMPONENTS

  return tabData;
};

export const GetTriggersDummyData = () => {
  return [
    {
      imageUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/Trigger-Images-2022-05-06-at-2.17.58-PM.png",
      title: "Exit Intent",
      content:
        " When a user's cursor crosses over the browser plane (desktop) or their finger touches down on the URL window (mobile) to leave the site.",
      videoUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/exit-intent.mp4",
    },
    {
      imageUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/Trigger-Images-2022-05-06-at-2.34.52-PM.png",
      title: "Refocus",
      content:
        " When a user is inactive for 10 seconds and then scrolls away or moves their cursor away from content.",
      videoUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/Refocus.mp4",
    },
    {
      imageUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/Trigger-Images-2022-05-06-at-2.34.07-PM.png",
      title: "Reactivity",
      content:
        " When a user switches tabs for at least 10 seconds and then returns to their original tab.",
      videoUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/inactivity.mp4",
    },
    {
      imageUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/Trigger-Images-2022-05-06-at-2.34.07-PM.png",
      title: "Inactivity",
      content:
        " When a user is inactive on a publisher's site for a full 30 seconds before becoming active on the page again.",
      videoUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/inactivity.mp4",
    },
    {
      imageUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/Trigger-Images-2022-05-06-at-2.35.42-PM.png",
      title: "Downscroll",
      content:
        " When a user scrolls all the way to the bottom of a finite-scroll page.",
      videoUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/scrolling.mp4",
    },
    {
      imageUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/Trigger-Images-2022-05-06-at-2.35.12-PM.png",
      title: "Upscroll",
      content:
        " When a user scrolls significantly below the fold and then all the way back to the top of the page.",
      videoUrl:
        "https://wkdstaging.wpengine.com/wp-content/uploads/2022/07/scrolling.mp4",
    },
  ];
};

export default lookbook_dummy_data_2;
