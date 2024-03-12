import React from "react";
import { graphql } from "gatsby";

import CerosEmbed from "../Components/General/CerosEmbed/CerosEmbed";
import MainLayout from "../layouts/Main";
import GetHeaderFooterDataPages from "utils/useHeaderFooterTemplates";

function getInnerWPData(data) {
  return data && data.wordPress && data.wordPress.hPageBy;
}

function getInnerSectionData(data) {
  return data && data.hCerosEmbedFields && data.hCerosEmbedFields.buildingArea;
}

function CerosEmbedTemplate(props) {
  const { data } = props;

  const pageData = getInnerWPData(data);
  const sections = getInnerSectionData(pageData);

  const patterns = GetHeaderFooterDataPages(data);
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;

  return (
    <MainLayout
      lang="us"
      mainClass="ceros-embed"
      seoMeta={pageData.seo}
      footerPattern={footerPattern}
      hideHeader={true}
      hideHeaderFooter={true}
      languages={pageData.hPageLanguage?.pageLanguage}
      {...props}
    >
      {sections &&
        sections.map((section, index) => {
          const type = section.__typename;

          switch (type) {
            case "WordPress_HPage_Hcerosembedfields_BuildingArea_Embed":
              return <CerosEmbed key={"section-" + index} {...section} />;

            default:
              return <></>;
          }
        })}
    </MainLayout>
  );
}

export default CerosEmbedTemplate;

export const query = graphql`
  query cerosQuery($id: ID!) {
    wordPress {
      hPageBy(id: $id) {
        databaseId
        title
        hPageLanguage {
          pageLanguage
        }
        hCerosEmbedFields {
          buildingArea {
            ... on WordPress_HPage_Hcerosembedfields_BuildingArea_Embed {
              embeddedContent
            }
          }
        }
        hPageLayouts {
          ...FooterPattern
        }
        seo {
          ...SeoMeta
        }
      }
    }
  }
`;
