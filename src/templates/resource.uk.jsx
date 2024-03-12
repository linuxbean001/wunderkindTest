import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";

//General Components
import Intro from "Components/General/Intro/Intro";
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

function ResourcesArticleUk(props) {
  const { pageContext, data, uri } = props;
  const lang = pageContext.lang || "uk";

  const { hResourcesDataUK, title, seo } = getResourceData(data);
  const {
    marketoFormIdUk,
    introTextUk,
    marketoFormSubtitleUk,
    marketoFormTitleUk,
  } = hResourcesDataUK;
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
      <Intro
        bgColor="#f5ebe1"
        color="#191919"
        colClass="col-lg-9"
        content={{
          sideHeading: hResourcesDataUK.sectionTitleUk,
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
        formId={marketoFormIdUk}
        introText={introTextUk}
        marketoFormSubtitle={marketoFormSubtitleUk}
        marketoFormTitle={marketoFormTitleUk}
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

export default ResourcesArticleUk;

export const query = graphql`
  query resourcesUkQuery($id: ID!) {
    wordPress {
      hResrourceBy(id: $id) {
        hResourcesDataUK {
          introTextUk
          marketoFormIdUk
          sectionTitleUk
          marketoFormTitleUk
          marketoFormSubtitleUk
          statsUk {
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
