import React, { useEffect } from "react";

const SliderComponent = props => {
  const { data } = props;

  let slides = null;
  let pageContainer = null;

  if (typeof window !== "undefined") {
    slides = [...document.querySelectorAll(".slide")];
    pageContainer = document.querySelector(".sliderContent");
  }

  useEffect(() => {
    slides.forEach((item, i) => {
      item.id === "0"
        ? item.classList.add("active")
        : item.classList.remove("active");
      item.addEventListener("click", () => {
        console.log(item);

        slides.find(slide => {
          slide.id === item.id
            ? slide.classList.add("active")
            : slide.classList.remove("active");
        });
        pageContainer.style.marginLeft = `-${i * 100}%`;
      });
    });
  }, []);

  return (
    <section
      className="pt-40 font-larsseit"
      style={{ backgroundColor: "#f5ebe1" }}
    >
      <div className="slides">
        {data?.map((itemSrc, i) => {
          return (
            <button className="slide" key={i}>
              bla
            </button>
          );
        })}
      </div>
      <div className="sliderContent">
        {data?.map((itemSrc, i) => {
          return (
            <div key={i} className="page m-auto">
              <img className="ml-auto mr-auto block " src={itemSrc} alt="img" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SliderComponent;
