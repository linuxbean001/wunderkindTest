import React from "react";

import "./_OurValues.scss";
import ImageText from "Components/General/ImageText/ImageText";
import Divider from "Components/General/Divider/Divider";

class OurValues extends React.Component {
  values = [
    {
      title: "Come Hungry",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nibh, interdum quis lorem .",
      image: { url: "/images/image-placeholder.svg", rightAlign: true },
    },
    {
      title: "Carry Each Other",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nibh, interdum quis lorem .",
      image: { url: "/images/image-placeholder.svg" },
    },
    {
      title: "Drive Undeniable Performance",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nibh, interdum quis lorem .",
      image: { url: "/images/image-placeholder.svg", rightAlign: true },
    },
    {
      title: "Respect People, Privacy, Ideas",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nibh, interdum quis lorem .",
      image: { url: "/images/image-placeholder.svg" },
    },
    {
      title: "Bounce Back",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nibh, interdum quis lorem .",
      image: { url: "/images/image-placeholder.svg", rightAlign: true },
    },
  ];

  render() {
    return (
      <section className="our-values cream-bg">
        {this.values.map((value, index) => {
          return (
            <div
              key={index}
              className={index === this.values.length - 1 ? "last" : ""}
            >
              <ImageText key={index} image={value.image}>
                <div className="info">
                  <div className="title-wrap">
                    {value.title && <h3 className="title">{value.title}</h3>}
                    <p className="text">{value.text}</p>
                  </div>
                </div>
              </ImageText>
            </div>
          );
        })}

        <Divider
          additionalClass="cream-divider"
          bgColor="#191919"
          maskColor="#F5EBE1"
          direction="bottom-right"
        />
      </section>
    );
  }
}

export default OurValues;
