import React from "react";
import { graphql } from "gatsby";
import { Router } from "@reach/router";
import axios from "axios";

import OpenRoleHome from "../Components/Page/OpenRoles/OpenRoleHome/OpenRoleHome";
import JobSingleHome from "../Components/Page/OpenRoles/JobSingleHome/JobSingleHome";
import { getDefaultSectionsData } from "../Components/DefaultSectionFragment";

class OpenRoles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allJobs: {
        jobs: [],
        meta: { total: 0 },
      },
      isLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.greenhouse.io/v1/boards/wunderkind/jobs`)
      .then(res => {
        const allJobs = res.data;
        this.setState({
          allJobs: allJobs,
          isLoaded: true,
        });
      });
  }

  getPageData(data) {
    return data.wordPress.hPageTemplates.nodes[0].hPages.nodes[0];
  }

  render() {
    const { jobs } = this.state.allJobs;
    const isLoaded = this.state.isLoaded;
    const pageData = this.getPageData(this.props.data);
    const pageDefaultData = getDefaultSectionsData(this.props.data);

    if (!isLoaded) {
      return null;
    }

    return (
      <Router basepath="/uk/open-roles">
        <OpenRoleHome
          lang={"uk"}
          path="/"
          allJobs={this.state.allJobs}
          pageData={{ pageData, pageDefaultData }}
          languages={pageData?.hPageLanguage?.pageLanguage}
          pageContext={this.props.pageContext}
        />
        {jobs.map(job => (
          <JobSingleHome
            lang={"uk"}
            key={"job-single-" + job.id}
            path={"/" + job.id}
            pageData={{ pageData, pageDefaultData }}
            openJobId={job.id}
          />
        ))}
      </Router>
    );
  }
}

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
              hOpenRolesFieldsUk {
                ukBuildingArea {
                  __typename
                  ... on WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_Header {
                    bodyCopy
                    ctaGroup {
                      text
                      url
                    }
                    largeTitle
                    sectionTitle
                  }
                  ... on WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_RequestADemo {
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
                  ... on WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_Divider {
                    bgColor
                    maskColor
                    orientation
                    position
                    additionalClass
                  }
                  ... on WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_PromoBlock {
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
                  ... on WordPress_HPage_Hopenrolesfieldsuk_UkBuildingArea_BrandBlock {
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
