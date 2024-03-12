import React, {useState} from "react";
import "./styles.scss";
import Button from '../../../Button/Button';
import Quote from '../../HowItWorks/Quote';

function WhatItMeansSection(props) {
  return (
    <section
      className={
        "how-it-works-ads-whatitmeans-section"
      }
    >
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-6 col-md-12"}>
            <h2>{"Let’s take a look at what this means."}</h2>
            <img src={"/images/how-it-works/storyteller.svg"} />
          </div>
          <div className={"col-lg-6 col-md-9 col-sm-9 col-xs-10 quote-wrapper"}>
            <Quote
              quote={"“WunderKIND Ads deliver on a wide range of objectives for us; everything from upper funnel awareness and engagement down to lower funnel on-site actions, registrations, and purchases. Having one partner that can deliver up and down the funnel has been critical to our brands' success.”"}
              author={"Tito Flores III, \nClient Investment Lead at MediaCom"}
              textColor={"#FFFFFF"}
              borderColor={"#FFFFFF"}
              />


          </div>
        </div>
      </div>
    </section>
  );

}

export default WhatItMeansSection;
