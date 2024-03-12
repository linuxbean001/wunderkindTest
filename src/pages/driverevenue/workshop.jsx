import React, { useState, useMemo, useEffect } from "react";

// Main Layout
import "../../Components/Page/HomeRedesign/HomeRedesign.scss";

import MainLayout from "../../layouts/Main";
// Components
import LogoWallTickerLP from "../../Components/CampaignLandingPage/LogoWallTickerLP/LogoWallTickerLP";
import LPNav from "../../Components/CampaignLandingPage/LPNav/LPNav";
import { useInView } from "react-intersection-observer";
import "../../Components/CampaignLandingPage/LpStyles/lp-styles.scss";
import CampaignForm from "../../Components/CampaignLandingPage/CampaignForm/CampaignForm";

function IDLPHVO(props) {
  const browser = typeof window !== "undefined" && window;
  const { ref: contentRef, inView: isContentVisible } = useInView();
  const { ref: statRef, inView: isStatVisible } = useInView();

  // Scroll functions
  useEffect(() => {
    const ctaTop = document.querySelector(".cta-top");
    if (ctaTop) {
      function scrollCheck() {
        let windowScroll = document.documentElement.scrollTop;
        if (windowScroll > 10) {
          ctaTop.classList.add("overlay-show");
        }
      }
      document.addEventListener("scroll", scrollCheck);
    }
  }, []);

  return (
    browser && (
      <MainLayout
        hideHeader={true}
        footerPattern="/images/patterns/pattern-14.svg"
        hideLanguageSwitch={true}
        defaultStickyMenu={true}
        seoMeta={{
          title: `Wunderkind - eCommerce 
          Marketing Strategy Workshop - Sign Up`,
          metaDesc: `Join our eCommerce Marketing Strategy Workshop to sit down one-on-one with a Wunderkind Strategy Consultant. Discover how to optimize your reach and return in the face of these challenges and emerge as an era-dying brand.`,
        }}
        {...props}
      >
        <div className="lp-ab-campaign">
          {/* Header */}
          <LPNav></LPNav>
          <div className="spacer-section d-none d-md-block"></div>
          {/* Hero Section */}
          <section
            className="form-section"
            style={{
              backgroundImage: "url(/images/lpimages/hvo-header-top-bg.svg)",
            }}
          >
            <div className="container d-flex flex-wrap">
              <div className="col-12 col-md-6 col-lg-7">
                {" "}
                <h2>
                  eCommerce{" "}
                  <img
                    src="/images/lpimages/Sidekick Blueberry.svg"
                    width="94"
                    height="33"
                    alt=""
                  />{" "}
                  <br></br>
                  <img
                    src="/images/lpimages/Guru Canary.svg"
                    width="37"
                    height="36"
                    alt=""
                  />{" "}
                  Marketing Strategy Workshop{" "}
                  <img
                    src="/images/lpimages/Visionary Peacock.svg"
                    width="101"
                    height="36"
                    alt=""
                    className="mx-2"
                  />
                </h2>
                <h3 className="font-wund-larsseit font-weight-bold">
                  Feeling the pressure?
                </h3>
                <p>
                  Facebook and Instagram conversion rates are plummeting, paid
                  media spending is out of control, and the deprecation of
                  third-party cookies is upon us. Marketing leaders are being
                  forced to rethink their channel mix—while striving to meet
                  ambitious revenue goals and drive sustainable growth with
                  shrinking budgets.
                </p>
                <p>
                  Join our eCommerce Marketing Strategy Workshop to sit down
                  one-on-one with a Wunderkind Strategy Consultant. Discover how
                  to optimize your reach and return in the face of these
                  challenges and emerge as an era-defying brand.
                </p>
                <h3 className="font-wund-larsseit font-weight-bold">
                  In this 60-minute workshop, <br></br>we’ll walk you through
                  how to:
                </h3>
                <ul className="font-wund-larsseit number-list">
                  <li>
                    <img src="/images/lpimages/bullet1.svg" width="40" alt="" />
                    Accelerate your marketing ROI by efficiently reallocating
                    your budget
                  </li>
                  <li>
                    <img src="/images/lpimages/bullet2.svg" width="40" alt="" />
                    Prioritize owned channels so you're never at the mercy of
                    paid media's whims
                  </li>
                  <li>
                    <img src="/images/lpimages/bullet3.svg" width="40" alt="" />
                    Identify and influence your ideal customers throughout their
                    purchasing journey
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-5 flex justify-content-center form-section-col">
                <CampaignForm
                  formId={"4341"}
                  marketoFormSubtitle="Want to drive unprecedented revenue? Sign up for our marketing strategy workshop."
                  custom
                />
              </div>
            </div>
          </section>
          {/* Spacer */}
          <div className="spacer-section d-none d-lg-block"></div>
          {/* Testimonial */}
          <section className="py-5">
            <div
              className={`container d-flex align-items-center py-5 testimonial`}
            >
              <div className="col-12 col-lg-7 py-5 py-5 block-quote-col line-yellow">
                <blockquote className="pb-4">
                  “Adding Wunderkind to our marketing stack is one of the most
                  influential decisions in the history of our website. We were
                  amazed by the ROAS we saw when we launched and remain even
                  more amazed that we have maintained that ROAS years later.”
                </blockquote>
                <small>
                  Ken Natori<br></br>President of the Natori Company
                </small>
              </div>
              <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-md-end">
                <img
                  src="/images/lpimages/testimonial-portrait2.png"
                  alt="Testimonial Portrait"
                  width="340"
                />
              </div>
            </div>
          </section>
          {/* Logo Ticker */}
          <LogoWallTickerLP></LogoWallTickerLP>
          <div className="spacer-section" id="hvo"></div>
          {/* CTA Anchor Section */}
          <div className="section-mask-wrap divider-styles bottom-right background-blue">
            <svg
              role="presentation"
              className="divider"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1920 263.9"
            >
              <g id="divider" transform="translate(0 -73)">
                <path
                  style={{ fill: "var(--brand-black)" }}
                  fill="var(--brand-black)"
                  d="M1920,76.7L940.5,289.1C572.8,368.9,259.2,348.9,0,228.9V73h1920V76.7z"
                />
              </g>
            </svg>
          </div>
          <section
            className={`results-page-container d-flex justify-content-between`}
          >
            <div
              className={`container d-flex flex-wrap-reverse flex-lg-nowrap align-items-center py-5`}
            >
              <div
                className={`col-12 col-lg-8 ${
                  isContentVisible ? "fade-in" : ""
                }`}
              >
                <h2>The evolution of performance marketing is already here</h2>
                <p>
                  Get ready to say goodbye to that little snippet of code
                  driving your brand's digital marketing strategy. But here's
                  the good news: first-party data is one of the most valuable
                  assets your brand controls. It gives you a 360-degree view of
                  your customers and unlocks the potential to create one-to-one
                  experiences that build trust and loyalty. Embrace the new era
                  of performance marketing and turn your owned channels into a
                  robust, customer-centric growth engine.
                </p>
              </div>
              <div className={`col-12 col-lg-4 d-flex justify-content-end`}>
                <img
                  className={`icon-margin`}
                  src="/images/lpimages/wunderkind-icon.svg"
                  width="224"
                  height="224"
                  alt=""
                />
              </div>
            </div>
            <div className={`container`}>
              <div
                className={`col-12 stat-cards two-col gap-lg ${
                  isStatVisible ? "fade-in" : ""
                }`}
              >
                <div className="stat-card">
                  <h3>
                    88%{" "}
                    <img
                      src="/images/lpimages/header-chart1.svg"
                      width="181"
                      alt=""
                    />
                  </h3>
                  <p>
                    of brands say first-party data is their #1 priority, with
                    ~47% already decreasing their reliance on it
                  </p>
                  <small>Source: Marketing Dive</small>
                </div>
                <div className="stat-card">
                  <h3>
                    2.9x{" "}
                    <img
                      src="/images/lpimages/header-chart2.svg"
                      width="179"
                      alt=""
                    />
                  </h3>
                  <p>
                    revenue uplift & 1.5X cost savings can be achieved when
                    using first-party data for key marketing functions
                  </p>
                  <small>Source: Boston Consulting Group</small>
                </div>
              </div>
            </div>
          </section>
          <section className="background-blue d-flex">
            <img
              className="results-page-background-pattern align-self-end"
              src="/images/lpimages/cta-bg-pattern-dark.svg"
              alt=""
            />
          </section>
        </div>
      </MainLayout>
    )
  );
}

export default IDLPHVO;
