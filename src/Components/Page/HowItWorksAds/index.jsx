import React from "react";
import "./styles.scss";
import HowItWorksAdsIntro from './HowItWorksAdsIntro';
import WhatItMeans from './WhatItMeans';
import Divider from '../../General/Divider/Divider';
import AdsSection from './Ads';
import SliderSection from './SliderSection';
import Results from './Results';
import Logos from './Logos';

function HowItWorksAdsWrapper(props) {
  return (
    <>
      <HowItWorksAdsIntro />
      <WhatItMeans />
      <Divider direction="top-left" maskColor="#F5EBE0" bgColor="#191919" />
      <AdsSection />
      <SliderSection />
      <Divider direction="top-left" maskColor="#F5EBE0" bgColor="#191919" />
      <Results />
      <Logos />
    </>
  );

}

export default HowItWorksAdsWrapper;
