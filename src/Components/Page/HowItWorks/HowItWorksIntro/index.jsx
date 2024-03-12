import React from "react";
import "./styles.scss";
import Button from '../../../Button/Button';
import { graphql, useStaticQuery } from "gatsby";

function HowItWorksIntro(props) {

  const query = useStaticQuery(
    graphql`
    query HowItWorksIntro{
      wordPress{
        hPage(id: "aC1wYWdlOjY1Mjg=") {
        howItWorksEcomm {
          introdescription
          intromainheader
          introbutton
        }
      }
      }
    }
    
    `
    )

    const content = query.wordPress.hPage.howItWorksEcomm


return (
    <section
      className={
        "how-it-works-intro"
      }
    >
      <div className={"mask-images"}>
        <img className={"image-pillars"} src={"/images/how-it-works/lines.svg"} />
        <img className={"image-arrow"} src={"/images/how-it-works/graph-arrow.svg"} />
      </div>

      <div className={"dollar-signs"}>
        <img className={"image-arrow"} src={"/images/how-it-works/dollar-sign.svg"} />
        <img className={"image-arrow"} src={"/images/how-it-works/dollar-sign.svg"} />
        <img className={"image-arrow"} src={"/images/how-it-works/dollar-sign.svg"} />
        <img className={"image-arrow"} src={"/images/how-it-works/dollar-sign.svg"} />
        <img className={"image-arrow"} src={"/images/how-it-works/dollar-sign.svg"} />
      </div>
      <div className={"bg-mask"}>
        <img src={"/images/how-it-works/background-blue-mask2.svg"} />
      </div>
      <div className="container">
        <div className="row">
          <div className={"col-lg-12"}>
            <h1>
              {content.intromainheader}
            </h1>
          </div>
          <div className={"how-it-works-content col-lg-7 col-xs-12"}>
            <p>
              {content.introdescription}
            </p>
          </div>
          <div className={"col-12"}>
            <Button href={"/resources/get-started/"}>{content.introbutton}</Button>
          </div>

        </div>
      </div>
    </section>
  );
}



export default HowItWorksIntro;
