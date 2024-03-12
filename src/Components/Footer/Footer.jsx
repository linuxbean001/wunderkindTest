import React, { useState } from "react";
import Image from "./../Image/Image";
import LanguageSwitcher from "./../LanguageSwitcher/LanguageSwitcher";
import { graphql, Link, useStaticQuery } from "gatsby";

import "./Footer.scss";
import { AddLang } from "../../utils/addLang";
import { getVideoData } from "../../utils/getVideoData";
import Carousel, { CarouselItem } from "../Carousel/Carousel";

function getFooterData(data) {
  return data.wordPress.generalSettingsHeadless.hGeneralSettingsPage;
}

const Footer = props => {
  const data = useFooterMetaData();
  if (typeof window !== "undefined") {
    window.__navigatingToLink = false;
  }
  const bgPattern =
    props.bgPattern !== undefined ? props.bgPattern : "/images/hero/waw-1.svg";

  const footerData = getFooterData(data);
  const infoSection = footerData.infoSection ? [...footerData.infoSection] : [];

  const carouselItemsSize = 4;
  const infoSectionArray = [];
  for (let i = 0; i < infoSection.length; i += carouselItemsSize) {
    const carouselItems = infoSection.slice(i, i + carouselItemsSize);
    infoSectionArray.push(carouselItems);
  }

  const [utilityMenu, setUtilityMenu] = useState(
    props.lang === "uk"
      ? footerData.utilityMenuUkUtilityMenu
        ? footerData.utilityMenuUkUtilityMenu
        : []
      : footerData.utilityMenu
      ? footerData.utilityMenu
      : []
  );
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-col-logo">
                {footerData.logoFooter && footerData.logoFooter.sourceUrl && (
                  <div className="footer-logo-category-container">
                    <Image
                      src={footerData.logoFooter.sourceUrl}
                      alt={footerData.logoFooter.altText}
                    ></Image>
                    <ul className="footer-categories">
                      <li className="footer-category-item">
                        <Link to="/about-us">Company</Link>
                      </li>
                      <li className="footer-category-item">
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li className="footer-category-item">
                        <Link to="/culture">Culture & Careers</Link>
                      </li>
                      <li className="footer-category-item">
                        <Link to="/diversity-and-inclusion">
                          Diversity & Inclusion
                        </Link>
                      </li>
                      <li className="footer-category-item">
                        <Link to="/open-roles">Open Roles</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 d-none d-lg-block">
              <Carousel isHidden={infoSection.length < 4}>
                {infoSectionArray.map((item, index) => {
                  return (
                    <CarouselItem key={index}>
                      {item.map((info, index) => {
                        return (
                          <div
                            className={`info-item ${
                              infoSection.length <= 2 ? "col-6" : "col-3"
                            } col-lg-2 ${index !== 0 ? "offset-lg-1" : ""}`}
                            key={`footer-info-${index}`}
                          >
                            <h2 className="title">{info.title}</h2>
                            <div
                              className="info"
                              dangerouslySetInnerHTML={{ __html: info.info }}
                            ></div>
                            {info.ctaGroup.text && info.ctaGroup.url && (
                              <div className="link">
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href={AddLang(info.ctaGroup.url, props.lang)}
                                  {...getVideoData(info.ctaGroup.url)}
                                  aria-label="Open in a new window"
                                >
                                  {info.ctaGroup.text}
                                </a>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </CarouselItem>
                  );
                })}
              </Carousel>
            </div>
            {infoSection.map((item, index) => {
              return (
                <div
                  className={`d-block d-lg-none info-item ${
                    infoSection.length <= 2
                      ? "col-6 col-md-4"
                      : "col-6 col-md-4"
                  } col-lg-2 ${index !== 0 ? "offset-lg-1" : ""}`}
                  key={`footer-info-${index}`}
                >
                  <div role="heading" className="title">
                    {item.title}
                  </div>
                  <div
                    className="info"
                    dangerouslySetInnerHTML={{ __html: item.info }}
                  ></div>
                  {item.ctaGroup.text && item.ctaGroup.url && (
                    <div className="link">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={AddLang(item.ctaGroup.url, props.lang)}
                        {...getVideoData(item.ctaGroup.url)}
                      >
                        {item.ctaGroup.text}
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="row align-items-center footer-row">
            <div className="soc-lang-wrap">
              <ul className="social-nav">
                {footerData.instagramUrl && (
                  <li>
                    <a
                      alt="instagram"
                      aria-label="Open in a new window"
                      target="_blank"
                      rel="noreferrer"
                      href={AddLang(footerData.instagramUrl, props.lang)}
                    >
                      <Image src="/images/icons/icon-instagram.svg"></Image>
                    </a>
                  </li>
                )}
                {footerData.linkedInUrl && (
                  <li>
                    <a
                      alt="linkedin"
                      aria-label="Open in a new window"
                      target="_blank"
                      rel="noreferrer"
                      href={AddLang(footerData.linkedInUrl, props.lang)}
                    >
                      <Image src="/images/icons/icon-linkedin.svg"></Image>
                    </a>
                  </li>
                )}
                {footerData.twitterUrl && (
                  <li>
                    <a
                      alt="twitter"
                      aria-label="Open in a new window"
                      target="_blank"
                      rel="noreferrer"
                      href={AddLang(footerData.twitterUrl, props.lang)}
                    >
                      <Image src="/images/icons/icon-twitter.svg"></Image>
                    </a>
                  </li>
                )}
                {footerData.facebookUrl && (
                  <li>
                    <a
                      alt="facebook"
                      aria-label="Open in a new window"
                      target="_blank"
                      rel="noreferrer"
                      href={AddLang(footerData.facebookUrl, props.lang)}
                    >
                      <Image src="/images/icons/icon-facebook.svg"></Image>
                    </a>
                  </li>
                )}
              </ul>
            </div>
            {props.hideLanguageSwitch !== true && (
              <LanguageSwitcher
                lang={props.lang}
                renderer={props.renderer}
                toggleHref={props.toggleHref}
              />
            )}
            <div className="col-lg-6">
              {utilityMenu && (
                <ul className="menu">
                  {utilityMenu.map((item, index) => {
                    return (
                      <li key={`footer-menu-${index}`}>
                        <a
                          href={AddLang(item.menuItem.url, props.lang)}
                          {...getVideoData(item.menuItem.url)}
                        >
                          {item.menuItem.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        {/* <h6>Services not intended for European Union traffic under this brand. If you are based in the EU, please visit <a href="https://www.wunder.com">wunder.com</a> </h6> */}
        </div>
      </footer>

      <div className="image-footer-wrap plx-animate">
        <div
          className="image-under-footer"
          style={{ backgroundImage: "url(" + bgPattern + ")" }}
        ></div>
      </div>
    </>
  );
};
export default Footer;

const useFooterMetaData = () => {
  const footer = useStaticQuery(
    graphql`
      query {
        wordPress {
          generalSettingsHeadless {
            hGeneralSettingsPage {
              logoFooter {
                altText
                sourceUrl
              }
              infoSection {
                title
                info
                ctaGroup {
                  text
                  url
                }
              }
              utilityMenu {
                menuItem {
                  text
                  url
                }
              }
              utilityMenuUkUtilityMenu {
                menuItem {
                  text
                  url
                }
              }
              instagramUrl
              linkedInUrl
              twitterUrl
              facebookUrl
            }
          }
        }
      }
    `
  );
  return footer;
};

export const fragment = graphql`
  fragment FooterPattern on WordPress_HPage_Hpagelayouts {
    __typename
    footer {
      sourceUrl
    }
  }
`;
