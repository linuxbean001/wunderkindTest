import React, { useState, useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import '../Components/Page/HomeRedesign/HomeRedesign.scss'
import MainLayout from "../layouts/Main";
import Button from "../Components/Button/Button";
import Arrow from '../Components/Arrow/Arrow'
import Carousel from 'react-multi-carousel';
import Plus from '../../public/images/Plus.svg'
import LandingSectionPattern from '../../public/images/landing-section-pattern.svg'
import { useInView } from 'react-intersection-observer';
import Divider from '../Components/General/Divider/Divider'

import GetHeaderFooterData from "utils/useHeaderFooterPages";

const responsiveCarousel = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2561 },
    items: 5,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 2560, min: 1166 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1165, min: 769 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};


function App(props) {

  const homeData = useStaticQuery(
    graphql
    `
  query HomePage{
    wordPress{
      hPage(id: "aC1wYWdlOjQ5NTc=") {
            homePageRedesign {
                           primaryheader
                           description
                           ctabutton
                           featuredimage {
                             sourceUrl
                             altText
                           }
                           shapesimage {
                             sourceUrl
                             altText
                           }
                           revenuepagebackgroundpattern {
                             sourceUrl
                             altText
                           }
                           secondaryheaderrevenuepage
                           smallcardheaderrevenuepage
                           cardlargenumberrevenuepage
                           carddescriptionrevenuepage
                           cardimagesrevenuepage {
                             sourceUrl
                             altText
                           }
                           cardctabuttonrevenuepage
                           cardbackgroundpatternrevenuepage {
                             sourceUrl
                             altText
                           }
                           smallcardheaderrevenuepage2
                           cardlargenumberrevenuepage2
                           carddescriptionrevenuepage2
                           secondaryheaderbrandspage
                           brandsimageslogos {
                             sourceUrl
                             altText
                           }
                           brandsimagesandlogos {
                             sourceUrl
                             altText
                           }
                           brandsimageshref
                           brandsimageshref1
                           brandsimageshref2
                           brandsimageshref3
                           brandsimageshref4
                           brandsimageshref5
                           brandsimageshref6
                           brandsimageshref7
                           brandsimageshref8
                           brandsimageshref9
                           brandsimageshref10
                           brandsimageshref11
                           cookiepageheader
                           cookiepageheartimage {
                             sourceUrl
                             altText
                           }
                           cookiepagelargenumber
                           cookiepagesmalldescription
                           cookiepagedescriptionsource
                           cookiepagecookieimage {
                             sourceUrl
                             altText
                           }
                           cookiepagelargenumber2
                           cookiepagesmalldescription2
                           cookiepagedescriptionsource2
                           cookiepagelargenumber3
                           cookiepagesmalldescription3
                           cookiepagedescriptionsource3
                           cookiepagebottomheader
                           cookiepagectabutton
                           weunderstandpageheader
                           weunderstandpageheaderimage {
                             sourceUrl
                             altText
                           }
                           weunderstandpageheadercontinued
                           weunderstandpageheaderimagecontinued {
                             sourceUrl
                             altText
                           }
                           weunderstandpageacademicimage {
                             sourceUrl
                             altText
                           }
                           weunderstandpagepaperplaneimage {
                             sourceUrl
                             altText
                           }
                           weunderstandpagesmalldescription
                           resultspagelinepatternimage {
                             sourceUrl
                             altText
                           }
                           resultspagedescriptionheader
                           resultspageheartphoneimage {
                             sourceUrl
                             altText
                           }
                           resultspagepaperplaneimage {
                             sourceUrl
                             altText
                           }
                           resultspageheader
                           resultspagelargenumber
                           resultspagesmalldescription
                           resultspagelargenumber2
                           resultspagesmalldescription2
                           resultspagelargenumber3
                           resultspagesmalldescription3
                           resultspagepaperplaneimage2 {
                             sourceUrl
                             altText
                           }
                           resultspageheader2
                           resultspagesmallparagraphdescription
                           resultspagearrowimage {
                             sourceUrl
                             altText
                           }
                           resultspagelinepatternimage2 {
                             sourceUrl
                             altText
                           }
                           resultspagepaperplaneimage3 {
                             sourceUrl
                             altText
                           }
                           resultspagebrandsimages {
                             sourceUrl
                             altText
                           }
                           resultspagebrandsimagesnumber
                           resultspagebrandsimagesnumber2
                           resultspagebrandsimagesnumber3
                           resultspagebrandsimagesnumber4
                           resultspagebrandsimagesnumber5
                           resultspagebrandsimagessmallheader
                           resultspagebackgroundpattern {
                             sourceUrl
                             altText
                           }
                           resultspagectabutton
                           performancepageheader
                           performancepagecardcategory
                           performancepagecardcategory2
                           performancepagecardcategory3
                           performancepagecardcategory4
                           performancepagecardheader
                           performancepagecardheader2
                           performancepagecardheader3
                           performancepagecardheader4
                           performancepagecarddescription
                           performancepagecarddescription2
                           performancepagecarddescription3
                           performancepagecarddescription4
                           performancepagecardbuttonhref
                           performancepagecardbuttonhref2
                           performancepagecardbuttonhref3
                           performancepagecardbuttonhref4
                           performancepagecardbuttontext
                           performancepagecardbuttontext2
                           performancepagecardbuttontext3
                           performancepagecardbuttontext4
                           performancepagecardimage {
                             sourceUrl
                             altText
                           }
                           paidchannelpageheader
                           paidchannelctabutton
                           paidchannelguruimage {
                             sourceUrl
                             altText
                           }
                           paidchannelbackgroundpattern {
                             sourceUrl
                             altText
                           }
                         }
                         hPageLanguage{
                          pageLanguage
                        }
                         seo {
                          ...SeoMeta
                        }
             }
            }
  }
  `);

  
  
  // const refers = [];
  // const w_height = (typeof window !== `undefined` ? window.innerHeight : 0) / 3;
  // const sections = home.hHomePageFields && home.hHomePageFields.buildingArea;
  // const myItemsWithIds = sections.map((item, index) => {
    //   item.mainId = "section-" + index;
    //   item.mainRefId = React.createRef(null);
    //   return item;
    // });
    
    // console.log("MY ITEMS WITH IDS: ", myItemsWithIds);
    
    
    const [hoverCard, setHoverCard] = useState(false);
    const [hoverCard2, setHoverCard2] = useState(false);
    const [hoverCard3, setHoverCard3] = useState(false);
    const [hoverCard4, setHoverCard4] = useState(false);
    
    const { ref: revenueHeader, inView: isRevenueHeaderVisible, entry } = useInView();
    const { ref: cardRef, inView: isCardVisible } = useInView();
    const { ref: brandsHeader, inView: isBrandsHeaderVisible } = useInView();
    const { ref: heartContainer, inView: isHeartContainerVisible } = useInView();
    const { ref: cookieImage, inView: isCookieImageVisible } = useInView();
    const { ref: weUnderstandContainer, inView: isWeUnderstandContainerVisible } = useInView();
    const { ref: resultsContainer, inView: isResultsContainerVisible } = useInView();
    const { ref: performanceHeader, inView: isPerformanceHeaderVisible } = useInView();
    const { ref: paidChannelContainer, inView: isPaidChannelContainerVisible } = useInView();
    
    
    
    const handleMouseOver = () => {
      setHoverCard(true)
    }
    
    const handleMouseOut = () => {
      setHoverCard(false)
    }
    const handleMouseOver2 = () => {
      setHoverCard2(true)
    }
    
    const handleMouseOut2 = () => {
      setHoverCard2(false)
    }
    const handleMouseOver3 = () => {
      setHoverCard3(true)
    }
    
    const handleMouseOut3 = () => {
      setHoverCard3(false)
    }
    const handleMouseOver4 = () => {
      setHoverCard4(true)
    }
    
    const handleMouseOut4 = () => {
      setHoverCard4(false)
    }
    
    const content = useMemo(() => homeData?.wordPress?.hPage?.homePageRedesign, []);
    const { data } = props;
    function getHomeData(data) {
      return data?.wordPress?.hPageTemplates.nodes[0].hPages.nodes[0];
    }
    const home = getHomeData(data);
    const patterns = GetHeaderFooterData(data);
    const footerPattern = patterns.footer && patterns.footer.sourceUrl;

  return (
    <MainLayout
      lang={"us"}
      className="page-home"
      footerPattern={footerPattern}
      seoMeta={homeData.wordPress.hPage.seo}
      languages={homeData.wordPress.hPage.hPageLanguage.pageLanguage}
      {...props}
    >
            {/* Beginning Landing Page */}
    <section className="landing-page-container">
      <img className="landing-page-background-image" alt="" />
      <img className="landing-page-pattern"
        alt="background pattern"
        src={LandingSectionPattern}
        />
      <div className="landing-page-flex-container">
        <div className="landing-page-wrap-container">
          <h1 className="landing-page-header">{content.primaryheader}</h1>
          <p className="landing-page-description">{content.description}</p>
          <Button href="https://www.wunderkind.co/resources/get-a-demo/" className="landing-page-button">{content.ctabutton}</Button>
        </div>
        <img
        className="landing-page-wkd-char"
        src={content.featuredimage.sourceUrl}
        alt={content.featuredimage.altText}
        />
      </div>
    </section>
          
    {/* End of Landing Page */}

    {/* Beginning of Revenue Page */}
    <section className="revenue-page-container">
      <div className="revenue-page-flex-container">
        <h2 ref={revenueHeader} className={`revenue-page-secondaryheader ${isRevenueHeaderVisible ? 'fade-in' : ''}`}>{content.secondaryheaderrevenuepage}</h2>
        <div ref={cardRef} className={`revenue-page-card-flex-container ${isCardVisible ? 'fade-in' : ''}`}>
          <div className="revenue-page-card">
            <h2 className="revenue-page-small-card-header">{content.smallcardheaderrevenuepage}</h2>
            <h2 className="revenue-page-card-large-number">{content.cardlargenumberrevenuepage}</h2>
            <h6 className="revenue-page-card-description">{content.carddescriptionrevenuepage}</h6>
            <div className="revenue-page-card-image-container">
              <img
                className="revenue-page-card-images"
                src={content.cardimagesrevenuepage[0].sourceUrl}
                alt={content.cardimagesrevenuepage[0].altText}
                />
              <img
                className="revenue-page-card-images"
                src={content.cardimagesrevenuepage[1].sourceUrl}
                alt={content.cardimagesrevenuepage[1].altText}
                />
              <img
                className="revenue-page-card-images"
                src={content.cardimagesrevenuepage[2].sourceUrl}
                alt={content.cardimagesrevenuepage[2].altText}
                />
              </div>
          </div>
          <div className="revenue-page-card-2">
            <img
            className="revenue-page-card-background-pattern"
            src={content.cardbackgroundpatternrevenuepage.sourceUrl}
            alt={content.cardbackgroundpatternrevenuepage.altText}
            />
            <h2 className="revenue-page-small-card-header-2">{content.smallcardheaderrevenuepage2}</h2>
            <h2 className="revenue-page-card-large-number-2 ">{content.cardlargenumberrevenuepage2}</h2>
            <h6 className="revenue-page-card-description-2">{content.carddescriptionrevenuepage2}</h6>
            <div className="revenue-page-button-arrow-container">
              <Button href="https://www.wunderkind.co/how-it-works/performance-marketing-solutions-for-ecommerce/" className="btn-fill">{content.cardctabuttonrevenuepage}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Divider direction="top-right" maskColor="#303d78" bgColor="#f5ebe1" />

        {/* End of Revenue Page */}
    {/* Beginning of Brands Page */}
    <section className="brands-page-container">
      <div className="brands-page-wrapper">
        <div className="carousel-header-wrapper">

        <h2 ref={brandsHeader} className={`brands-main-header ${isBrandsHeaderVisible ? 'fade-in' : ''}`}>{content.secondaryheaderbrandspage}</h2>
    <Carousel
          responsive={responsiveCarousel}
          ssr
          slidesToSlide={1}
          deviceType={''}
          containerClass="brands-page-wrapper"
          showDots
          keyBoardControl
          >
            <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref} aria-label="Open in a new window">
            <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[0].sourceUrl}
          alt={content.brandsimageslogos[0].altText}
          />
         <img
         className="brands-card-image"
         src={content.brandsimagesandlogos[0].sourceUrl}
         alt={content.brandsimagesandlogos[0].altText}
         />
            <Arrow className="brands-card-arrow" dark/>
            </div>
         </a>
         <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref1} aria-label="Open in a new window">
            <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[1].sourceUrl}
          alt={content.brandsimageslogos[1].altText}
          />
            <img
            className="brands-card-image"
            src={content.brandsimagesandlogos[1].sourceUrl}
            alt={content.brandsimagesandlogos[1].altText}
            />
            <Arrow className="brands-card-arrow" dark/>
            </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref2} aria-label="Open in a new window">
            <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[2].sourceUrl}
          alt={content.brandsimageslogos[2].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[2].sourceUrl}
              alt={content.brandsimagesandlogos[2].altText}
              />
            <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref3} aria-label="Open in a new window">
              <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[3].sourceUrl}
          alt={content.brandsimageslogos[3].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[3].sourceUrl}
              alt={content.brandsimagesandlogos[3].altText}
              />
            <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref4} aria-label="Open in a new window" tabIndex="-1">
              <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[4].sourceUrl}
          alt={content.brandsimageslogos[4].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[4].sourceUrl}
              alt={content.brandsimagesandlogos[4].altText}
              />
            <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref5} aria-label="Open in a new window" tabIndex="-1">
              <div className="brands-carousel-image-logo-container">

        <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[5].sourceUrl}
          alt={content.brandsimageslogos[5].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[5].sourceUrl}
              alt={content.brandsimagesandlogos[5].altText}
              />
              </div>
              <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref6} aria-label="Open in a new window" tabIndex="-1">
              <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[6].sourceUrl}
          alt={content.brandsimageslogos[6].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[6].sourceUrl}
              alt={content.brandsimagesandlogos[6].altText}
              />
            <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref7} aria-label="Open in a new window" tabIndex="-1">
              <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[7].sourceUrl}
          alt={content.brandsimageslogos[7].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[7].sourceUrl}
              alt={content.brandsimagesandlogos[7].altText}
              />
            <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref8} aria-label="Open in a new window" tabIndex="-1">
              <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[8].sourceUrl}
          alt={content.brandsimageslogos[8].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[8].sourceUrl}
              alt={content.brandsimagesandlogos[8].altText}
              />
            <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref9} aria-label="Open in a new window" tabIndex="-1">
              <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[9].sourceUrl}
          alt={content.brandsimageslogos[9].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[9].sourceUrl}
              alt={content.brandsimagesandlogos[9].altText}
              />
            <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref10} aria-label="Open in a new window" tabIndex="-1">
              <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[10].sourceUrl}
          alt={content.brandsimageslogos[10].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[10].sourceUrl}
              alt={content.brandsimagesandlogos[10].altText}
              />
            <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={content.brandsimageshref11} aria-label="Open in a new window" tabIndex="-1">
              <div className="brands-carousel-image-logo-container">
        <img
          className="brands-carousel-logo"
          src={content.brandsimageslogos[11].sourceUrl}
          alt={content.brandsimageslogos[11].altText}
          />
            <img
              className="brands-card-image"
              src={content.brandsimagesandlogos[11].sourceUrl}
              alt={content.brandsimagesandlogos[11].altText}
              />
            <Arrow className="brands-card-arrow" dark/>
              </div>
              </a>
        </Carousel>
          </div>
              </div>
              </section>
              <Divider direction="bottom-left" maskColor="#303d78" bgColor="#191919" />

    {/* End of Brands Page */}
    
    {/* Beginning of Cookie Page */}
    <section className="cookie-page-container">
        <div ref={heartContainer} className={`cookie-page-flex-container ${isHeartContainerVisible ? 'fade-in' : ''}`}>
          <h2 className="cookie-page-header-description">{content.cookiepageheader}</h2>
          <img
          className="cookie-page-heart-image"
          src={content.cookiepageheartimage.sourceUrl}
          alt={content.cookiepageheartimage.altText}
          />
        </div>
        <div className="cookie-page-numbers-container">
          <div className="cookie-page-numbers-wrapper">
            <h2 className="cookie-page-large-number">{content.cookiepagelargenumber}</h2>
            <h3 className="cookie-page-small-description">{content.cookiepagesmalldescription}</h3>
            <h4 className="cookie-page-description-source">{content.cookiepagedescriptionsource}</h4>
          </div>
          <div className="cookie-page-border-connector" />
          <div className="cookie-page-numbers-wrapper-2">
            <h2 className="cookie-page-large-number-2">{content.cookiepagelargenumber2}</h2>
            <h3 className="cookie-page-small-description">{content.cookiepagesmalldescription2}</h3>
            <h4 className="cookie-page-description-source">{content.cookiepagedescriptionsource2}</h4>
          </div>
          <div className="cookie-page-numbers-wrapper-3">
          <div className="cookie-page-border-connector2" />
            <h2 className="cookie-page-large-number">{content.cookiepagelargenumber3}</h2>
            <h3 className="cookie-page-small-description">{content.cookiepagesmalldescription3}</h3>
            <h4 className="cookie-page-description-source">{content.cookiepagedescriptionsource3}</h4>
          </div>
        </div>
        <img
        ref={cookieImage}
        className={`cookie-page-cookie-image ${isCookieImageVisible ? 'fade-in' : ''}`}
          src={content.cookiepagecookieimage.sourceUrl}
          alt={content.cookiepagecookieimage.altText}
          />
          <div className="cookie-page-header-button-container">
            <h2 className="cookie-page-bottom-header">{content.cookiepagebottomheader}</h2>
            <Button href="https://www.wunderkind.co/how-it-works/performance-marketing-solutions-for-ecommerce/" className="btn-fill cookie-page-cta-button">{content.cookiepagectabutton}</Button>
          </div>
    </section>
    <Divider direction="bottom-right" maskColor="#191919" bgColor="#f5ebe1" />

    {/* End of Cookie Page */}

    {/* Beginning of WeUnderstand Page */}
    <section className="weunderstand-page-container">
      <div ref={weUnderstandContainer} className={`weunderstand-page-flex-container ${isWeUnderstandContainerVisible ? 'fade-in' : ''}`}>
        <img
        className="weunderstand-page-academic-image-mobile"
        src={content.weunderstandpageacademicimage.sourceUrl}
        alt={content.weunderstandpageacademicimage.altText}
        />
      <div className="weunderstand-page-header-rectangle-container">
        <h2 className="weunderstand-page-header">We understand</h2>
      </div>
      <div className="weunderstand-page-header-rectangle-container">
        <img
          className="weunderstand-page-rectangle"
          src={content.weunderstandpageheaderimage.sourceUrl}
          alt={content.weunderstandpageheaderimage.altText}
          />
        <h2 className="weunderstand-page-header">you have a lot</h2>
      </div>
      <div className="weunderstand-page-header-rectangle-container">
        <h2 className="weunderstand-page-header">on your plate</h2>
        <img
        className="weunderstand-page-rectangle-2"
        src={content.weunderstandpageheaderimagecontinued.sourceUrl}
        alt={content.weunderstandpageheaderimagecontinued.altText}
        />
      </div>
      <div className="weunderstand-page-image-description-container">
        <img
        className="weunderstand-page-academic-image"
        src={content.weunderstandpageacademicimage.sourceUrl}
        alt={content.weunderstandpageacademicimage.altText}
        />

          <h6 className="weunderstand-page-small-description">{content.weunderstandpagesmalldescription} <strong>That's where Wunderkind comes in.</strong></h6>
          <img
          className="weunderstand-page-paperplane"
          src={content.weunderstandpagepaperplaneimage.sourceUrl}
          alt={content.weunderstandpagepaperplaneimage.altText}
          />
          </div>
          </div>
          </section>
          <Divider additionalClass="divider-styles" direction="top-right" maskColor="#303d78" bgColor="#F5EBE1" />

    {/* End of WeUnderstand Page */}

    {/* Beginning of Results Page */}
    <section className="results-page-container">
      <img
      className="results-page-pattern-image"
      src={content.resultspagelinepatternimage.sourceUrl}
      alt={content.resultspagelinepatternimage.altText}
      />
      <div className="results-page-flex-container">
        <h4 className="results-page-description-header">{content.resultspagedescriptionheader}</h4>
        <img
        className="results-page-heart-phone-image"
        src={content.resultspageheartphoneimage.sourceUrl}
        alt={content.resultspageheartphoneimage.altText}
        />
        <img
        className="results-page-paperplane-image"
        src={content.resultspagepaperplaneimage.sourceUrl}
        alt={content.resultspagepaperplaneimage.altText}
        />
      </div>
        <h2 className="results-page-header">{content.resultspageheader}</h2>
      <div className="results-page-numbers-flex-container">
        <div className="results-page-numbers-flex-column-container">
          <h2 className="results-page-large-number">{content.resultspagelargenumber}</h2>
          <h3 className="results-page-small-description">{content.resultspagesmalldescription}</h3>
        </div>
        <div className="results-page-numbers-border" />
        <div className="results-page-numbers-flex-column-container">
          <h2 className="results-page-large-number">{content.resultspagelargenumber2}</h2>
          <h3 className="results-page-small-description">{content.resultspagesmalldescription2}</h3>
        </div>
        <div className="results-page-numbers-border" />
        <div className="results-page-numbers-flex-column-container">
          <h2 className="results-page-large-number">{content.resultspagelargenumber3}</h2>
          <h3 className="results-page-small-description">{content.resultspagesmalldescription3}</h3>
        </div>
      </div>
      <img
      className="results-page-paperplane-image-2"
      src={content.resultspagepaperplaneimage2.sourceUrl}
      alt={content.resultspagepaperplaneimage2.altText}
      />
        <h2 className="results-page-header-2">{content.resultspageheader2}</h2>
        <div className="results-page-description-arrow-flex-container">
        <h6 className="results-page-small-description-2">{content.resultspagesmallparagraphdescription}</h6>
          <img
          className="results-page-arrow-image"
          src={content.resultspagearrowimage.sourceUrl}
          alt={content.resultspagearrowimage.altText}
          />
      </div>
      <img
      className="results-page-pattern-image-2"
      src={content.resultspagelinepatternimage2.sourceUrl}
      alt={content.resultspagelinepatternimage2.altText}
      />
      <img
      className="results-page-paperplane-image-3"
      src={content.resultspagepaperplaneimage3.sourceUrl}
      alt={content.resultspagepaperplaneimage3.altText}
      />
      <div className="results-page-brands-images-container">
        <div className="results-page-brands-images-wrapper">
          <img
          className="results-page-brands-images"
          src={content.resultspagebrandsimages[0].sourceUrl}
          alt={content.resultspagebrandsimages[0].altText}
          />
          <h2 className="results-page-brands-images-number">{content.resultspagebrandsimagesnumber}</h2>
          <h6 className="results-page-brands-images-small-header">{content.resultspagebrandsimagessmallheader}</h6>
        </div>
        <div className="results-page-brands-images-wrapper">
          <img
          className="results-page-brands-images"
          src={content.resultspagebrandsimages[1].sourceUrl}
          alt={content.resultspagebrandsimages[1].altText}
          />
          <h2 className="results-page-brands-images-number">{content.resultspagebrandsimagesnumber2}</h2>
          <h6 className="results-page-brands-images-small-header">{content.resultspagebrandsimagessmallheader}</h6>
        </div>
        <div className="results-page-brands-images-wrapper">
          <img
          className="results-page-brands-images"
          src={content.resultspagebrandsimages[2].sourceUrl}
          alt={content.resultspagebrandsimages[2].altText}
          />
          <h2 className="results-page-brands-images-number">{content.resultspagebrandsimagesnumber3}</h2>
          <h6 className="results-page-brands-images-small-header">{content.resultspagebrandsimagessmallheader}</h6>
        </div>
        <div className="results-page-brands-images-wrapper">

          <img
          className="results-page-brands-images"
          src={content.resultspagebrandsimages[3].sourceUrl}
          alt={content.resultspagebrandsimages[3].altText}
          />
          <h2 className="results-page-brands-images-number">{content.resultspagebrandsimagesnumber4}</h2>
          <h6 className="results-page-brands-images-small-header">{content.resultspagebrandsimagessmallheader}</h6>
        </div>
      <div className="results-page-brands-images-wrapper">

        <img
        className="results-page-brands-images"
        src={content.resultspagebrandsimages[4].sourceUrl}
        alt={content.resultspagebrandsimages[4].altText}
        />
        <h2 className="results-page-brands-images-number">{content.resultspagebrandsimagesnumber5}</h2>
        <h6 className="results-page-brands-images-small-header">{content.resultspagebrandsimagessmallheader}</h6>
        </div>
        </div>
        <Button href="https://www.wunderkind.co/resources/get-a-demo/" className="btn-fill results-page-cta-button">{content.resultspagectabutton}</Button>
        <div className="results-page-background-pattern-container">
          <img
            className="results-page-background-pattern"
            src={content.resultspagebackgroundpattern.sourceUrl}
            alt={content.resultspagebackgroundpattern.altText}
            />
        </div>
    </section>

    {/* End of Results Page */}

    {/* Beginning of Performance Marketing Page */}

    <section className="performance-marketing-container-home">
      <div className="performance-marketing-flex-container-home">

      <h2 ref={performanceHeader} className={`performance-marketing-header-home ${isPerformanceHeaderVisible ? 'fade-in' : ''}`} >{content.performancepageheader}</h2>
      <div className="performance-marketing-card-container-home">
        <div className="performance-marketing-card-home"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
          >
          {hoverCard ?
          <img className="performance-marketing-card-plus-remove-home" src={Plus} alt="plus sign" />:
          <img className="performance-marketing-card-plus-home" src={Plus} alt="plus sign" />
        } 
          <div className="performance-marketing-image-overlay-home"></div>
          <img className="performance-marketing-card-image-home"
            src={content.performancepagecardimage[0].sourceUrl}
            alt={content.performancepagecardimage[0].altText}
            />
          <h6 className="performance-marketing-card-category-home">{content.performancepagecardcategory}</h6>
          {hoverCard && (
            <>
              <h2 className="performance-marketing-card-header-home">{content.performancepagecardheader}</h2>
              <h6 className="performance-marketing-card-description-home">{content.performancepagecarddescription}</h6>
              <Button href={content.performancepagecardbuttonhref}
               className="btn-fill performance-marketing-card-btn-home">{content.performancepagecardbuttontext}</Button>
                </>
            )}
          </div>
        <div className="performance-marketing-card-home"
          onMouseOver={handleMouseOver2}
          onMouseLeave={handleMouseOut2}
          >
          <h6 className="performance-marketing-card-category-home">{content.performancepagecardcategory2}</h6>
          {hoverCard2 ?
          <img className="performance-marketing-card-plus-remove-home" src={Plus} alt="plus sign" />:
          <img className="performance-marketing-card-plus-home" src={Plus} alt="plus sign" />
        } 
          <div className="performance-marketing-image-overlay-home"></div>
          <img className="performance-marketing-card-image-home"
            src={content.performancepagecardimage[1].sourceUrl}
            alt={content.performancepagecardimage[1].altText}
            />
          {hoverCard2 && (
            <>
              <h2 className="performance-marketing-card-header-home">{content.performancepagecardheader2}</h2>
              <h6 className="performance-marketing-card-description-home">{content.performancepagecarddescription2}</h6>
              <Button href={content.performancepagecardbuttonhref2} 
              className="btn-fill performance-marketing-card-btn-home">{content.performancepagecardbuttontext2}</Button>
                </>
            )}
          </div>
        <div className="performance-marketing-card-home"
          onMouseOver={handleMouseOver3}
          onMouseLeave={handleMouseOut3}
          >
          <h6 className="performance-marketing-card-category-home">{content.performancepagecardcategory3}</h6>
          {hoverCard3 ?
          <img className="performance-marketing-card-plus-remove-home" src={Plus} alt="plus sign" />:
          <img className="performance-marketing-card-plus-home" src={Plus} alt="plus sign" />
        } 
          <div className="performance-marketing-image-overlay-home"></div>
          <img className="performance-marketing-card-image-home"
            src={content.performancepagecardimage[2].sourceUrl}
            alt={content.performancepagecardimage[2].altText}
            />
          {hoverCard3 && (
            <>
              <h2 className="performance-marketing-card-header-home">{content.performancepagecardheader3}</h2>
              <h6 className="performance-marketing-card-description-home">{content.performancepagecarddescription3}</h6>
              <Button href={content.performancepagecardbuttonhref3}
              className="btn-fill performance-marketing-card-btn-home">{content.performancepagecardbuttontext3}</Button>
                </>
            )}
   </div>
        <div className="performance-marketing-card-home"
          onMouseOver={handleMouseOver4}
          onMouseLeave={handleMouseOut4}
          >
          <h6 className="performance-marketing-card-category-home">{content.performancepagecardcategory4}</h6>
          {hoverCard4 ?
          <img className="performance-marketing-card-plus-remove-home" src={Plus} alt="plus sign" />:
          <img className="performance-marketing-card-plus-home" src={Plus} alt="plus sign" />
        } 
          <div className="performance-marketing-image-overlay-home"></div>
          <img className="performance-marketing-card-image-home"
            src={content.performancepagecardimage[3].sourceUrl}
            alt={content.performancepagecardimage[3].altText}
            />
          {hoverCard4 && (
            <>
              <h2 className="performance-marketing-card-header-home">{content.performancepagecardheader4}</h2>
              <h6 className="performance-marketing-card-description-home">{content.performancepagecarddescription4}</h6>
              <Button href={content.performancepagecardbuttonhref4}
              className="btn-fill performance-marketing-card-btn-home">{content.performancepagecardbuttontext4}</Button>
                </>
            )}
   </div>
      </div>
            </div>
    </section>
    {/* End of Performance Marketing Page */}

    {/* Beginning of Paid Channel Page */ }
    <Divider direction="bottom-right" maskColor="#f5ebe1" bgColor="#191919" />

    <section ref={paidChannelContainer} className={`paid-channel-container ${isPaidChannelContainerVisible ? 'fade-in' : ''}`}>
      <div className="paid-channel-flex-container">
      <div className="paid-channel-header-button-container">
        <h2 className="paid-channel-header">{content.paidchannelpageheader}</h2>
        <Button href="https://www.wunderkind.co/resources/get-a-demo/" 
        className="btn-fill">{content.paidchannelctabutton}</Button>
      </div>
      <img
      className="paid-channel-guru-image"
      src={content.paidchannelguruimage.sourceUrl}
      alt={content.paidchannelguruimage.altText}
      />
      </div>
      <div className="paid-channel-background-pattern-container">
        <img
        className="paid-channel-background-pattern"
        src={content.paidchannelbackgroundpattern.sourceUrl}
        alt={content.paidchannelbackgroundpattern.altText}
        />
      </div>
    </section>
    {/* End of Paid Channel Page */ }


    </MainLayout>
  );
}

export default App;


