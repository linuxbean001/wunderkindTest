import React from "react";
import { graphql } from "gatsby";
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
  const { pageContext, data } = props;

  const patterns = getHeaderFooterDataTemplates(data);
  const headerPattern = patterns.header && patterns.header.sourceUrl;
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;
  const resourceLanguage = getResourceLanguages(data);
  const seo = data?.wordPress?.caseStudyBy?.seo;

  const fields = data?.wordPress?.caseStudyBy?.caseStudyFieldsUK;
  const {
    csClientNameUk,
    csIndustryUk,
    csTitleUk,
    csContentUk,
    csClientLogoUk,
    csImageUk,
    csStatisticsUk,
    csTestimonialsUk,
    csProblemUk,
    csSolutionUk,
    csResultsUk,
    psrItemUk,
    csVideoLinkUk,
  } = fields;
  const shouldShowNumbersContent = !csStatisticsUk.some(item =>
    checkStatistics(item.percentageNumber, item.percentageText)
  );

  const problemSolutionContent = getProblemSolutionResultContent({
    problem: csProblemUk,
    solution: csSolutionUk,
    result: csResultsUk,
    extraPsr: psrItemUk,
  });

  const shouldShowProblemSolutionResults = problemSolutionContent.length > 0;

  return (
    <MainLayout
      footerPattern={footerPattern}
      className="mask4 single-case-study"
      lang={"uk"}
      seoMeta={seo}
      languages={resourceLanguage}
      defaultStickyMenu={true}
      {...props}
    >
      <IntroCase
        key="section-1"
        content={{
          sideHeading: `${csClientNameUk} | ${csIndustryUk ?? "case study"}`,
          clientLogo: csClientLogoUk,
          title: csTitleUk,
          subtitle: csContentUk,
          image: csImageUk,
          videoLink: csVideoLinkUk,
        }}
      />

      {shouldShowNumbersContent ? (
        <NumbersContent items={csStatisticsUk} />
      ) : null}

      {csTestimonialsUk.map(testimonial => {
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
    </MainLayout>
  );
}

export default CaseStudy;

export const query = graphql`
  query caseStudyUkQuery($id: ID!) {
    wordPress {
      caseStudyBy(id: $id) {
        id
        caseStudyFieldsUK {
          csClientLogoUk {
            altText
            sourceUrl
          }
          csClientNameUk
          csIndustryUk
          csTitleUk
          csContentUk
          csVideoLinkUk
          csImageUk {
            altText
            sourceUrl
          }
          csIconsUk {
            ... on WordPress_CaseStudy_Casestudyfieldsuk_CsIconsUk_CsIconItem {
              csIconDescription
            }
          }
          csStatisticsUk {
            ... on WordPress_CaseStudy_Casestudyfieldsuk_CsStatisticsUk_CsPercentage {
              fieldGroupName
              percentageNumber
              percentageText
            }
          }
          csTestimonialsUk {
            ... on WordPress_CaseStudy_Casestudyfieldsuk_CsTestimonialsUk_CsTestimonialItem {
              csTestimonialAuthor
              csTestimonialText
              csTestimonialImage {
                altText
                sourceUrl
              }
            }
          }
          csProblemUk {
            csProblemDescription
            csProblemTitle
            csProblemImage {
              altText
              sourceUrl
            }
          }
          csSolutionUk {
            csSolutionDescription
            csSolutionTitle
            csSolutionImage {
              altText
              sourceUrl
            }
          }
          csResultsUk {
            csResultsDescription
            csResultsTitle
            csResultsImage {
              altText
              sourceUrl
            }
          }
          psrItemUk {
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

{/* {readNextItems && readNextItems.length > 0 && (
  <WatchNext sectionTitle="What to watch next" items={readNextItems} />
)} */}