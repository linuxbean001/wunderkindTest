import React from "react";
import { graphql } from "gatsby";

import "../layouts/CaseStudy.scss";

//General Components
import MainLayout from "../layouts/Main";
import IntroCase from "Components/General/IntroCase/IntroCase";
import NumbersContent from "Components/General/NumbersContent/NumbersContent";
import ProblemSolutionResults from "Components/General/ProblemSolutionResults/ProblemSolutionResults";
import { CaseStudyBanner } from "../Components/General/CaseStudyBanner/CaseStudyBanner";
import WatchNext from "../Components/Page/Resources/Podcasts/WatchNextSection/WatchNext";
import ImageTextQuoteForCaseStudy from "../Components/General/ImageTextQuoteForCaseStudy/ImageTextQuoteForCaseStudy";

function getHeaderFooterDataTemplates(data) {
  return {
    header: data.wordPress.caseStudyBy.hPageLayouts.header,
    footer: data.wordPress.caseStudyBy.hPageLayouts.footer,
  };
}
function checkStatistics(percentageNumber, percentageText) {
  return percentageNumber.trim() === null || percentageText.trim() === null;
}

function checkProblemSolutionResults(title, text) {
  return !title || !text;
}

function getResourceLanguages(data) {
  return data.wordPress.caseStudyBy.hResourceLanguage?.resourceLanguage;
}

function formatExtraPSRContent(psrContent) {
  return psrContent
    ? psrContent.map(item => ({
        ...item,
        text: item.description,
        image: item.image?.sourceUrl,
      }))
    : [];
}

function formatStaticProblemSolutionResultContent(
  csProblem,
  csSolution,
  csResults
) {
  return [
    csProblem && {
      title: csProblem.csProblemTitle,
      text: csProblem.csProblemDescription,
      image: csProblem.csProblemImage?.sourceUrl,
    },
    csSolution && {
      title: csSolution.csSolutionTitle,
      text: csSolution.csSolutionDescription,
      image: csSolution.csSolutionImage?.sourceUrl,
    },
    csResults && {
      title: csResults.csResultsTitle,
      text: csResults.csResultsDescription,
      image: csResults.csResultsImage?.sourceUrl,
    },
  ];
}

function groupPSRContent(firstPSR, secondPSR) {
  return firstPSR.concat(secondPSR);
}

function filterEmptyPSR(psrContent) {
  return psrContent.filter(
    item => !checkProblemSolutionResults(item.title, item.text)
  );
}

function getProblemSolutionResultContent({
  problem,
  solution,
  result,
  extraPsr,
}) {
  const staticProblemSolutionContent = formatStaticProblemSolutionResultContent(
    problem,
    solution,
    result
  );
  const moreProblemSolutionContent = formatExtraPSRContent(extraPsr);
  const groupedProblemSolutionResultContent = groupPSRContent(
    staticProblemSolutionContent,
    moreProblemSolutionContent
  );
  return filterEmptyPSR(groupedProblemSolutionResultContent);
}

function CaseStudy(props) {
  const { data } = props;
  
  const seo = data?.wordPress?.caseStudyBy?.seo;
  const patterns = getHeaderFooterDataTemplates(data);
  const headerPattern = patterns.header && patterns.header.sourceUrl;
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;
  const resourceLanguage = getResourceLanguages(data);
  const watchNextData = data?.wordPress?.caseStudyBy?.csWatchNext?.cswatchnextfields
  if(!watchNextData) {
    return null
  }
  
  console.log('watch next data', data?.wordPress?.caseStudyBy?.csWatchNext)
  const fields = data?.wordPress?.caseStudyBy?.caseStudyFields;
  const {
    csClientName,
    csIndustry,
    csTitle,
    csContent,
    csClientLogo,
    csImage,
    csStatistics,
    csTestimonials,
    csProblem,
    csSolution,
    csResults,
    psrItemUs,
    csVideoLink,
  } = fields;
  const shouldShowNumbersContent = !csStatistics.some(item =>
    checkStatistics(item.percentageNumber, item.percentageText)
  );

  const problemSolutionContent = getProblemSolutionResultContent({
    problem: csProblem,
    solution: csSolution,
    result: csResults,
    extraPsr: psrItemUs,
  });

  const shouldShowProblemSolutionResults = problemSolutionContent.length > 0;

  return (
    <MainLayout
      footerPattern={footerPattern}
      className="mask4 single-case-study"
      lang={resourceLanguage}
      seoMeta={seo}
      languages={null}
      defaultStickyMenu={true}
      {...props}
    >
      <IntroCase
        key="section-1"
        imageClassName="case-study-image-size"
        imageContainerClassName="case-study-container-image-size"
        content={{
          sideHeading: `${csClientName} | ${csIndustry ?? "case study"}`,
          clientLogo: csClientLogo,
          title: csTitle,
          subtitle: csContent,
          image: csImage,
          videoLink: csVideoLink,
        }}
      />
      {shouldShowNumbersContent ? (
        <NumbersContent items={csStatistics} />
      ) : null}
      {csTestimonials.map(testimonial => {
        if( testimonial.csTestimonialAuthor == null || 
            testimonial.csTestimonialImage  == null || 
            testimonial.csTestimonialText   == '') {
          return
        }
        return (
          <ImageTextQuoteForCaseStudy
            testimonialAuthor={testimonial.csTestimonialAuthor}
            testimonialImage={testimonial.csTestimonialImage?.sourceUrl}
            key={testimonial.csTestimonialAuthor}
            testimonialText={testimonial.csTestimonialText}
          ></ImageTextQuoteForCaseStudy>
        );
      })}
      {shouldShowProblemSolutionResults ? (
        <ProblemSolutionResults
          content={problemSolutionContent}
        ></ProblemSolutionResults>
      ) : null}
      <CaseStudyBanner />
      {watchNextData && watchNextData.length > 0 && (
        <WatchNext watchNextData={watchNextData} />
      )}    </MainLayout>
  );
}
//

export default CaseStudy;

export const query = graphql`
  query caseStudyQuery($id: ID!) {
    wordPress {
      caseStudyBy(id: $id) {
        id
        csWatchNext {
          cswatchnextfields {
            ... on WordPress_CaseStudy_Cswatchnext_Cswatchnextfields_Watchnextcarddata {
              mainheader
              cardHeader
              carddescription
              cardhref
              cardimage{
								sourceUrl
                altText
              }
            }
          }
        }

        caseStudyFields {
          csClientLogo {
            altText
            sourceUrl
          }
          csVideoLink
          csClientName
          csIndustry
          csTitle
          csContent
          csImage {
            altText
            sourceUrl
          }
          csIcons {
            ... on WordPress_CaseStudy_Casestudyfields_CsIcons_CsIconItem {
              csIconDescription
            }
          }
          csStatistics {
            ... on WordPress_CaseStudy_Casestudyfields_CsStatistics_CsPercentage {
              fieldGroupName
              percentageNumber
              percentageText
            }
          }
          csTestimonials {
            ... on WordPress_CaseStudy_Casestudyfields_CsTestimonials_CsTestimonialItem {
              csTestimonialAuthor
              csTestimonialText
              csTestimonialImage {
                altText
                sourceUrl
              }
            }
          }
          csProblem {
            csProblemDescription
            csProblemTitle
            csProblemImage {
              altText
              sourceUrl
            }
          }
          csSolution {
            csSolutionDescription
            csSolutionTitle
            csSolutionImage {
              altText
              sourceUrl
            }
          }
          csResults {
            csResultsDescription
            csResultsTitle
            csResultsImage {
              altText
              sourceUrl
            }
          }
          psrItemUs {
            title
            description
            image {
              sourceUrl
              altText
            }
          }
        }
        hPageLayouts {
          header {
            sourceUrl
          }
          footer {
            sourceUrl
          }
        }
        hResourceLanguage {
          resourceLanguage
        }
        seo {
          ...SeoMeta
        }
      }
    }
  }
`;
