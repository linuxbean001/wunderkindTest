import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";
import GetHeaderFooterData from "../utils/useHeaderFooterTemplates";
import ClientReferralThankYouSection from "../Components/General/ClientReferral/ClientReferralThankYouSection";
import Intro from "../Components/General/Intro/Intro";

function ClientReferralThankYou(props) {
  const data = props.data;
  const pageData = data && data.wordPress && data.wordPress.hPageBy;
  const sections = pageData.hClientReferralThankYouFields.buildingArea;
  const patterns = GetHeaderFooterData(data);
  const headerPattern = patterns.header && patterns.header.sourceUrl;
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;

  return (
    <MainLayout
      lang="us"
      mainClass="main-resources"
      headerPattern={headerPattern}
      footerPattern={footerPattern}
      seoMeta={pageData.seo}
      className="mask3"
      languages={pageData.hPageLanguage?.pageLanguage}
      {...props}
    >
      {sections &&
        sections.map((section, index) => {
          const type = section.__typename;
          switch (type) {
            case "WordPress_HPage_Hclientreferralthankyoufields_BuildingArea_Heading":
              return (
                <>
                  <Intro
                    key={"section-" + index}
                    bgColor={"#3D55CC"}
                    content={{
                      title: section.sectionTitle,
                    }}
                    sorted={[]}
                    list={[]}
                  />
                  <ClientReferralThankYouSection bodyCopy={section.bodyCopy} />
                </>
              );
          }
        })}
    </MainLayout>
  );
}

export default ClientReferralThankYou;
export const query = graphql`
  query ClientReferralThankYouQuery($id: ID!) {
    wordPress {
      hPageBy(id: $id) {
        databaseId
        title
        hPageLanguage {
          pageLanguage
        }
        hClientReferralThankYouFields {
          buildingArea {
            ... on WordPress_HPage_Hclientreferralthankyoufields_BuildingArea_Heading {
              sectionTitle
              bodyCopy
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
`;
