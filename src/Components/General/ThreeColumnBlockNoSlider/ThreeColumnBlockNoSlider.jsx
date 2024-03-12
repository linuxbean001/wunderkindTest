import React from "react";
import "./../ThreeColumnBlock/_ThreeColumnBlock.scss";
import "./_ThreeColumnBlockNoSlider.scss";
import Image from "../../Image/Image";
import Arrow from "../../Arrow/Arrow";

const ThreeColumnBlockNoSlider = props => {

  return (
    <>
      <section
        className={
          "three-icons-content no-slider" + (props.className ? " " + props.className : "")
        }
      >
        <div className="container">
          <div className="row justify-content-between">
            {props.content &&
              props.content.map(box => {
                return (
                  <div key={box.title} className="col-icon-box">
                    {box.icon && (
                      <div className="icon">
                        <Image src={box.icon}></Image>
                      </div>
                    )}

                    {box.title && <h3 className="title">{box.title}</h3>}
                    <div
                      className="subtitle"
                      dangerouslySetInnerHTML={{ __html: box.subtitle }}
                    ></div>

                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeColumnBlockNoSlider;
