import React from "react";
import "./_Intro.scss";
import Arrow from "Components/Arrow/Arrow";
import Button from "Components/Button/Button";
import Carousel from "react-multi-carousel";
import { getResourceUrlPath } from "../../../utils/common";
import { AddLang } from "../../../utils/addLang";

const responsiveCarousel = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2561 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 2560, min: 1166 },
    items: 2,
    slidesToSlide: 2,
  },
  laptop: {
    breakpoint: { max: 1165, min: 1025 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 769 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const N = 9;

class Intro extends React.Component {
  render() {
    const { bgColor, color, content, backArrow, maxWidth } = this.props;
    const { sideHeading, title, subtitle, button } = content;
    const { sorted, list, lang } = this.props;
    const allItems = [...sorted, ...list];
    const topItems = allItems.slice(0, N);
    return (
      <section
        className={
          "inner-heading" +
          (this.props.className !== undefined ? " " + this.props.className : "")
        }
        style={{ backgroundColor: bgColor, color }}
      >
        <div className="container">
          <div className="row">
            <div
              className={
                this.props.colClass !== undefined
                  ? this.props.colClass
                  : "col-md-7"
              }
            >
              <div
                style={{ maxWidth: maxWidth ? maxWidth : "" }}
                className={maxWidth ? "" : "intro-wrap uktop"}
              >
                {backArrow && (
                  <div className="back-arrow">
                    {
                      <Arrow
                        dark={backArrow.dark !== undefined ? true : false}
                        href={
                          backArrow.href !== undefined ? backArrow.href : ""
                        }
                        left
                        lang={this.props.lang}
                      />
                    }
                  </div>
                )}
                {sideHeading && (
                  <div className="side-heading">{sideHeading}</div>
                )}
                {title && <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>}
                {subtitle && (
                  <h2 dangerouslySetInnerHTML={{ __html: subtitle }}></h2>
                )}
                {button && button.link && button.label && (
                  <div className="btn-wrap">
                    {
                      <Button
                        href={button.link}
                        className="btn-fill-dark"
                        lang={this.props.lang}
                        scrollTo={button.scrollTo}
                      >
                        {button.label}
                      </Button>
                    }
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-5 col-resourec resourecUKTop">
              <Carousel
                responsive={responsiveCarousel}
                slidesToSlide={1}
                deviceType={""}
                containerClass="brands-page-wrapper"
                showDots
                keyBoardControl
              >
                {topItems.map((item, i) => {
                  const type =
                    item.hResourceTypes &&
                    item.hResourceTypes.nodes &&
                    item.hResourceTypes.nodes[0];
                  const href = getResourceUrlPath(item.slug, type?.slug);
                  return (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open in a new window"
                      href={
                        item.hResourcePostURL && item.hResourcePostURL.customUrl
                          ? item.hResourcePostURL.customUrl
                          : AddLang(href, lang)
                      }
                    >
                      <div className="brands-carousel-image-logo-container">
                        <div className="resoureCarTitle text-black">
                          {item.title}
                        </div>
                        <img
                          class="brands-card-image-resource"
                          src={
                            item.hResourcesDataUK.cardBackgroundUk?.sourceUrl
                          }
                          alt="The AI Campaign 2023"
                        />
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={
                            item.hResourcePostURL &&
                            item.hResourcePostURL.customUrl
                              ? item.hResourcePostURL.customUrl
                              : AddLang(href, lang)
                          }
                        >
                          <Arrow
                            className="brands-card-arrow resourece"
                            dark
                            lang={lang}
                            noLink={true}
                          />
                        </a>
                      </div>
                    </a>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
