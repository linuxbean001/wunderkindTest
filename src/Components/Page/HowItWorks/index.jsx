import React from "react";
import HowItWorksIntro from './HowItWorksIntro';
import Divider from '../../General/Divider/Divider';
import "./styles.scss";
import Identity from './Identity';
import HowIsItPossible from './HowIsItPossible';
import SliderSection from './SliderSection';
import Partners from './Partners';
import TeamTools from './TeamTools';
import RequestDemo from '../../General/RequestDemo/RequestDemo';
import GetStarted from './GetStarted';
import WunderBot from "./WunderBot";

function HowItWorksWrapper(props) {
  return (
    <>
      <HowItWorksIntro />
      <Identity />
      <Divider maskColor={"#F5EBE0"} bgColor={"transparent"} direction={"top-left"} />
      <HowIsItPossible />
      <SliderSection />
      <Partners />
      <Divider maskColor={"#CC9966"} bgColor={"#F5EBE0"} direction={"bottom-right"} />
      <TeamTools />
      <Divider maskColor={"#FFBB00"} bgColor={"#F5EBE0"} direction={"top-left"} />
      <GetStarted backType="how-it-works-back-color"/>
      <WunderBot />
    </>
  );

}

export default HowItWorksWrapper;
