import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";

//General Components
// import Intro from "Components/General/Intro/Intro";
import IntroResource from "Components/General/IntroResource/IntroResource";
import TwoColumns from "Components/General/ContentBeforeFooter/TwoColumns";
import IllustrationContent from "Components/General/ContentBeforeFooter/IllustrationContent";
import Divider from "Components/General/Divider/Divider";

//Resrouces Components
import ResourcesArticleSection from "Components/Page/Resources/ResourcesArticleSection/ResourcesArticleSection";
import { getDefaultSectionsData } from "../Components/DefaultSectionFragment";

function getResourceData(data) {
  return data && data.wordPress && data.wordPress.hResrourceBy;
}

function getResourceLanguages(data) {
  return data.wordPress.hResrourceBy.hResourceLanguage?.resourceLanguage;
}

function ResourcesArticle(props) {
  const { pageContext, data, uri } = props;
  const lang = pageContext.lang || "us";

  const { hResourcesData, title, seo } = getResourceData(data);
  const {
    marketoFormId,
    introText,
    marketoFormSubtitle,
    marketoFormTitle,
  } = hResourcesData;
  const { brandBlockSection, promoBlockSection } = getDefaultSectionsData(data);
  const resourceLanguage = getResourceLanguages(data);

  return (
    <MainLayout
      lang={lang}
      headerPattern="/images/patterns/pattern-06.svg"
      footerPattern="/images/patterns/pattern-06.svg"
      className="mask2"
      seoMeta={seo}
      languages={resourceLanguage}
      {...props}
    >
      <IntroResource
        bgColor="#f5ebe1"
        color="#191919"
        colClass="col-lg-9"
        content={{
          sideHeading: hResourcesData.sectionTitle,
          title: title,
        }}
        backArrow={{
          href: "/resources/",
        }}
        lang={lang}
        className={"single-resource"}
        sorted={[]}
        list={[]}
      />

      <ResourcesArticleSection
        lang={lang}
        uri={uri}
        formId={marketoFormId}
        introText={introText}
        marketoFormSubtitle={marketoFormSubtitle}
        marketoFormTitle={marketoFormTitle}
      />

      {props.uri !== "/resources/get-started-thank-you" ? (
        <>
          <TwoColumns {...promoBlockSection} lang={lang} />

          <Divider
            bgColor={
              promoBlockSection && promoBlockSection.bgColor
                ? promoBlockSection.bgColor
                : "#25B89D"
            }
            maskColor="#F5EBE1"
            direction="top-right"
          />

          <IllustrationContent {...brandBlockSection} lang={lang} />
        </>
      ) : (
        ""
      )}
    </MainLayout>
  );
}

export default ResourcesArticle;

export const query = graphql`
  query resourcesQuery($id: ID!) {
    wordPress {
      hResrourceBy(id: $id) {
        hResourcesData {
          introText
          marketoFormId
          sectionTitle
          marketoFormTitle
          marketoFormSubtitle
          stats {
            stat
            text
          }
        }
        title
        seo {
          ...SeoMeta
        }
        hResourceLanguage {
          resourceLanguage
        }
      }
      generalSettingsHeadless {
        ...DefaultSectionsFragment
      }
    }
  }
`;
