import React from "react";
import "./_IntroResource.scss";
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

class IntroResource extends React.Component {
  render() {
    const { bgColor, color, content, backArrow, maxWidth } = this.props;
    const { sideHeading, title, subtitle, button } = content;
    const { sorted, list, lang } = this.props;
    const allItems = [...sorted, ...list];
    const topItems = allItems.slice(0, N);
    console.log("topItems", topItems);
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
                className={maxWidth ? "" : "intro-wrap top"}
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
                  <div className="side-heading-rs">{sideHeading}</div>
                )}
                {title && <h1>{title}</h1>}
                {subtitle && (
                  <h2 dangerouslySetInnerHTML={{ __html: subtitle }}></h2>
                )}
              </div>
            </div>
            <div className="col-md-5 col-resourec resourecTop">
              <Carousel
                responsive={responsiveCarousel}
                ssr
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
                      // href={content.brandsimageshref}
                      href={
                        item.hResourcePostURL && item.hResourcePostURL.customUrl
                          ? item.hResourcePostURL.customUrl
                          : AddLang(href, lang)
                      }
                      aria-label="Open in a new window"
                    >
                      <div className="brands-carousel-image-logo-container">
                        <div className="resoureCarTitle text-black">
                          {item.title}
                        </div>
                        <img
                          class="brands-card-image-resource"
                          src={item.hResourcesData.cardBackground?.sourceUrl}
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
        {/* <div className={"section-mask-wrap-resouce-hero"}>
          <svg
            role="presentation"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1440 160.8"
            xmlSpace="preserve"
          >
            <g>
              <path
                fill="#F5EBE1"
                d="M1440.3,35.6c-97.8,38.9-242.9,75-443.3,74.9c-71,0-149.1-4.6-234.7-15.2L-0.3,0v160.8h1440.7"
              />
            </g>
          </svg>
        </div> */}
      </section>
    );
  }
}

export default IntroResource;
