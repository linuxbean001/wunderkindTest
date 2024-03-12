import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { Router } from "@reach/router";
import axios from "axios";

import OpenRoleHome from "../Components/Page/OpenRoles/OpenRoleHome/OpenRoleHome";
import JobSingleHome from "../Components/Page/OpenRoles/JobSingleHome/JobSingleHome";
import { getDefaultSectionsData } from "../Components/DefaultSectionFragment";

const OpenRoles = (props) => {
  const [allJobs, setAllJobs] = useState({
    jobs: [],
    meta: { total: 0 },
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.greenhouse.io/v1/boards/wunderkind/jobs`)
      .then((res) => {
        const allJobsData = res.data;
        setAllJobs(allJobsData);
        setIsLoaded(true);
      });
  }, []);

  const getPageData = (data) => {
    return data.wordPress.hPageTemplates.nodes[0].hPages.nodes[0];
  };

  if (!isLoaded) {
    return null;
  }

  const { jobs } = allJobs;
  const pageData = getPageData(props.data);
  const pageDefaultData = getDefaultSectionsData(props.data);

  return (
    <Router basepath="/open-roles">
      <OpenRoleHome
        lang={"us"}
        path="/"
        allJobs={allJobs}
        pageData={{ pageData, pageDefaultData }}
        uri={props.path}
        languages={pageData?.hPageLanguage?.pageLanguage}
        pageContext={props.pageContext}
      />
      {jobs.map((job) => (
        <JobSingleHome
          lang={"us"}
          key={"job-single-" + job.id}
          path={"/" + job.id}
          pageData={{ pageData, pageDefaultData }}
          openJobId={job.id}
          uri={props.path + job.id}
        />
      ))}
    </Router>
  );
};

export default OpenRoles;

export const query = graphql`
  {
    wordPress {
      hPageTemplates(where: { slug: "open-roles" }) {
        nodes {
          hPages {
            nodes {
              databaseId
              title
              hPageLanguage {
                pageLanguage
              }
              hOpenRolesFields {
                buildingArea {
                  __typename
                  ... on WordPress_HPage_Hopenrolesfields_BuildingArea_Header {
                    bodyCopy
                    ctaGroup {
                      text
                      url
                    }
                    largeTitle
                    sectionTitle
                  }
                  ... on WordPress_HPage_Hopenrolesfields_BuildingArea_RequestADemo {
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
                  ... on WordPress_HPage_Hopenrolesfields_BuildingArea_Divider {
                    bgColor
                    maskColor
                    orientation
                    position
                    additionalClass
                  }
                  ... on WordPress_HPage_Hopenrolesfields_BuildingArea_PromoBlock {
                    bgColor
                    backgroundImage {
                      altText
                      sourceUrl
                    }
                    firstColumn {
                      title
                      content
                      ctaGroup {
                        text
                        url
                      }
                      image {
                        altText
                        sourceUrl
                      }
                    }
                    secondColumn {
                      title
                      content
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
                  ... on WordPress_HPage_Hopenrolesfields_BuildingArea_BrandBlock {
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
      }
      generalSettingsHeadless {
        ...DefaultSectionsFragment
      }
    }
  }
`;
