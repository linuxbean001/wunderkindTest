import React from "react";
import { graphql } from "gatsby";
import MainLayout from "../layouts/Main";

//General Components
import Intro from "Components/General/GetADemoCustomizable/IntroGetADemoCustomizable";

//Resources Components
import { useWindowSize } from "../utils/useWindowSize";
import CaseStudy from "../Components/General/CaseStudyCustomizable/CaseStudyCustomizable";
// import CallToActionCustomizable from "../Components/Page/Resources/CallToActionCustomizable/CallToActionCustomizable";

function getInnerWPData(data) {
  return data && data.wordPress && data.wordPress.competitorPageBy;
}

function getInnerSectionData(data) {
  return data && data.competitorPageFields;
}

function normalizeImageData(data) {
  return data.map(company => ({
    alt: company.cpClientLogoUk.altText,
    src: company.cpClientLogoUk?.sourceUrl,
    srcSmall: company.cpClientLogoMobileUk?.sourceUrl,
  }));
}

function normalizeStatisticsData(data) {
  return data.map(statistic => ({
    statistic: statistic.cpStatisticNumberUk,
    suffix: statistic.statisticSufixUk,
  }));
}

function normalizeData(data) {
  return {
    mainTitle: data.cpTitleUk,
    mainSubtitle: data.cpDescriptionUk,
    formInformation: {
      id: data.cpMarketoFormIdUk,
      title: data.cpMarketoFormTitleUk,
    },
    clientInformation: {
      title: data.cpClientsSectionTitleUk,
      description: data.cpClientsSectionDescriptionUk,
      featuredCompanies: normalizeImageData(data.cpClientsUk),
    },
    testimonial: {
      image: data.cpTestimonialLogoUk.sourceUrl,
      imageAlt: data.cpTestimonialLogoUk.altText,
      imageSmall: data.cpTestimonialLogoMobileUk?.sourceUrl,
      text: data.cpTestimonialUk,
      author: data.cpTestimonialAuthorUk,
      authorRole: data.cpTestimonialAuthorRoleUk,
      statistics: normalizeStatisticsData(data.cpTestimonialStatisticsUk),
    },
  };
}

function CompetitorUK(props) {
  const { pageContext, uri, data } = props;
  const lang = pageContext.lang || "us";
  const pageData = getInnerWPData(data);
  const rawData = getInnerSectionData(pageData);
  const {
    mainTitle,
    mainSubtitle,
    formInformation,
    clientInformation,
    testimonial,
  } = normalizeData(rawData);
  const windowSize = useWindowSize();

  return (
    <MainLayout
      lang={lang}
      headerPattern={
        windowSize.width > 768
          ? "/images/patterns/pattern-20.svg"
          : "/images/patterns/pattern-22.svg"
      }
      footerPattern="/images/patterns/pattern-06.svg"
      className="mask2"
      showDemoHeader={true}
      languages={["us", "uk"]}
      {...props}
    >
      <Intro
        bgColor="#f5ebe1"
        color="#191919"
        content={{
          title: mainTitle,
          subtitle: mainSubtitle,
        }}
        lang={lang}
        className={"single-resource"}
        uri={uri}
        formTitle={formInformation.title}
        formId={formInformation.id}
        clientInformation={clientInformation}
      />
      <CaseStudy testimonial={testimonial} />
      {/* <CallToActionCustomizable
        mainTitle="Ready to drive 11-15% in additional eCommerce revenue? Get
                started with a custom projection."
        buttonText="Get My Estimate"
        patternImages={{
          largeSrc: "/images/patterns/pattern-21.svg",
          largeAlt: "Background pattern",
          smallSrc: "/images/patterns/pattern-23.svg",
          smallAlt: "Background pattern",
        }}
        ctaImages={{
          largeSrc: "/images/resources/wk-Storyteller.png",
          largeAlt: "Man sitting",
          smallSrc: "/images/resources/wk-Storyteller-mbl.png",
          smallAlt: "Man sitting",
        }}
      /> */}
    </MainLayout>
  );
}

export default CompetitorUK;

export const query = graphql`
  query competitorPageUK($id: ID!) {
    wordPress {
      competitorPageBy(id: $id) {
        databaseId
        competitorPageFields {
          cpClientsSectionDescriptionUk
          cpClientsSectionTitleUk
          cpDescriptionUk
          cpMarketoFormIdUk
          cpMarketoFormTitleUk
          cpTestimonialUk
          cpTestimonialAuthorUk
          cpTestimonialAuthorRoleUk
          cpTestimonialStatisticsUk {
            cpStatisticNumberUk
            statisticSufixUk
          }
          cpTestimonialLogoUk {
            altText
            sourceUrl
          }
          cpTestimonialLogoMobileUk {
            altText
            sourceUrl
          }
          cpTitleUk
          cpClientsUk {
            ... on WordPress_CompetitorPage_Competitorpagefields_CpClientsUk_CpClientItem {
              cpClientLogoUk {
                altText
                sourceUrl
              }
              cpClientLogoMobileUk {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
