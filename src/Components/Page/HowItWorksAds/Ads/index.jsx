import React, {useState} from "react";
import "./styles.scss";
import Button from '../../../Button/Button';
import AdsComponent from './AdsComponent';

function AdsSection(props) {
  return (
    <section
      className={
        "how-it-works-ads-ads-section"
      }
    >
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-6"}>
            <h2>{"A WunderKIND Ad experience drives results."}</h2>
            <p>{"WunderKIND Ads deliver an unparalleled user-first ad experience by NOT interrupting the reader’s content consumption. Rather, once they disengage, we deliver our ads in an impactful, non-intrusive, and kind way."}</p>
          </div>
          <div className={"col-lg-5 numbers-wrapper"}>
            <div className={"number"}>
              {"76"}
              <span>{"%"}</span>
            </div>
            <p>{"of users have a negative perception of brands that interrupt their content consumption"}</p>
            <div className={"number"}>
              {"88"}
              <span>{"%"}</span>
            </div>
            <p>{"of users are unlikely to return to a publisher page that interrupts their content consumption"}</p>
          </div>
        </div>
      </div>
      <div className={"ads-container container"}>
        <AdsComponent />
      </div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-12"}>
            <h4>
              {`We run four billion A/B test impressions every month to understand which user behaviors drive the best performance. We found that a non-intrusive approach that puts user experience and content first delivers the best results.`}
              <br/>
              {`Check out client examples in our lookbook.`}
            </h4>
            <div className={"flex justify-center"}>
              <Button href={"/lookbook"}>{"View Lookbook"}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default AdsSection;
