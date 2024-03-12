import React, {useState} from 'react';
import Button from '../Components/Button/Button';
import MainLayout from '../layouts/Main';
import { graphql } from 'gatsby';
import '../template-styles/industry.scss'
import Divider from '../Components/General/Divider/Divider'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Arrow from '../Components/Arrow/Arrow'
import PlayButton from '../Components/PlayButton/PlayButton';
import {Carousel as ResponsiveCarousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//

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
const statCarouselProps = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2561 },
    items: 1,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 2560, min: 1166 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1165, min: 769 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

//


function IndustryTemplate({ data }) {
  const sections = data?.wordPress?.hPageTemplates?.nodes?.[0]?.hPages?.nodes[0].industryPageFields.industry
  console.log('sections data', sections)
  

  const [cardPointHover, setCardPointHover] = useState(false)
  const handleCardPointHover = (index) => {
    setCardPointHover(index)
  }

  const [flippedCard, setFlippedCard] = useState(null);
  const handleCardFlip = (index) => {
    // Toggle the flipped state of the card
    if (flippedCard === index) {
      setFlippedCard(null); // Unflip the card if it's already flipped
    } else {
      setFlippedCard(index);
    }
  };

  const handleCardLeave = () => {
    // Reset the flippedCard state when the user clicks away from the card
    setFlippedCard(null);
  };

  return (
    <MainLayout
    headerPattern="/images/patterns/pattern-19.svg"
    footerPattern="/images/patterns/pattern-02.svg"
    >
      {sections.map((section, index) => {
        const type = section?.__typename
        switch (type) {
          case "WordPress_HPage_Industrypagefields_Industry_Imageandtextsection":
          return (
            <section className='industry-image-desc-container' key={index}>
              <div className='industry-desc-container'>
                <h6 className='industry-name'>{section.title}</h6>
                <h1 className='industry-main-header'>{section.header}</h1>
                <p className='industry-description'>{section.description}</p>
                {section.cta && <Button className="btn-fill">{section.cta}</Button>}
              </div>
              {section.image && section.image.sourceUrl != null && (
                <img className='industry-image' src={section.image.sourceUrl} alt="Industry" />
              )}       
            </section>
          )

          case "WordPress_HPage_Industrypagefields_Industry_Video":
            return (
              <section className="video-wrapper">
                <div className="video-section-container">
                  <iframe
                  className='video-styles'
                  src={section.video}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  frameBorder="0"
                  allowFullScreen 
                  />
                </div>
              </section>
            )

          case "WordPress_HPage_Industrypagefields_Industry_Statisticsection":
            return (
              <section className='stat-section-container'>
                <h2 className='stat-header'>{section.header}</h2>
                <div className="card-container">
                  {section.repeatcards?.map((card, index) => {
                    return (
                      <>
                      <div
                        key={index}
                        onClick={() => handleCardFlip(index)}
                        className={`stat-section-card ${flippedCard === index ? 'flipped' : ''}`}
                      >
                        <img className='stat-section-card-hover-icon' src='/images/swap-hover-icon-black.svg' />
                        <div className={`card-number ${flippedCard === index ? 'flipped' : ''}`}>
                          {card.statisticsectioncardheaderornumber}
                        </div>
                        <p className='card-desc'>{card.statisticcarddescription}</p>
                        <div className='card-desc-hover'>{card.statisticcardbackdescription}</div>
                      </div>
                      </>
                    )
                  })}
                  </div>
              </section>
            )
          
          case "WordPress_HPage_Industrypagefields_Industry_Cardwithpointsection":
            return (
              <section className="card-section-wrapper">
              <div className="card-header-desc-point-container">
                <div className="card-header-description-container">
                  <h2 className="card-header">{section.cardheader}</h2>
                  <div dangerouslySetInnerHTML={{__html: section.carddescription}} className="card-description"></div>
                </div>
                <div className='card-point-container' key={index}>
                      {section.cardpoint?.map((cardpoint, index) => {
                        return (
                          <p
                          onMouseOver={() => handleCardPointHover(index)}
                          onMouseLeave={handleCardPointHover}
                          className={`card-point ${cardPointHover === index ? 'hovered' : ''}`}>
                          {`${cardPointHover === index ? cardpoint.cardpoint : cardpoint.cardpointtitle}`}
                          <img 
                          className={`${cardPointHover ? 'card-point-icons' : 'card-point-icons'}`} 
                          src={`${cardPointHover === index ? '/images/DarkClose.svg' : '/images/DarkPlus.svg'}`} 
                          alt="plus sign" />
                          </p>
                        )
                      })}
                </div>
              </div>
            </section>

            )

            case "WordPress_HPage_Industrypagefields_Industry_Carouselsection":
              return (
                <section className="carousel-section-wrapper">
                    <div className='carousel-section-container'>
                      <h2 className='carousel-section-header'>{section.carouselheader}</h2>
                      <Carousel
                          responsive={responsiveCarousel}
                          ssr
                          slidesToSlide={1}
                          deviceType={''}
                          containerClass="brands-page-wrapper"
                          keyBoardControl
                        >
                        {section?.carouselcontent?.map?.((carousel, index) => (
                          <div className='main-carousel-image-container'>
                            <h6
                          className={`resources-section-card-category`}
                          style={{
                            backgroundColor: carousel?.cardcategorybackgroundcolor,
                            color: carousel?.cardcategorytextcolor
                          }}>{carousel?.cardcategory}
                          </h6>
                          <a href={carousel?.cardhref} target='_blank'>
                            <div className="carousel-section-card">

                            <div className="resources-section-card-transparent-layer" />
                            <img className='carousel-section-image' src={carousel?.cardimage?.sourceUrl} />
                            {carousel?.logoorheader === 'Logo' && carousel?.cardlogo?.sourceUrl && (<img className='carousel-section-logo' src={carousel?.cardlogo?.sourceUrl} />)}
                            {carousel?.logoorheader === 'Header' && carousel?.cardheader && (<h5 className='carousel-section-card-header'>{carousel?.cardheader}</h5>)}
                            {carousel?.arroworplay === 'arrow' ? (<Arrow className="resources-section-arrow" />) : carousel.arroworplay === 'play' ? 
                          (<PlayButton className="resources-section-play" />) : null}
                          </div>
                          </a>
                          </div>
                          ))}
                      </Carousel>
                    </div>
                  </section>
              )

              case "WordPress_HPage_Industrypagefields_Industry_Statisticcarouselsection":
                return (
                  <Carousel
                  responsive={statCarouselProps}
                  ssr
                  slidesToSlide={1}
                  >
                    {section.statisticCarouselFields.map?.((statCarouselFields) => (
                      <section className='stat-carousel-container'>
                        <div className="stat-carousel-logo-quote-number-container">
                          <div className="stat-carousel-logo-quote-container">
                            <img className='stat-carousel-logo' src={statCarouselFields.logo?.sourceUrl} alt="" />
                            <p className='stat-carousel-desc'>{statCarouselFields.quoteDescription}</p>
                            <div className='stat-carousel-number-desc'>{statCarouselFields.quoteAuthorAndPosition}</div>
                          </div>
                          <div className="stat-carousel-numbers-container">
                            <div className='stat-carousel-number'>{statCarouselFields.number}</div>
                            <span className='stat-carousel-number-desc'>{statCarouselFields.numberDescription}</span>
                            <div className='stat-carousel-number'>{statCarouselFields.number2}</div>
                            <span className='stat-carousel-number-desc'>{statCarouselFields.numberDescription2}</span>
                            <div className='stat-carousel-number'>{statCarouselFields.number3}</div>
                            <span className='stat-carousel-number-desc'>{statCarouselFields.numberDescription3}</span>
                          </div>
                        </div>
                      </section>
                    ))}
                  </Carousel>

                )

              case "WordPress_HPage_Industrypagefields_Industry_Rankingsection":
                return (
                  <section className="ranking-section-wrapper">
                    <div className="ranking-section-container">
                      <h2 className='ranking-section-header'>{section.header}</h2>
                      <div className="ranking-section-logos-container">
                      {section.logoswithrankingandchanneltype?.map?.((logosAndChannel, index) => (
                        <div className='ranking-section-logos-number-container' key={index}>
                          <img className='ranking-section-logos' src={logosAndChannel.logo.sourceUrl} alt={`Image`} />
                          <div className='ranking-section-number'>{logosAndChannel.number}</div>
                          <div className='ranking-section-channel-type'>{logosAndChannel.channeltype}</div>
                        </div>
                      ))}
                      </div>
                      <Button href={section.href} className="btn-fill">{section.cta}</Button>
                      </div>
                  </section>
                )
        
              case "WordPress_HPage_Industrypagefields_Industry_Resourcessection":
                return (
                  <section className='resources-section-wrapper'>
                    <div className="resources-section-container">
                      <h2 className='resources-section-header'>{section.header}</h2>
                      <Carousel
                      responsive={responsiveCarousel}
                      ssr
                      slidesToSlide={1}
                      deviceType={''}
                      containerClass="brands-page-wrapper"
                      keyBoardControl
                      >
                    {section.cardcontent?.map((card) => {
                      return (
                        <div className="resources-section-card-container">
                          <h6
                          className={`resources-section-card-category`}
                          style={{
                            backgroundColor: card?.cardcategorybackgroundcolor,
                            color: card?.cardcategorytextcolor
                          }}
                          >
                          {card?.cardcategory}
                          </h6>
                          <a href={card?.cardhref} target='_blank'>
                            <div className="resources-section-card">
                          <div className="resources-section-card-transparent-layer" />
                          <img className='resources-section-card-image' src={card?.cardimage?.sourceUrl} />
                          {card?.logoorheader === 'Logo' && card?.cardlogo?.sourceUrl && (<img className='resources-section-card-logo' src={card?.cardlogo?.sourceUrl} />)}
                          {card?.logoorheader === 'Header' && card?.cardheader && (<h5 className='resources-section-card-header'>{card?.cardheader}</h5>)}
                          {card?.arroworplay === 'arrow' ? (<Arrow className="resources-section-arrow" />) : card.arroworplay === 'play' ? 
                          (<PlayButton className="resources-section-play" />) : null}
                          </div>
                          </a>
                          </div>
                        )
                      })}
                      </Carousel>

                  </div>
                  </section>
                )

                case "WordPress_HPage_Industrypagefields_Industry_Partnerssection":
                  return (
                    <section className="partners-section-wrapper">
                    <div className="partners-section-container">
                      <h2 className='partners-section-header'>{section.header}</h2>
                      <div className="logos-container">
                      {section.logo?.map?.((logo, index) => (
                        <img className='flex' src={logo.sourceUrl} alt={`Image`} />
                        ))}
                        </div>
                      <Button href={section.href} className="btn-dark">{section.cta}</Button>
                    </div>
                      </section>
                  )

                case "WordPress_HPage_Industrypagefields_Industry_Divider":
                  return (
                    <Divider
                    additionalClass={section.additionalclass}
                    key={"section-" + index}
                    bgColor={section.backgroundcolor}
                    maskColor={section.maskcolor}
                    direction={section.position.toLowerCase() + "-" + section.orientation.toLowerCase()}
                    />
                  )
          
          default:
            return <></>;
        }
      })}
    </MainLayout>
  );
}

export const query = graphql`
query IndustryTemplate($title: String = "title") {
  wordPress {
    hPageTemplates(where: {slug: "industry"}) {
      nodes {
        hPages(where: {title: $title}) {
          nodes {
            title
            industryPageFields {
              industry {
                ... on WordPress_HPage_Industrypagefields_Industry_Imageandtextsection {
                  fieldGroupName
                  cta
                  description
                  header
                  title
                  image{
										sourceUrl
                  }
                }
                ... on WordPress_HPage_Industrypagefields_Industry_Video {
                  fieldGroupName
                  video
                }
                ... on WordPress_HPage_Industrypagefields_Industry_Cardwithpointsection {
                  fieldGroupName
                  cardheader
                  carddescription
                  cardpoint {
                    cardpoint
                    cardpointtitle
                  }
                }
                ... on WordPress_HPage_Industrypagefields_Industry_Statisticsection {
                  header
                  repeatcards {
                    statisticcarddescription
                    statisticcardbackdescription
                    statisticsectioncardheaderornumber
                  }
                }
                ... on WordPress_HPage_Industrypagefields_Industry_Carouselsection {
                  carouselheader
                  fieldGroupName
                  carouselcontent {
                    cardcategory
                    cardheader
                    cardhref
                    cardimage {
                      sourceUrl
                    }
                    cardlogo {
                      sourceUrl
                    }
                    arroworplay
                    cardcategorybackgroundcolor
                    cardcategorytextcolor
                    logoorheader
                  }
                }
                ... on WordPress_HPage_Industrypagefields_Industry_Statisticcarouselsection {
                  fieldGroupName
                  statisticCarouselFields {
                    logo {
                      sourceUrl
                    }
                    number
                    numberDescription
                    number2
                    numberDescription2
                    number3
                    numberDescription3
                    quoteAuthorAndPosition
                    quoteDescription
                  }
                }
                ... on WordPress_HPage_Industrypagefields_Industry_Rankingsection {
                  fieldGroupName
                  href
                  cta
                  header
                  logoswithrankingandchanneltype {
                    logo {
                      sourceUrl
                    }
                    number
                    channeltype
                  }
                }

                ... on WordPress_HPage_Industrypagefields_Industry_Resourcessection {
                  fieldGroupName
                  header
                  cardcontent {
                    cardheader
                    logoorheader
                    cardcategory
                    cardhref
                    cardimage {
                      sourceUrl
                    }
                    cardlogo {
                      sourceUrl
                    }
                    arroworplay
                    cardcategorybackgroundcolor
                    cardcategorytextcolor
                  }

                }
                ... on WordPress_HPage_Industrypagefields_Industry_Partnerssection {
                  fieldGroupName
                  cta
                  header
                  href
                  logo {
                    sourceUrl
                  }
                }
                ... on WordPress_HPage_Industrypagefields_Industry_Divider {
                  fieldGroupName
                  additionalclass
                  backgroundcolor
                  maskcolor
                  orientation
                  position
                }
              }
            }
          }
        }
      }
    }
  }
}

`;


export default IndustryTemplate;
