import React, { useState, useEffect, useMemo } from "react";

// Main Layout
import "../Components/Page/HomeRedesign/HomeRedesign.scss";

import MainLayout from "../layouts/Main";
// Components
import LogoWallTickerLP from "../Components/CampaignLandingPage/LogoWallTickerLP/LogoWallTickerLP";
import LPNav from "../Components/CampaignLandingPage/LPNav/LPNav";
import Arrow from "../Components/CampaignLandingPage/LPArrow/LPArrow";
import { useInView } from "react-intersection-observer";

import "../Components/CampaignLandingPage/LpStyles/lp-styles.scss";

function IDLPAwareness(props) {
  const browser = typeof window !== "undefined" && window;

  const { ref: showRef, inView: isCardVisible } = useInView();
  const [scrollDisabled, setScrollDisabled] = useState(false);

  // Body Scroll Lock Function
  useEffect(() => {
    const bodyScroll = document.getElementsByTagName("body"),
      listScroll = document.querySelector(".scroll-list"),
      yellowOverlay = document.querySelector(".yellow-overlay"),
      ctaTop = document.querySelector(".cta-top"),
      learnButton = document.querySelector(".learn-more"),
      hvoSection = document.getElementById("hvo");
    let wheelScroll = 0;
    let windowScroll = document.documentElement.scrollTop;
    if (windowScroll < 500) {
      bodyScroll[0].classList.add("disable-scroll");
    }
    if (listScroll) {
      onwheel = e => {
        wheelScroll += e.deltaY * 0.1;
        listScroll.scrollTop += wheelScroll;
      };
      windowScroll = document.documentElement.scrollTop;
      function scrollCheck() {
        if (listScroll.scrollTop > 1250) {
          yellowOverlay.classList.add("overlay-show");
          ctaTop.classList.add("overlay-show");
          setTimeout(() => {
            bodyScroll[0].classList.remove("disable-scroll");
          }, "1000");
        }
      }

      document.addEventListener("scroll", scrollCheck);
      listScroll.addEventListener("scroll", scrollCheck);
      learnButton.addEventListener("pointerdown", function(e) {
        document.body.classList.remove("disable-scroll");
        setTimeout(() => {
          hvoSection.scrollIntoView();
        }, 100);
      });
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
          Marketing Strategy Workshop`,
          metaDesc: `Supercharge your performance marketing results and discover more efficient ways to connect with customers—while driving revenue at scale.`,
        }}
        {...props}
      >
        <div className="lp-ab-campaign">
          {/* Header */}
          <LPNav></LPNav>
          <div className="spacer-section d-none d-md-block"></div>
          {/* Hero Section */}
          <section className="hero-section d-flex flex-column">
            {/* CTA Banner */}
            <div
              className="container-fluid cta-banner-top"
              style={{
                backgroundImage: "url(/images/lpimages/cta-sm-bg-pattern.png)",
              }}
            >
              <div className="container col-cta d-flex align-items-center flex-wrap">
                <div className="col-12 col-md-7 col-lg-9">
                  <h2>eCommerce Marketing Strategy Workshop</h2>
                </div>
                <div className="col-12 col-md-5 col-lg-3 d-flex align-items-center justify-content-center justify-content-md-end gap">
                  <a
                    href="/driverevenue/workshop"
                    className="btn btn-fill background-yellow"
                  >
                    <div className="btn-lbl-helper">Sign Up</div>
                    <span className="in background-yellow">Sign Up</span>
                    <span className="out">Sign Up</span>
                  </a>
                  <a
                    href="#hvo"
                    className="btn btn-inv background-black border-yellow learn-more"
                  >
                    <div className="btn-lbl-helper">Learn More</div>
                    <span className="in background-black">Learn More</span>
                    <span className="out">Learn More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="container d-flex align-self-center flex-grow-1 align-items-center flex-wrap">
              <div className="col-12 col-md-12 col-lg-6">
                <h1>
                  You won't <br className="d-none d-lg-block"></br>drive revenue
                  <span className="color-yellow">*</span>
                </h1>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <ul className="scroll-list">
                  <li>
                    <span className="color-yellow">*</span>If you can’t scale
                    your owned channels before 2024
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can only
                    identify 5% of your website visitors
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t invest
                    in your list growth strategy
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t optimize
                    your website for superior CX
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t use your
                    owned channels to drive loyalty
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t break
                    free from Google & Facebook ad reliance
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t
                    diversify and shake up your program spend
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t avoid
                    double messaging for a single conversion
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If your ad TechStack
                    doesn’t directly translate to revenue
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can’t scale
                    your owned channels before 2024
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can only
                    identify 5% of your website visitors
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t invest
                    in your list growth strategy
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t optimize
                    your website for superior CX
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t use your
                    owned channels to drive loyalty
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t break
                    free from Google & Facebook ad reliance
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t
                    diversify and shake up your program spend
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t avoid
                    double messaging for a single conversion
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If your ad TechStack
                    doesn’t directly translate to revenue
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can’t scale
                    your owned channels before 2024
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can only
                    identify 5% of your website visitors
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t invest
                    in your list growth strategy
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t optimize
                    your website for superior CX
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t use your
                    owned channels to drive loyalty
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t break
                    free from Google & Facebook ad reliance
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t
                    diversify and shake up your program spend
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t avoid
                    double messaging for a single conversion
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If your ad TechStack
                    doesn’t directly translate to revenue
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can’t scale
                    your owned channels before 2024
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can only
                    identify 5% of your website visitors
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t invest
                    in your list growth strategy
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t optimize
                    your website for superior CX
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t use your
                    owned channels to drive loyalty
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t break
                    free from Google & Facebook ad reliance
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t
                    diversify and shake up your program spend
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t avoid
                    double messaging for a single conversion
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If your ad TechStack
                    doesn’t directly translate to revenue
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can’t scale
                    your owned channels before 2024
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can only
                    identify 5% of your website visitors
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t invest
                    in your list growth strategy
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t optimize
                    your website for superior CX
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t use your
                    owned channels to drive loyalty
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t break
                    free from Google & Facebook ad reliance
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t
                    diversify and shake up your program spend
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t avoid
                    double messaging for a single conversion
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If your ad TechStack
                    doesn’t directly translate to revenue
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can’t scale
                    your owned channels before 2024
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can only
                    identify 5% of your website visitors
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t invest
                    in your list growth strategy
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t optimize
                    your website for superior CX
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t use your
                    owned channels to drive loyalty
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t break
                    free from Google & Facebook ad reliance
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t
                    diversify and shake up your program spend
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t avoid
                    double messaging for a single conversion
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If your ad TechStack
                    doesn’t directly translate to revenue
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can’t scale
                    your owned channels before 2024
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can only
                    identify 5% of your website visitors
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t invest
                    in your list growth strategy
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t optimize
                    your website for superior CX
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t use your
                    owned channels to drive loyalty
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t break
                    free from Google & Facebook ad reliance
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t
                    diversify and shake up your program spend
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t avoid
                    double messaging for a single conversion
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If your ad TechStack
                    doesn’t directly translate to revenue
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can’t scale
                    your owned channels before 2024
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you can only
                    identify 5% of your website visitors
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t invest
                    in your list growth strategy
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t optimize
                    your website for superior CX
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t use your
                    owned channels to drive loyalty
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t break
                    free from Google & Facebook ad reliance
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t
                    diversify and shake up your program spend
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If you don’t avoid
                    double messaging for a single conversion
                  </li>
                  <li>
                    <span className="color-yellow">*</span>If your ad TechStack
                    doesn’t directly translate to revenue
                  </li>
                </ul>
              </div>
            </div>
            {/* Yellow show-hide section */}
            <div className="container-fluid d-flex flex-column justify-content-stretch yellow-overlay">
              <div className="container d-flex flex-column flex-md-row align-items-center flex-lg-grow-1">
                <div className="col-sm-12 col-md-6 col-lg-8 delay-animation">
                  <h2>
                    It’s time for a<br></br>future-forward reset.
                  </h2>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 hero-show-content font-wund-larsseit delay-animation">
                  <h3>
                    The key to performance marketing success lies in{" "}
                    <strong>first-party data.</strong>
                    <br />
                    <br />
                    <strong>
                      So, what should marketers do when third-party data has
                      been their key driver in delivering one-to-one
                      experiences?
                    </strong>
                  </h3>
                </div>
              </div>
              {/* Pattern Divider */}
              <img
                className="pattern-divider"
                src="/images/lpimages/yellow-pattern-divider.svg"
              />
            </div>
          </section>
          {/* Stats Section */}
          <section className="slider-section">
            <div className="container d-flex">
              <div className="col-12 col-sm-8 col-lg-6">
                <h2 className="fade-in">Embrace your owned channels.</h2>
                <p>
                  eCommerce marketers have encountered a minefield of challenges
                  over the past few years. They navigated through new data and
                  privacy regulations, adjusted to shifting consumer shopping
                  habits, and grappled with paid media channels that failed to
                  deliver the anticipated returns. To compound matters, the
                  effectiveness of these channels was further disrupted by the
                  introduction of iOS 14.5. Fortunately, there is a silver
                  lining as first-party data is gaining strength and proving
                  more powerful and cost-effective than third-party data.
                </p>
              </div>
              <div className="col-12 col-sm-4 col-lg-6 d-flex justify-content-end">
                <img
                  src="/images/lpimages/LP1Graphic.svg"
                  alt=""
                  width="452"
                  height="437"
                />
              </div>
            </div>
            <div
              ref={showRef}
              className={`container ${isCardVisible ? "fade-in" : ""}`}
            >
              <div className="col-12 stat-cards three-col gap-lg">
                <div className="stat-card">
                  <h3 className="color-green">
                    14<span className="small-symbol">%</span>
                  </h3>
                  <p>
                    of brands achieve a true <br></br>360-degree view of their
                    customer
                  </p>
                  <small>Source: Wunderkind</small>
                </div>
                <div className="stat-card">
                  <h3 className="color-green">
                    Only 5<span className="small-symbol">%</span>
                  </h3>
                  <p>
                    of website visitors can be identified through <br></br>
                    legacy SaaS
                  </p>
                  <small>Source: Wunderkind</small>
                </div>
                <div className="stat-card">
                  <h3 className="color-green">
                    82<span className="small-symbol">%</span>
                  </h3>
                  <p>
                    of media for retail & CPG industries are driven by
                    cookie-based ad tactics
                  </p>
                  <small>Source: Business of Fashion</small>
                </div>
                <div className="stat-card">
                  <h3 className="color-green">
                    Just 9<span className="small-symbol">%</span>
                  </h3>
                  <p>
                    of leaders believe their tech stack greatly enables their
                    marketing performance
                  </p>
                  <small>Source: Wunderkind</small>
                </div>
                <div className="stat-card">
                  <h3 className="color-green">
                    61<span className="small-symbol">%</span>
                  </h3>
                  <p>
                    YOY increase on <br></br>Facebook’s CPM
                  </p>
                  <small>Source: Wunderkind</small>
                </div>
                <div className="stat-card">
                  <h3 className="color-green">
                    185<span className="small-symbol">%</span>
                  </h3>
                  <p>
                    YOY increase on <br></br>Tiktok CPM
                  </p>
                  <small>Source: Insider</small>
                </div>
              </div>
            </div>
          </section>
          {/* Logo Ticker */}
          <LogoWallTickerLP></LogoWallTickerLP>
          {/* Testimonial */}
          <section className={`py-5 `}>
            <div className="container d-flex align-items-center py-5 testimonial">
              <div className="col-12 col-lg-7 py-5 block-quote-col line-peacock">
                <blockquote className="pb-4">
                  “Wunderkind consistently ranks in our top revenue channels and
                  has helped us dramatically grow our email list. Even more
                  valuable is the strategic insights the Wunderkind team
                  provides to help us delight our customers.”
                </blockquote>
                <small>
                  Jenna Linares<br></br>
                  Executive Director of Digital at Tarte
                </small>
              </div>
              <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-md-end">
                <img
                  src="/images/lpimages/testimonial-portrait1.png"
                  alt="Testimonial Portrait"
                  width="340"
                />
              </div>
            </div>
          </section>
          {/* CTA Anchor Section */}
          {/* Top Shape Divider */}
          <div className="section-mask-wrap divider-styles  bottom-right background-blue">
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
          {/* Content Section */}
          <section
            id="hvo"
            className="results-page-container d-flex justify-content-between"
          >
            <div className="container d-flex flex-wrap align-items-center py-5">
              <div className="col-12 col-lg-6">
                <h3 className="eyebrow-text small">WANT TO LEARN EVEN MORE?</h3>
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
              </div>
              <div className="col-12 col-lg-6">
                <p className="bold pb-4">
                  Supercharge your performance marketing results and discover
                  more efficient ways to connect with customers—while driving
                  revenue at scale. Secure your spot for a one-on-one workshop
                  with a Wunderkind Strategy Consultant. Learn how you can
                  reallocate your spending and prioritize owned channels. Turn a
                  cookie-less future into a competitive advantage.
                </p>
                <a
                  href="/driverevenue/workshop"
                  className="btn btn-fill background-yellow"
                >
                  <div className="btn-lbl-helper">Sign Up</div>
                  <span className="in background-yellow">Sign Up</span>
                  <span className="out">Sign Up</span>
                </a>
              </div>
            </div>
          </section>
          {/* Bottom Shape Divider */}
          <section className="background-blue d-flex">
            <img
              className="results-page-background-pattern align-self-end"
              src="/images/lpimages/cta-bg-pattern-dark.svg"
              alt=""
            />
          </section>
          {/* Resource Cards */}
          <section className="py-5">
            <div className="container">
              <div className="col-12">
                <h2>Resources</h2>
              </div>
            </div>
            <div className="container flex flex-wrap flex-lg-nowrap justify-content-center info-cards">
              <div className="col-sm-6 col-lg-4 flip-card-container resource-info-card">
                <div className="card">
                  <div style={{ backgroundColor: "#303D78" }} className="front">
                    <div
                      style={{
                        backgroundImage: `url(
                            "/images/lpimages/yellow-resource-graphic.png"
                          )`,
                      }}
                      className="heading-shape"
                    ></div>
                    <div className="info">
                      <div className="eyebrow-text">RESEARCH STUDY</div>
                      <div className="title">
                        Industry Pulse: Consumer Spending During Economic
                        Uncertainty
                      </div>
                      <button className="btn-wrap">
                        <Arrow
                          href="https://convert.bouncex.com/rs/445-FJV-353/images/Consumer%20Spending%20During%20Economic%20Uncertainty.pdf"
                          target="_blank"
                          dark
                        />
                      </button>
                      <div className="note"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 flip-card-container resource-info-card">
                <div className="card">
                  <div style={{ backgroundColor: "#303D78" }} className="front">
                    <div
                      style={{
                        backgroundImage: `url(
                            "/images/lpimages/blue-resource-graphic.png"
                          )`,
                      }}
                      className="heading-shape"
                    ></div>
                    <div className="info">
                      <div className="eyebrow-text">PODCAST</div>
                      <div className="title">
                        Arianne Parisi & Lora Loesch, Finish Line & JD Sports US
                      </div>
                      <button className="btn-wrap">
                        <Arrow
                          href="https://www.wunderkind.co/resources/podcasts/arianne-parisi-lora-loesch-finish-line-jd-sports-us/"
                          target="_blank"
                          dark
                        />
                      </button>
                      <div className="note"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 flip-card-container resource-info-card">
                <div className="card">
                  <div style={{ backgroundColor: "#303D78" }} className="front">
                    <div
                      style={{
                        backgroundImage: `url(
                            "/images/lpimages/red-resource-graphic.png"
                          )`,
                      }}
                      className="heading-shape"
                    ></div>
                    <div className="info ">
                      <div className="eyebrow-text">CASE STUDY</div>
                      <div className="title">
                        Building a Revenue Driving, End-to-End Marketing
                        Solution for UNIQLO
                      </div>
                      <button className="btn-wrap">
                        <Arrow
                          href="https://www.wunderkind.co/resources/case-studies/uniqlo/"
                          target="_blank"
                          dark
                        />
                      </button>
                      <div className="note"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    )
  );
}

export default IDLPAwareness;
