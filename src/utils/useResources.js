// Check if resource had marketo id US/UK
function checkMarketoID(lang, resource) {
  let returnR = true;
  const availableLang = resource.hResourceLanguage.resourceLanguage;
  if (
    lang === "uk" &&
    (availableLang.indexOf(lang) === -1 ||
      !resource.hResourcesDataUK?.marketoFormIdUk)
  ) {
    returnR = false;
  }
  if (
    lang === "us" &&
    (availableLang.indexOf(lang) === -1 ||
      !resource.hResourcesData?.marketoFormId)
  ) {
    returnR = false;
  }
  return returnR;
}

const isResourceAvailableForLang = (lang, resource) => {
  let returnR = true;
  const availableLang = resource.hResourceLanguage.resourceLanguage;
  if (lang === "uk" && availableLang.indexOf(lang) === -1) {
    returnR = false;
  }
  if (lang === "us" && availableLang.indexOf(lang) === -1) {
    returnR = false;
  }
  return returnR;
};

function getListResourcesData(data, featuredResource, pinnedResources, lang) {
  data = data.filter(resource => isResourceAvailableForLang(lang, resource));

  pinnedResources = pinnedResources.filter(resource =>
    isResourceAvailableForLang(lang, resource)
  );
  data = data.map(dx => {
    return { ...dx, modified: new Date(dx.modified).getTime() };
  });

  pinnedResources = pinnedResources.map(dx => {
    return { ...dx, modified: new Date(dx.modified).getTime() };
  });

  let featured = featuredResource && featuredResource[0];
  featured =
    lang === "uk" && featured && !featured.hResourcesDataUK?.marketoFormIdUk
      ? false
      : featured;

  let firstSorted = pinnedResources;
  let exclude = [];
  if (featured) {
    exclude.push(featured.id);
  }

  firstSorted.forEach(resource => {
    exclude.push(resource.id);
  });

  let sortedLength = firstSorted.length;
  let topLength = data.length;
  let i = 0;
  if (sortedLength < 9) {
    while (firstSorted.length < 9 && i <= topLength) {
      let el = data[i];
      if (el && !exclude.includes(el.id)) {
        firstSorted.push(el);
        exclude.push(el.id);
      }
      i++;
    }
  }

  if (sortedLength > 9) {
    firstSorted = firstSorted.splice(9, 0);
  }

  exclude = [];
  if (featured) {
    exclude.push(featured.id);
  }

  firstSorted.forEach(resource => {
    exclude.push(resource.id);
  });

  const remaining = data.filter(resource => {
    return !exclude.includes(resource.id);
  });

  return {
    featured,
    list: remaining,
    sorted: firstSorted,
  };
}

function getListPodcastsData(podcasts, lang) {
  podcasts = podcasts.filter(podcast =>
    isPodcastAvailableForLang(lang, podcast)
  );
  const podcastsCards = createPodcastCard(podcasts, lang);
  return podcastsCards;
}

function getPageData(data) {
  let pageData = getWPData(data);
  let pages =
    pageData &&
    pageData.hPageTemplates &&
    pageData.hPageTemplates.nodes &&
    pageData.hPageTemplates.nodes[0];
  return pages && pages.hPages && pages.hPages.nodes && pages.hPages.nodes[0];
}

function getWPData(data) {
  return data && data.wordPress;
}

function getPinnedFeaturedResourceData(data, lang) {
  let resData = getWPData(data);
  let resources =
    resData &&
    resData.hPageTemplates &&
    resData.hPageTemplates.nodes &&
    resData.hPageTemplates.nodes[0];
  resources =
    resources &&
    resources.hPages &&
    resources.hPages.nodes &&
    resources.hPages.nodes[0];
  resources =
    resources &&
    (lang === "us"
      ? resources.hResourcesPageFields &&
        resources.hResourcesPageFields.buildingArea
      : resources.hResourcesPageFieldsUk &&
        resources.hResourcesPageFieldsUk.ukBuildingArea);
  resources =
    resources &&
    (resources.find(
      el =>
        el.__typename ===
        "WordPress_HPage_Hresourcespagefields_BuildingArea_ResroucesSection"
    ) ||
      resources.find(
        el =>
          el.__typename ===
          "WordPress_HPage_Hresourcespagefieldsuk_UkBuildingArea_ResroucesSection"
      ));

  return resources
    ? [
        resources.featuredResource ? resources.featuredResource : [],
        resources.pinnedResources ? resources.pinnedResources : [],
      ]
    : [[], []];
}
function getResourceData(data) {
  let resData = getWPData(data);
  return resData.hResrources && resData.hResrources.nodes;
}

function getPodcastsData(data) {
  let resData = getWPData(data);
  return (resData.podcasts && resData.podcasts.nodes) || [];
}

const isPodcastAvailableForLang = (lang, podcast) => {
  let returnR = true;
  const availableLang = podcast.hResourceLanguage.resourceLanguage;
  if (lang === "uk" && availableLang.indexOf(lang) === -1) {
    returnR = false;
  }
  if (lang === "us" && availableLang.indexOf(lang) === -1) {
    returnR = false;
  }
  return returnR;
};

function createPodcastCard(podcastsData, lang) {
  return podcastsData.map(podcast => {
    const isUSLang = lang === "us";

    if (isUSLang) {
      return {
        id: podcast.id,
        slug: podcast.slug,
        hResourcesData: {
          sectionTitle: "Podcast",
          featuredSentence: "",
          logo: null,
          cardBackground: {
            altText: "",
            sourceUrl:
              "https://wkd.wpengine.com/wp-content/uploads/2023/04/Individuality-Unleashed-Season-2-Thumbnail_1920x1080.jpg",
          },
          cardBackgroundColor: "#303D78",
          cardTitle: podcast.PodcastFields.pcHeroTitle,
          marketoFormId: null,
        },
        hResourceTypes: {
          nodes: [
            {
              name: "Podcast",
              slug: "podcast",
            },
          ],
        },
        hResourceLanguage: podcast.hResourceLanguage,
        hResourceTermCategory: podcast.hResourceTermCategory,
        title: podcast.PodcastFields.pcHeroTitle,
        modified: new Date(podcast.modified).getTime(),
      };
    } else {
      return {
        id: podcast.id,
        slug: podcast.slug,
        hResourcesDataUK: {
          sectionTitleUk: "Podcast",
          featuredSentenceUk: "",
          logoUk: null,
          cardBackgroundUk: {
            altText: "",
            sourceUrl:
              "https://wkd.wpengine.com/wp-content/uploads/2023/04/Individuality-Unleashed-Season-2-Thumbnail_1920x1080.jpg",
          },
          cardBackgroundColorUk: "#303D78",
          cardTitleUk: podcast.PodcastFieldsUK.pcHeroTitleUk,
          hResourceTermCategory: podcast.hResourceTermCategory,
          marketoFormIdUk: null,
        },
        hResourceTypes: {
          nodes: [
            {
              name: "Podcast",
              slug: "podcast",
            },
          ],
        },
        hResourceLanguage: podcast.hResourceLanguage,
        title: podcast.PodcastFieldsUK.pcHeroTitleUk,
        modified: new Date(podcast.modified).getTime(),
      };
    }
  });
}

function GetResourcesData(data, lang = "us") {
  const pageData = getPageData(data);
  const hResources = getResourceData(data);

  const pinnedFeaturedResources = getPinnedFeaturedResourceData(data, lang);
  const resourcesData = getListResourcesData(
    hResources,
    pinnedFeaturedResources[0],
    pinnedFeaturedResources[1],
    lang
  );

  const podcasts = getPodcastsData(data);
  const podcastsData = getListPodcastsData(podcasts, lang);
  resourcesData.list.unshift(...podcastsData);
  return { pageData, resourcesData };
}

export default GetResourcesData;
