import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/Main";
import Overview from "../Components/General/Overview/Overview";
import ClientReferralParticipate from "../Components/General/ClientReferral/ClientReferralParticipate";
import ClientReferralMarketoFormSection from "../Components/General/ClientReferral/ClientReferralMarketoFormSection";
import GetHeaderFooterData from "../utils/useHeaderFooterTemplates";

function ClientReferralUk(props) {
  const { data } = props;
  const pageData = data && data.wordPress && data.wordPress.hPageBy;
  const sections = pageData.hClientReferralFieldsUk.ukBuildingArea;
  const patterns = GetHeaderFooterData(data);
  const headerPattern = patterns.header && patterns.header.sourceUrl;
  const footerPattern = patterns.footer && patterns.footer.sourceUrl;

  return (
    <MainLayout
      lang="uk"
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
            case "WordPress_HPage_Hclientreferralfieldsuk_UkBuildingArea_Header":
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
            case "WordPress_HPage_Hclientreferralfieldsuk_UkBuildingArea_HowItWorks":
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
            case "WordPress_HPage_Hclientreferralfieldsuk_UkBuildingArea_ContactForm":
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

export default ClientReferralUk;

export const query = graphql`
  query ClientReferralUkQuery($id: ID!) {
    wordPress {
      hPageBy(id: $id) {
        databaseId
        title
        hPageLanguage {
          pageLanguage
        }
        hClientReferralFieldsUk {
          ukBuildingArea {
            ... on WordPress_HPage_Hclientreferralfieldsuk_UkBuildingArea_Header {
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
            ... on WordPress_HPage_Hclientreferralfieldsuk_UkBuildingArea_HowItWorks {
              title
              subtitle
              description
            }
            ... on WordPress_HPage_Hclientreferralfieldsuk_UkBuildingArea_ContactForm {
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
