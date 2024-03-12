import React from 'react';
import MainLayout from '../../layouts/Main';
import HowItWorksAdsWrapper from '../../Components/Page/HowItWorksAds';
import { Helmet } from 'react-helmet';

function HowItWorks(props) {
  return (
    <MainLayout
      lang={"uk"}
      languages={["us", "uk"]}
      className={"mask5"}
      defaultStickyMenu={true}
      {...props}
    >
      <Helmet>
        <title>Advertising Solutions for Advertisers & Publishers | Wunderkind</title>
        <link rel="canonical" href="https://www.wunderkind.co/uk/how-it-works/advertising-solutions-for-advertisers-and-publishers/" />
        <meta
          name="description"
          content="Grow your revenue with Wunderkind's performance advertising solutions. Our non-intrusive ad experiences drive results for advertisers and publishers."
        />
      </Helmet>
      <HowItWorksAdsWrapper />
    </MainLayout>
  );
}

export default HowItWorks;