import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";
import Overview from "../Components/General/Overview/Overview";
import ClientReferralParticipate from "../Components/General/ClientReferral/ClientReferralParticipate";
import ClientReferralMarketoFormSection from "../Components/General/ClientReferral/ClientReferralMarketoFormSection";
import GetHeaderFooterData from "../utils/useHeaderFooterTemplates";

function ClientReferral(props) {
  const { data } = props;
  const pageData = data && data.wordPress && data.wordPress.hPageBy;
  const sections = pageData.hClientReferralFields.buildingArea;
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
      languages={pageData.hPageLanguage?.pageLanguage}
      {...props}
    >
      {sections &&
        sections.map((section, index) => {
          const type = section.__typename;
          switch (type) {
            case "WordPress_HPage_Hclientreferralfields_BuildingArea_Header":
              return (
                <ClientReferralParticipate
                  key={"section-" + index}
                  content={{
                    title: section.largeTitle,
                    subtitle: section.bodyCopy,
                    button: {
                      label: section?.ctaGroup?.text,
                    },
                    image: section?.headingImage?.sourceUrl,
                  }}
                  bgColor={"#191919"}
                  dark={true}
                />
              );
            case "WordPress_HPage_Hclientreferralfields_BuildingArea_HowItWorks":
              return (
                <Overview
                  key={"section-" + index}
                  className={"client-referral-overview"}
                  content={{
                    title: section.title,
                    subtitle: section.subtitle,
                    htmlContent: section.description,
                  }}
                />
              );
            case "WordPress_HPage_Hclientreferralfields_BuildingArea_ContactForm":
              return (
                <ClientReferralMarketoFormSection
                  key={"section-" + index}
                  submissionMessage={
                    "Thank you! You've successfully filled out the form. We'll be in contact with you shortly."
                  }
                  title={section.title}
                  formId={section.formId}
                />
              );
            default:
              return "";
          }
        })}
    </MainLayout>
  );
}

export default ClientReferral;

export const query = graphql`
  query ClientReferralQuery($id: ID!) {
    wordPress {
      hPageBy(id: $id) {
        databaseId
        title
        hPageLanguage {
          pageLanguage
        }
        hClientReferralFields {
          buildingArea {
            ... on WordPress_HPage_Hclientreferralfields_BuildingArea_Header {
              sectionTitle
              largeTitle
              bodyCopy
              ctaGroup {
                text
                url
              }
              headingImage {
                altText
                sourceUrl
              }
            }
            ... on WordPress_HPage_Hclientreferralfields_BuildingArea_HowItWorks {
              title
              subtitle
              description
            }
            ... on WordPress_HPage_Hclientreferralfields_BuildingArea_ContactForm {
              formId
              title
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
