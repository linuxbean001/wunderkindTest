import React from "react";
import "./styles.scss";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderCard from './SliderCard';
import { graphql, useStaticQuery } from "gatsby";

function SliderSection(props) {

  const query = useStaticQuery(graphql`
    query SliderSection {
      wordPress{
        hPage(id: "aC1wYWdlOjY1Mjg=") {
          howItWorksEcomm {
            slidersectionheader
            slidersectionheaderdescription
            slidersectionnumber
            slidersectionnumbersuffix
            slidersectionnumberdescription
            slidercardtitle
            slidercardnumbers
            slidercardsuffix
            slidercardsubtitle
            slidercardtextdescription
            slidercardquotetext
            slidercardquoteauthor
            slidercardimage{
              sourceUrl
            }
            slidercardcardtitle
            slidercardcardtext
            slidercardthemecolor
            slidercardcardhref
            slidercard2title
            slidercard2numbers
            slidercard2suffix
            slidercard2subtitle
            slidercard2textdescription
            slidercard2quotetext
            slidercard2quoteauthor
            slidercard2image{
              sourceUrl
            }
            slidercard2cardtitle
            slidercard2cardtext
            slidercard2themecolor
            slidercard2cardhref
            slidercard3cardtitle
            slidercard3numbers
            slidercard3suffix
            slidercard3subtitle
            slidercard3textdescription
            slidercard3quotetext
            slidercard3quoteauthor
            slidercard3image{
              sourceUrl
            }
            slidercard3cardtitle
            slidercard3cardtext
            slidercard3themecolor
            slidercard3cardhref
            slidersectionsecurecollectionsmallheader
            slidersectionlargeheader
            slidersectionanonymousdatadescription
            slidersectionadvertisingalliancedescription
            slidersectionphoneimage{
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const content = query.wordPress.hPage.howItWorksEcomm


  const renderPrevButton = (clickHandler, hasPrev, label) => {
    return hasPrev && (
      <div
        className={"prevButton"}
        onClick={clickHandler}
      >
        <img alt="" className="img" src="/images/arrow.svg" />
      </div>
    )
  }
  const renderNextButton = (clickHandler, hasNext, label) => {
    return hasNext && (
      <div
        className={"nextButton"}
        onClick={clickHandler}
      >
        <img width={20} alt="" className="img" src="/images/arrow.svg" />
      </div>
    )
  }
  const renderIndicator = (
    clickHandler,
    isSelected,
    index) => {
    return (
      <span className={`slider-indicator ${isSelected ? "selected" : ""}`} onClick={clickHandler}>{index + 1}</span>
    );
  };


  return (
    <section
      className={
        "slider-section"
      }
    >
      <div className="container">
        <div className={"col-xl-6 col-lg-7 col-sm-10"}>
          <div>
            <h3>{content.slidersectionheader}</h3>
          </div>
          <h4>{content.slidersectionheaderdescription}</h4>
        </div>
        <div className={"col-lg-5 col-sm-7"}>
          <div className={"flex"}>
            <div className={"number"}>
              <div>{content.slidersectionnumber}</div><div><span>{content.slidersectionnumbersuffix}</span></div>
            </div>
            <div>
            </div>
          </div>
          <h4 className={"custom-positioned-text"}>{content.slidersectionnumberdescription}</h4>
        </div>
      </div>
      <div className={"container"}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={renderPrevButton}
          renderArrowNext={renderNextButton}
          renderIndicator={renderIndicator}
        >
          <SliderCard
            title={content.slidercardtitle}
            numbers={content.slidercardnumbers}
            sufix={content.slidercardsuffix}
            subtitle={content.slidercardsubtitle}
            text={content.slidercardtextdescription}
            quoteText={content.slidercardquotetext}
            quoteAuthor={content.slidercardquoteauthor}
            image={content.slidercardimage.sourceUrl}
            cardTitle={content.slidercardcardtitle}
            cardText={content.slidercardcardtext}
            themeColor={content.slidercardthemecolor}
            cardHref={content.slidercardcardhref}
          ></SliderCard>
          <SliderCard
            title={content.slidercard2title}
            numbers={content.slidercard2numbers}
            sufix={content.slidercard2suffix}
            subtitle={content.slidercard2subtitle}
            text={content.slidercard2textdescription}
            quoteText={content.slidercard2quotetext}
            quoteAuthor={content.slidercard2quoteauthor}
            image={content.slidercard2image.sourceUrl}
            cardTitle={content.slidercard2cardtitle}
            cardText={content.slidercard2cardtext}
            themeColor={content.slidercard2themecolor}
            cardHref={content.slidercard2cardhref}
          ></SliderCard>
          <SliderCard
            title={content.slidercard3cardtitle}
            numbers={content.slidercard3numbers}
            sufix={content.slidercard3suffix}
            subtitle={content.slidercard3subtitle}
            text={content.slidercard3textdescription}
            quoteText={content.slidercard3quotetext}
            quoteAuthor={content.slidercard3quoteauthor}
            image={content.slidercard3image.sourceUrl}
            cardTitle={content.slidercard3cardtitle}
            cardText={content.slidercard3cardtext}
            themeColor={content.slidercard3themecolor}
            cardHref={content.slidercard3cardhref}
          ></SliderCard>
        </Carousel>
      </div>
      <div className={"container secure-collection"}>
        <h4>{content.slidersectionsecurecollectionsmallheader}</h4>
        <h2 className="how-it-works-slider-header">{content.slidersectionlargeheader}</h2>
        <div className={"row"}>
          <p className={"col-lg-4 col-sm-6"}>
            {content.slidersectionanonymousdatadescription}
          </p>
          <p className={"col-lg-4 col-sm-6"}>
            {content.slidersectionadvertisingalliancedescription}
          </p>
          <div className={"col-lg-3 col-sm-6 image-container"}>
            <img src={content.slidersectionphoneimage.sourceUrl} />
          </div>
        </div>
      </div>
    </section>
  );

}

export default SliderSection;
