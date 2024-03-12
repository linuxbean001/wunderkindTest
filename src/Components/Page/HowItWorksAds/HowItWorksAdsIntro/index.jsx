import React from "react";
import "./styles.scss";
import Button from '../../../Button/Button';

function HowItWorksAdsIntro(props) {
  return (
    <section
      className={
        "how-it-works-ads-intro"
      }
    >
      <div className={"bg-mask"}>
        <img src={"/images/how-it-works/background-blue-mask2.svg"} />
      </div>
      <div className={"bg-mask-yellow-pattern"}>
        <img src={"/images/how-it-works/yellow-pattern.svg"} />
      </div>
      <div className={"bg-mask-yellow-pattern-small"}>
        <img src={"/images/how-it-works/yellow-pattern-small.svg"} />
      </div>
      <div className="container">
        <div className="row">
          <div className={"col-xl-7 col-lg-7 col-md-12"}>
            <div>
              <h1>
                {"Stop Annoying Your Audience With Intrusive Ads."}
              </h1>
            </div>
            <div className={"how-it-works-content"}>
              <p>
                {"Bad ad experiences are costing you. WunderKIND Ads can help you serve better experiences that engage users at the right moment. The result? Happier users and higher returns."}
              </p>
            </div>
            <div>
              <Button href={"/resources/get-started/"}>{"Get Started"}</Button>
            </div>
          </div>
          <div className={"col-lg-5 col-md-12 intro-img-container"}>
            <div className={"images-wrapper"}>
              <img src={"/images/how-it-works/intro-img1.svg"}/>
              <img src={"/images/how-it-works/intro-img2.svg"}/>
              <img src={"/images/how-it-works/intro-img3.svg"}/>
              <img src={"/images/how-it-works/intro-img4.svg"}/>
              <img src={"/images/how-it-works/intro-img5.svg"}/>
              <img src={"/images/how-it-works/intro-img6.svg"}/>
              <img src={"/images/how-it-works/intro-img7.svg"}/>
              <img src={"/images/how-it-works/intro-img8.svg"}/>
              <img src={"/images/how-it-works/intro-img9.svg"}/>
            </div>

          </div>
          </div>
      </div>
    </section>
  );

}

export default HowItWorksAdsIntro;
