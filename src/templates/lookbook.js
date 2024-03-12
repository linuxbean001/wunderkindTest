import React from "react";
import { graphql } from "gatsby";
import MainLayout from "../layouts/Main";
import LookbookComponent from "../Components/Page/Lookbook/Lookbook/Lookbook";
import GetLookbookData from "utils/useLookbook";
import Intro from "Components/General/Intro/Intro";

const Lookbook = props => {
  const { data } = props;
  const { lookbooks, categories, features, industries } = GetLookbookData(data);

  return (
    <MainLayout
      lang="us"
      mainClass="main-resources"
      headerPattern="/images/patterns/pattern-12.svg"
      footerPattern="/images/patterns/pattern-12.svg"
      // seoMeta={pageData.seo}
      // languages={pageData.hPageLanguage?.pageLanguage}
      {...props}
    >
      <Intro
        maxWidth="fit-content"
        content={{
          sideHeading: "ADVERTISER LOOOKBOOK",
          title: "Our curated collection of advertising creatives",
          subtitle: "",
        }}
        sorted={[]}
        list={[]}
      />
      <LookbookComponent
        lookbooks={lookbooks}
        categories={categories}
        features={features}
        industries={industries}
      />
    </MainLayout>
  );
};

export default Lookbook;

export const query = graphql`
  {
    wordPress {
      hLookbooks(first: 500) {
        nodes {
          databaseId
          title
          slug
          uri
          featuredImage {
            altText
            mediaItemUrl
          }
          hLookbookFeatures {
            edges {
              node {
                name
              }
            }
          }
          hLookbookIndustries {
            edges {
              node {
                name
              }
            }
          }
          hLookbookInventoryTypes {
            edges {
              node {
                name
              }
            }
          }
        }
      }
      hLookbookInventoryTypes {
        edges {
          node {
            name
          }
        }
      }
      hLookbookIndustries {
        edges {
          node {
            name
          }
        }
      }
      hLookbookFeatures {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;
