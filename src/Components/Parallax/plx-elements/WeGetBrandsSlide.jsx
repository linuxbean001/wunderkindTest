import React from "react";

import Image from "Components/Image/Image";
import Button from "Components/Button/Button";
import KPIs from "Components/General/KPIs/KPIs";

class WeGetBrandsSlide extends React.Component {
  renderRightSideSection(data) {
    switch (data.__typename) {
      case "WordPress_HPage_Hhomepagefields_BuildingArea_Brands_slides_RightSide_Testimonial":
      case "WordPress_HPage_Hhomepagefieldsuk_UkBuildingArea_Brands_slides_RightSide_Testimonial":
        return (
          <div className="brand-quote-box">
            <div
              className="brand-quote"
              dangerouslySetInnerHTML={{ __html: data.quote }}
            ></div>
            <div className="user-box">
              <div className="img">
                {data.avatar && data.avatar.sourceUrl && (
                  <Image
                    src={data.avatar.sourceUrl}
                    alt={data.avatar.altText}
                  ></Image>
                )}
              </div>
              <div className="user-info">
                <div className="name">{data.name}</div>
                <div className="position">{data.jobTitle}</div>
              </div>
            </div>
          </div>
        );
      case "WordPress_HPage_Hhomepagefields_BuildingArea_Brands_slides_RightSide_Stats":
      case "WordPress_HPage_Hhomepagefieldsuk_UkBuildingArea_Brands_slides_RightSide_Stats":
        const kpis = data.allStats.map(stat => {
          return { number: stat.aboveLine, name: stat.underLine };
        });
        return (
          <div className="brand-quote-box">
            <KPIs kpis={kpis} lang={this.props.lang} />
          </div>
        );
      default:
        return <></>;
    }
  }

  render() {
    const { brandBackgroundImage, title, cta1, cta2, rightSide } = this.props;
    const rightSideRender = this.renderRightSideSection(rightSide[0]);

    return (
      <div
        data-bg-img={brandBackgroundImage.sourceUrl}
        className="swiper-slide"
      >
        <div className="hero-brands-content">
          <div className="container">
            <div className="row">
              <div data-swiper-parallax="-300" className="col-md-6">
                <div className="brand-title">{title}</div>
                <div className="brand-quote mb-only">{rightSideRender}</div>
                <div className="btn-wrap">
                  {cta1 && cta1.url && (
                    <Button
                      href={cta1.url}
                      className="btn-fill-dark"
                      lang={this.props.lang}
                    >
                      {cta1.text}
                    </Button>
                  )}
                  {cta2 && cta2.url && (
                    <Button href={cta1.url} lang={this.props.lang}>
                      {cta2.text}
                    </Button>
                  )}
                </div>
              </div>
              <div
                data-swiper-parallax="100"
                className="col-md-6 col-lg-5 offset-lg-1"
              >
                {rightSideRender}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeGetBrandsSlide;
