/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const process = require("process");

function getDataFromResponse(response) {
  return response && response.data && response.data.wordPress;
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const removeWPSlugPrefix = uri => {
    return uri.replace("h-page/", "/");
  };

  const createChildPages = entity => {
    let childPages = (entity.childHPages && entity.childHPages.nodes) || [];

    childPages = Array.isArray(childPages) ? childPages : [childPages];
    childPages.forEach(child => {
      if (
        !child.hPageTemplates ||
        !child.hPageTemplates.nodes ||
        !child.hPageTemplates.nodes[0] ||
        !child.hPageTemplates.nodes[0].slug
      ) {
        return;
      }

      let { us, uk } = getTemplateFromSlug(child.hPageTemplates.nodes[0].slug);
      createPageForEntity(child, us, uk);
    });
  };

  const createPageForEntity = (entity, template, templateUk) => {
    if (!entity.hPageLanguage || !entity.hPageLanguage.pageLanguage) {
      return;
    }

    const path = removeWPSlugPrefix(entity.uri);

    if (entity.hPageLanguage.pageLanguage.indexOf("us") !== -1 && template) {
      createPage({
        path: path,
        component: template,
        context: {
          lang: "us",
          id: entity.id,
          hrefLangs: {
            us: process.env.SITE_URL + path,
            uk: process.env.SITE_URL + "/uk" + path,
          },
        },
      });
    }

    if (entity.hPageLanguage.pageLanguage.indexOf("uk") !== -1 && templateUk) {
      createPage({
        path: `/uk${path}`,
        component: templateUk,
        context: {
          lang: "uk",
          id: entity.id,
          hrefLangs: {
            us: process.env.SITE_URL + path,
            uk: process.env.SITE_URL + "/uk" + path,
          },
        },
      });
    }
  };

  const { createPage } = actions;

  const videoTemplate = path.resolve("./src/templates/video.jsx");
  const cultureTemplate = path.resolve("./src/templates/culture.jsx");
  const cultureUkTemplate = path.resolve("./src/templates/culture.uk.jsx");
  const aboutUsTemplate = path.resolve("./src/templates/about-us.jsx");
  const aboutUsUkTemplate = path.resolve("./src/templates/about-us.uk.jsx");
  const resourceTemplate = path.resolve("./src/templates/resource.jsx");
  const resourceUkTemplate = path.resolve("./src/templates/resource.uk.jsx");
  const solutionsTemplate = path.resolve("./src/templates/solutions.jsx");
  const solutionsUkTemplate = path.resolve("./src/templates/solutions.uk.jsx");
  const plainContentTemplate = path.resolve(
    "./src/templates/plain-content.jsx"
  );
  const plainContentUkTemplate = path.resolve(
    "./src/templates/plain-content.uk.jsx"
  );
  const innerPagesTemplate = path.resolve("./src/templates/inner-page.jsx");
  const innerPagesUkTemplate = path.resolve(
    "./src/templates/inner-page.uk.jsx"
  );
  const cerosEmbedTemplate = path.resolve("./src/templates/ceros-embed.jsx");
  const cerosEmbedUkTemplate = path.resolve(
    "./src/templates/ceros-embed.uk.jsx"
  );
  const unsubscribeTemplate = path.resolve("./src/templates/unsubscribe.jsx");
  const unsubscribeUkTemplate = path.resolve(
    "./src/templates/unsubscribe.uk.jsx"
  );
  const unsubscribeConfirmationTemplate = path.resolve(
    "./src/templates/unsubscribe-confirmation.jsx"
  );
  const unsubscribeConfirmationUkTemplate = path.resolve(
    "./src/templates/unsubscribe-confirmation.uk.jsx"
  );

  const resourcesTemplate = path.resolve("./src/templates/resources.jsx");
  const resourcesUkTemplate = path.resolve("./src/templates/resources.uk.jsx");
  const lookbookTemplate = path.resolve("./src/templates/lookbook.js");
  const lookbookUkTemplate = path.resolve("./src/templates/lookbook.uk.js");
  const lookbookPostTemplate = path.resolve("./src/templates/lookbook-post.js");

  // const testimonialsTemplate = path.resolve("./src/pages/testimonials.jsx");
  // const testimonialsUKTemplate = path.resolve(
  //   "./src/pages/testimonials.uk.jsx"
  // );

  const resourcesGetADemoTemplate = path.resolve(
    "./src/templates/resource-get-started.jsx"
  );
  const resourcesGetADemoUKTemplate = path.resolve(
    "./src/templates/resource-get-started.jsx"
  );

  const competitorTemplate = path.resolve("./src/templates/competitor.jsx");
  const competitorUKTemplate = path.resolve(
    "./src/templates/competitor.uk.jsx"
  );

  // Used only for sitemap
  const blogTemplate = path.resolve("./src/templates/blog.jsx");

  const clientReferralTemplate = path.resolve(
    "./src/templates/client-referral.jsx"
  );
  const clientReferralUkTemplate = path.resolve(
    "./src/templates/client-referral.uk.jsx"
  );

  const clientReferralThankYouTemplate = path.resolve(
    "./src/templates/client-referral-thank-you.jsx"
  );
  const clientReferralThankYouUkTemplate = path.resolve(
    "./src/templates/client-referral-thank-you.uk.jsx"
  );

  const caseStudyTemplate = path.resolve("./src/templates/case-study.jsx");
  const caseStudyUkTemplate = path.resolve("./src/templates/case-study.uk.jsx");

  const podcastTemplate = path.resolve("./src/templates/podcast.jsx");
  const podcastUkTemplate = path.resolve("./src/templates/podcast.uk.jsx");

  const industryPageTemplate = path.resolve("./src/templates/industry.jsx")
  const industryPageUkTemplate = path.resolve("./src/templates/industry.uk.jsx")

  const getTemplateFromSlug = slug => {
    let us, uk;

    switch (slug) {
      case "solutions":
        us = solutionsTemplate;
        uk = solutionsUkTemplate;
        break;
      case "plain-content":
        us = plainContentTemplate;
        uk = plainContentUkTemplate;
        break;
      case "inner-pages":
        us = innerPagesTemplate;
        uk = innerPagesUkTemplate;
        break;
      case "client-referral":
        us = clientReferralTemplate;
        uk = clientReferralUkTemplate;
        break;
      case "client-referral-thank-you":
        us = clientReferralThankYouTemplate;
        uk = clientReferralThankYouUkTemplate;
        break;
      case "about-us":
        us = aboutUsTemplate;
        uk = aboutUsUkTemplate;
        break;
      case "culture-and-inclusion":
        us = cultureTemplate;
        uk = cultureUkTemplate;
        break;
      case "ceros-embed":
        us = cerosEmbedTemplate;
        uk = cerosEmbedUkTemplate;
        break;
      case "unsubscribe":
        us = unsubscribeTemplate;
        uk = unsubscribeUkTemplate;
        break;
      case "unsubscribe-confirmation":
        us = unsubscribeConfirmationTemplate;
        uk = unsubscribeConfirmationUkTemplate;
        break;
      case "case-study":
        us = caseStudyTemplate;
        uk = caseStudyUkTemplate;
      case "resources":
        us = resourcesTemplate;
        uk = resourcesUkTemplate;
        break;
      case "lookbook":
        us = lookbookTemplate;
        uk = lookbookUkTemplate;
        break;
      case "video":
        us = videoTemplate;
        uk = videoTemplate;
        break;
      default:
        break;
    }

    return { us, uk };
  };
  const industryPageQuery = await graphql(`
  query IndustryPagesQuery {
    wordPress {
      hPageTemplates(where: { slug: "industry" }) {
        nodes {
          hPages {
            nodes {
              title
            }
          }
        }
      }
    }
  }
`);

if (industryPageQuery.errors) {
  throw industryPageQuery.errors;
}

const industryPages = industryPageQuery.data.wordPress.hPageTemplates.nodes[0].hPages.nodes;

industryPages.forEach((industryPage) => {
  const title = industryPage.title;

  createPage({
    path: `/industry/${title.toLowerCase().replace(/\s+/g, '-')}`, // Create a slug from the title
    component: industryPageTemplate, // Adjust the path to your IndustryTemplate
    context: {
      title,
    },
  });
});

  const queryData = await graphql(`
    query resourcesData {
      wordPress {
        allCompetitors: competitorPages {
          nodes {
            id
            databaseId
            slug
            hResourceLanguage {
              resourceLanguage
            }
          }
        }
        allLookbooks: hLookbooks(first: 500) {
          nodes {
            id
            databaseId
            title
            slug
            uri
          }
        }
        allResourcesList: hResrources(first: 500) {
          nodes {
            id
            slug
            hResourceTypes {
              nodes {
                slug
              }
            }
            hResourceLanguage {
              resourceLanguage
            }
          }
        }
        allPages: hPages(first: 200) {
          nodes {
            id
            databaseId
            slug
            uri
            hPageLanguage {
              pageLanguage
            }
            hPageTemplates {
              nodes {
                slug
              }
            }
            childHPages(first: 50) {
              nodes {
                id
                databaseId
                slug
                uri
                hPageLanguage {
                  pageLanguage
                }
                hPageTemplates {
                  nodes {
                    slug
                  }
                }
              }
            }
          }
        }
        blogs(first: 500) {
          nodes {
            slug
          }
        }
        blogCategories(first: 100) {
          nodes {
            slug
          }
        }
        podcasts(first: 500) {
          nodes {
            id
            slug
            seo {
              canonical
              focuskw
              metaDesc
              metaKeywords
              metaRobotsNofollow
              metaRobotsNoindex
              opengraphDescription
              opengraphImage {
                altText
                sourceUrl
              }
              opengraphTitle
              title
              twitterDescription
              twitterTitle
              twitterImage {
                altText
                sourceUrl
              }
            }
            PodcastFieldsUK {
              pcHeroSubtitleUk
              pcHeroTitleUk
              pcHeroVideoUrlUk
              pcAmountOfKeyTakeawaysUk
              pcRecommendedTitleUk
              pcSpeakerTitleUk
              pcSpeakerUk {
                pcCompanyPositionUk
                pcSpeakerFirstNameUk
                pcSpeakerLastNameUk
                pcSpeakerLinkedinUrlUk
                pcSpeakerImageUk {
                  altText
                  sourceUrl
                }
              }
            }
            PodcastFields {
              pcHeroTitle
              pcHeroSubtitle
              pcHeroVideo
              pcAmountOfKeyTakeaways
              pcRecommendedTitle
              pcSpeakerTitle
              pcSpeaker {
                pcCompanyPosition
                pcSpeakerFirstName
                pcSpeakerImage {
                  altText
                  sourceUrl
                }
                pcSpeakerLastName
                pcSpeakerLinkedinUrl
              }
            }
            hResourceLanguage {
              resourceLanguage
            }
          }
        }
        allCaseStudies: caseStudies(
          where: { orderby: { field: DATE, order: ASC } }
          first: 10000
        ) {
          nodes {
            id
            slug
            caseStudyFields {
              csTitle
              csImage {
                altText
                sourceUrl
              }
            }
            caseStudyFieldsUK {
              csTitleUk
              csImageUk {
                altText
                sourceUrl
              }
            }
            hResourceLanguage {
              resourceLanguage
            }
          }
        }
      }
    }
  `);

  const resourcesCategories = [
    "all",
    "case-studies",
    "webinars",
    "research-study",
    "guides",
    "webinars",
    "csuite-series",
    "podcasts",
  ];

  const resourcesCategoriesUrlMap = new Map([
    ["case-study", "case-studies"],
    ["research-study", "research-study"],
    ["guide", "guides"],
    ["webinar", "webinars"],
    ["c-suite-series", "csuite-series"],
    ["podcast", "podcasts"],
  ]);

  const getResourceUrlPath = (resource, language) => {
    let category = "";
    if (
      resource &&
      resource.hResourceTypes &&
      resource.hResourceTypes.nodes &&
      resource.hResourceTypes.nodes[0] &&
      resource.hResourceTypes.nodes[0].slug
    ) {
      category = resource.hResourceTypes.nodes[0].slug;
    }
    const mappedCategory = resourcesExceptionsSlugs.includes(resource.slug)
      ? null
      : resourcesCategoriesUrlMap.get(category);
    if (language === "uk") {
      return mappedCategory
        ? `/uk/resources/${mappedCategory}/${resource.slug}/`
        : `/uk/resources/${resource.slug}/`;
    }
    return mappedCategory
      ? `/resources/${mappedCategory}/${resource.slug}/`
      : `/resources/${resource.slug}/`;
  };

  let responseData = getDataFromResponse(queryData);

  const allLookbooks = responseData?.allLookbooks.nodes || [];
  const allLookbooksPages = Array.isArray(allLookbooks)
    ? allLookbooks
    : [allLookbooks];

  const resources =
    (responseData &&
      responseData.allResourcesList &&
      responseData.allResourcesList.nodes) ||
    [];
  const allPagesData =
    responseData && responseData.allPages && responseData.allPages.nodes;
  const allPages = Array.isArray(allPagesData) ? allPagesData : [allPagesData];
  const blogs =
    (responseData && responseData.blogs && responseData.blogs.nodes) || [];
  const blogCategories =
    (responseData &&
      responseData.blogCategories &&
      responseData.blogCategories.nodes) ||
    [];
  const caseStudies =
    (responseData &&
      responseData.allCaseStudies &&
      responseData.allCaseStudies.nodes) ||
    [];
  const podcasts =
    (responseData && responseData.podcasts && responseData.podcasts.nodes) ||
    [];
  const allCompetitors =
    (responseData &&
      responseData.allCompetitors &&
      responseData.allCompetitors.nodes) ||
    [];

  allPages.forEach(page => {
    if (
      !page.hPageTemplates ||
      !page.hPageTemplates.nodes ||
      !page.hPageTemplates.nodes[0] ||
      !page.hPageTemplates.nodes[0].slug
    ) {
      return;
    }

    const { us, uk } = getTemplateFromSlug(page.hPageTemplates.nodes[0].slug);
    createPageForEntity(page, us, uk);
    createChildPages(page);
  });

  const resourcesExceptionsSlugs = ["get-started", "get-started-thank-you"];

  const createResourcePage = (resource, languages) => {
    const resourceUSPath = getResourceUrlPath(resource, "us");
    const resourceUKPath = getResourceUrlPath(resource, "uk");
    if (languages.indexOf("us") !== -1) {
      console.log(
        `Creating resource page for ${resource.slug}, US: ${languages.indexOf(
          "us"
        )} and UK: ${languages.indexOf("uk")}`
      );
      createPage({
        path: resourceUSPath,
        component: resourceTemplate,
        context: {
          id: resource.id,
          lang: "us",
          hrefLangs: {
            us: process.env.SITE_URL + resourceUSPath,
            uk: process.env.SITE_URL + resourceUKPath,
          },
        },
      });
    }

    if (languages.indexOf("uk") !== -1) {
      console.log(
        `Creating UK resource page for ${
          resource.slug
        }, path: ${getResourceUrlPath(resource, "uk")}`
      );
      createPage({
        path: resourceUKPath,
        component: resourceUkTemplate,
        context: {
          id: resource.id,
          lang: "uk",
          hrefLangs: {
            us: process.env.SITE_URL + resourceUSPath,
            uk: process.env.SITE_URL + resourceUKPath,
          },
        },
      });
    }
  };

  resources.forEach(resource => {
    const languages = resource.hResourceLanguage.resourceLanguage;

    if (resource.slug !== "get-started") {
      createResourcePage(resource, languages);
    }
  });

  const createCompetitorPage = (competitor, languages) => {
    const competitorUSPath = `/get-started/${competitor.slug}/`;
    const competitorUKPath = `/uk/get-started/${competitor.slug}/`;
    if (languages.indexOf("us") !== -1) {
      createPage({
        path: competitorUSPath,
        component: competitorTemplate,
        context: {
          id: competitor.id,
          lang: "us",
          hrefLangs: {
            us: process.env.SITE_URL + competitorUSPath,
            uk: process.env.SITE_URL + competitorUKPath,
          },
        },
      });
    }

    if (languages.indexOf("uk") !== -1) {
      createPage({
        path: competitorUKPath,
        component: competitorUKTemplate,
        context: {
          id: competitor.id,
          lang: "us",
          hrefLangs: {
            us: process.env.SITE_URL + competitorUSPath,
            uk: process.env.SITE_URL + competitorUKPath,
          },
        },
      });
    }
  };

  allCompetitors.forEach(competitor => {
    const languages = competitor.hResourceLanguage.resourceLanguage;
    createCompetitorPage(competitor, languages);
  });

  createPage({
    path: `/unsubscribe/`,
    component: unsubscribeTemplate,
    context: {
      hrefLangs: {
        us: process.env.SITE_URL + "/unsubscribe/",
        uk: process.env.SITE_URL + "/uk/unsubscribe/",
      },
    },
  });

  createPage({
    path: `/uk/unsubscribe/`,
    component: unsubscribeUkTemplate,
    context: {
      hrefLangs: {
        us: process.env.SITE_URL + "/unsubscribe/",
        uk: process.env.SITE_URL + "/uk/unsubscribe/",
      },
    },
  });

  createPage({
    path: `/unsubscribe-confirmation/`,
    component: unsubscribeConfirmationTemplate,
    context: {
      hrefLangs: {
        us: process.env.SITE_URL + "/unsubscribe-confirmation/",
        uk: process.env.SITE_URL + "/uk/unsubscribe-confirmation/",
      },
    },
  });

  createPage({
    path: `/uk/unsubscribe-confirmation/`,
    component: unsubscribeConfirmationUkTemplate,
    context: {
      hrefLangs: {
        us: process.env.SITE_URL + "/unsubscribe-confirmation/",
        uk: process.env.SITE_URL + "/uk/unsubscribe-confirmation/",
      },
    },
  });

  createPage({
    path: `/resources/get-started/`,
    component: resourcesGetADemoTemplate,
    context: {
      lang: "us",
      hrefLangs: {
        us: process.env.SITE_URL + "/resources/get-started/",
        uk: process.env.SITE_URL + "/uk/resources/get-started/",
      },
    },
  });

  createPage({
    path: `/uk/resources/get-started/`,
    component: resourcesGetADemoTemplate,
    context: {
      lang: "uk",
      hrefLangs: {
        us: process.env.SITE_URL + "/resources/get-started/",
        uk: process.env.SITE_URL + "/uk/resources/get-started/",
      },
    },
  });

  createPage({
    path: `/lookbook/`,
    component: lookbookTemplate,
    context: {
      id: "lookbook",
      lang: "us",
      hrefLangs: {
        us: process.env.SITE_URL + `/lookbook/`,
        uk: process.env.SITE_URL + `/uk/lookbook/`,
      },
    },
  });

  createPage({
    path: `/uk/lookbook/`,
    component: lookbookUkTemplate,
    context: {
      id: "ukLookbook",
      lang: "uk",
      hrefLangs: {
        us: process.env.SITE_URL + `/lookbook/`,
        uk: process.env.SITE_URL + `/uk/lookbook/`,
      },
    },
  });

  const videoQueryResult = await graphql(`
    query VideoQuery {
      wordPress {
        hPages(first: 25) {
          nodes {
            videoPage {
              videosrc
              videotitle
            }
            slug
          }
        }
      }
    }
  `);

  videoQueryResult.data.wordPress.hPages.nodes.forEach(node => {
    createPage({
      path: `/videos/${node.slug}`,
      component: videoTemplate,
      context: {
        slug: node.slug,
        videoTitle: node.videoPage.videotitle,
        videoSrc: node.videoPage.videosrc,
      },
    });
  });

  // Used only for sitemap
  createPage({
    path: `/blog`,
    component: blogTemplate,
  });
  blogs.forEach(blog => {
    createPage({
      path: `/blog/article/${blog.slug}`,
      component: blogTemplate,
    });
  });
  blogCategories.forEach(category => {
    if (category.slug !== "main") {
      createPage({
        path: `/blog-category/${category.slug}`,
        component: blogTemplate,
      });
    }
  });

  const getMostRecentCaseStudies = (allCaseStudies, id, lang) => {
    const caseStudies = allCaseStudies.filter(
      caseStudy =>
        caseStudy.hResourceLanguage.resourceLanguage.indexOf(lang) !== -1
    );
    var index = caseStudies.map(caseStudy => caseStudy.id).indexOf(id);
    if (index === 0) {
      return [caseStudies[1], caseStudies[2], caseStudies[3]];
    } else if (index === 1) {
      return [caseStudies[0], caseStudies[2], caseStudies[3]];
    } else {
      return [
        caseStudies[index - 1],
        caseStudies[index - 2],
        caseStudies[index + 1]
          ? caseStudies[index + 1]
          : caseStudies[index - 3],
      ];
    }
  };

  allLookbooksPages.forEach(lookbook => {
    const lookbookPostPath = `/lookbook/${lookbook.slug}/`;
    const lookbookPostUkPath = `/uk/lookbook/${lookbook.slug}/`;
    createPage({
      path: lookbookPostPath,
      component: lookbookPostTemplate,
      context: {
        id: lookbook.id,
        lang: "us",
        hrefLangs: {
          us: process.env.SITE_URL + lookbookPostPath,
          uk: process.env.SITE_URL + lookbookPostUkPath,
        },
      },
    });
    createPage({
      path: lookbookPostUkPath,
      component: lookbookPostTemplate,
      context: {
        id: lookbook.id,
        lang: "uk",
        hrefLangs: {
          us: process.env.SITE_URL + lookbookPostPath,
          uk: process.env.SITE_URL + lookbookPostUkPath,
        },
      },
    });
  });

  caseStudies.forEach((caseStudy, index) => {
    const languages = caseStudy.hResourceLanguage.resourceLanguage;
    const caseStudyPath = `/resources/case-studies/${caseStudy.slug}/`;
    const caseStudyUkPath = `/uk/resources/case-studies/${caseStudy.slug}/`;
    if (languages.indexOf("us") !== -1) {
      createPage({
        path: caseStudyPath,
        component: caseStudyTemplate,
        context: {
          id: caseStudy.id,
          lang: "us",
          previousCaseStudies: getMostRecentCaseStudies(
            caseStudies,
            caseStudy.id,
            "us"
          ),
          hrefLangs: {
            us: process.env.SITE_URL + caseStudyPath,
            uk: process.env.SITE_URL + caseStudyUkPath,
          },
        },
      });
    }
    if (languages.indexOf("uk") !== -1) {
      createPage({
        path: caseStudyUkPath,
        component: caseStudyUkTemplate,
        context: {
          id: caseStudy.id,
          lang: "uk",
          previousCaseStudies: getMostRecentCaseStudies(
            caseStudies,
            caseStudy.id,
            "uk"
          ),
          hrefLangs: {
            us: process.env.SITE_URL + caseStudyPath,
            uk: process.env.SITE_URL + caseStudyUkPath,
          },
        },
      });
    }
  });

  podcasts.forEach(podcast => {
    const languages = podcast.hResourceLanguage.resourceLanguage;
    const podcastPath = `/resources/podcasts/${podcast.slug}/`;
    const podcastUkPath = `/uk/resources/podcasts/${podcast.slug}/`;
    if (languages.indexOf("us") !== -1) {
      const podcastInfo = {
        ...podcast.PodcastFields,
      };
      createPage({
        path: podcastPath,
        component: podcastTemplate,
        context: {
          id: podcast.id,
          availableLanguages: languages,
          lang: "us",
          podcast: {
            ...podcastInfo,
          },
          hrefLangs: {
            us: process.env.SITE_URL + podcastPath,
            uk: process.env.SITE_URL + podcastUkPath,
          },
        },
      });
    }
    if (languages.indexOf("uk") !== -1) {
      const podcastInfo = {
        ...podcast.PodcastFieldsUK,
      };
      createPage({
        path: podcastUkPath,
        component: podcastUkTemplate,
        context: {
          id: podcast.id,
          availableLanguages: languages,
          lang: "uk",
          podcast: {
            ...podcastInfo,
          },
          hrefLangs: {
            us: process.env.SITE_URL + podcastPath,
            uk: process.env.SITE_URL + podcastUkPath,
          },
        },
      });
    }
  });

  resourcesCategories.forEach(cat => {
    createPage({
      path: `/resources/${cat}/`,
      component: resourcesTemplate,
      context: {
        id: cat,
        lang: "us",
        hrefLangs: {
          us: process.env.SITE_URL + `/resources/${cat}/`,
          uk: process.env.SITE_URL + `/uk/resources/${cat}/`,
        },
      },
    });
    createPage({
      path: `/uk/resources/${cat}/`,
      component: resourcesUkTemplate,
      context: {
        id: cat,
        lang: "uk",
        hrefLangs: {
          us: process.env.SITE_URL + `/resources/${cat}/`,
          uk: process.env.SITE_URL + `/uk/resources/${cat}/`,
        },
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  if (!page.context.hrefLangs) {
    const isUk = page.path.startsWith("/uk/");
    const usPath = isUk ? page.path.substring(3) : page.path;
    const ukPath = isUk ? page.path : `/uk${page.path}`;
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        hrefLangs: {
          us: process.env.SITE_URL + usPath,
          uk: process.env.SITE_URL + ukPath,
        },
      },
    });
  }
};
