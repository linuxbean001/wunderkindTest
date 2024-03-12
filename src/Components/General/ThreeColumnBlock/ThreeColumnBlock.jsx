import React from "react";
import "./_ThreeColumnBlock.scss";
import Image from "../../Image/Image";
import Arrow from "../../Arrow/Arrow";
import Swiper from "react-id-swiper";
import useWindowEventListener from "utils/useWindowEventListener";

const ThreeColumnBlock = props => {
  const arrowVertical = props.arrowVertical !== false;
  const params = {
    watchOverflow: true,
    speed: 1500,
    cssMode: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  };

  const renderSwiper = sliderParams => {
    return (
      <Swiper {...sliderParams}>
        {props.content &&
          props.content.map(box => {
            return (
              <div key={box.title} className="col-md-4">
                {box.icon && (
                  <div className="icon">
                    <Image src={box.icon}></Image>
                  </div>
                )}

                {box.image && (
                  <div className="image">
                    <Image src={box.image}></Image>
                  </div>
                )}

                {box.title && <h3 className="title">{box.title}</h3>}
                <div className="subtitle">{box.subtitle}</div>

                {box.link && (
                  <div className="btn-wrap">
                    <Arrow
                      href={box.link}
                      dark={true}
                      vertical={arrowVertical}
                      lang={props.lang}
                    ></Arrow>
                  </div>
                )}
              </div>
            );
          })}
      </Swiper>
    );
  };

  const { windowWidth } = useWindowEventListener();

  return (
    <>
      <section
        className={
          "three-icons-content" + (props.className ? " " + props.className : "")
        }
      >
        <div className="container desktop-cols">
          <div className="row justify-content-center">
            {props.content &&
              props.content.map(box => {
                return (
                  <div key={box.title} className="col-md-3">
                    {box.icon && (
                      <div className="icon">
                        <Image src={box.icon}></Image>
                      </div>
                    )}

                    {box.image && (
                      <div className="image">
                        <Image src={box.image}></Image>
                      </div>
                    )}

                    {box.title && <h3 className="title">{box.title}</h3>}
                    <div
                      className="subtitle"
                      dangerouslySetInnerHTML={{ __html: box.subtitle }}
                    ></div>

                    {box.link && (
                      <div className="btn-wrap">
                        <Arrow
                          href={box.link}
                          dark={true}
                          vertical={arrowVertical}
                          lang={props.lang}
                        ></Arrow>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="mobile-cols">
          {windowWidth < 768 && renderSwiper(params)}
          {windowWidth >= 768 && renderSwiper({ ...params, cssMode: false })}
        </div>
      </section>
    </>
  );
};

export default ThreeColumnBlock;
