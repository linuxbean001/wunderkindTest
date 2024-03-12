import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./styles.scss";

function HowIsItPossible(props) {

  const query = useStaticQuery(
    graphql`
    query HowIsItPossible {
      wordPress{
        hPage(id: "aC1wYWdlOjY1Mjg=") {
          howItWorksEcomm {
            howisitpossibleheader
            howisitpossibledescription
            howisitpossiblecookiedescription
            howisitpossiblegraphdescriptiondesktop
            howisitpossiblegraphdescriptionmobile
            howisitpossiblerevenuedescriptiondesktop
            howisitpossiblerevenuedescriptionmobile
          }
        }
      }
    }
  `)

  const content = query.wordPress.hPage.howItWorksEcomm


  return (
    <section
      className={
        "how-is-it-possible"
      }
    >
      <div className="container">
        <div className={"row"}>
          <div className={"col-lg-6 col-sm-12 image-container image-desktop"}>
            <img src={"/images/how-it-works/hero1.png"} />
          </div>
          <div className={"col-lg-5 col-sm-12 text-container"}>
            <h2>{content.howisitpossibleheader}</h2>
            <p>{content.howisitpossibledescription}</p>
            <p>{content.howisitpossiblecookiedescription}</p>
          </div>
          <div className={"col-lg-6 col-sm-12 image-container image-mobile"}>
            <img src={"/images/how-it-works/hero1.png"} />
          </div>
          <div className={"col-1"}></div>
        </div>
        <div className={"header-parts-container"}>
          <div className={"header-mobile"}>
            {"The Power of Our Network Comes From its Scale"}
          </div>
          <div className={"col-lg-4 col-sm-12 paragraphs-container paragraphs-container-mobile "}>
            <p>{content.howisitpossiblegraphdescriptionmobile}</p>
            <p>{content.howisitpossiblerevenuedescriptionmobile}</p>
          </div>
          <div>
            <img className={"header-image-first"} src={"/images/how-it-works/pattern1.png"} />
            <span className={"header-text-part"}>{"The Power of Our"}</span>
          </div>
          <div>
            <span className={"header-text-part"}>{"Network Comes"}</span>
            <img className={"header-image-second"} src={"/images/how-it-works/pattern2.png"} />
          </div>
          <div className={"row"}>
            <div className={"col-lg-8 col-sm-12"}>
              <div>
                <span className={"header-text-part"}>{"From its Scale"}</span>
              </div>
              <div className={"images-flex-container"}>
                <div><img src={"/images/how-it-works/image1.png"} /></div>
                <div><img src={"/images/how-it-works/image2.png"} /></div>
                <div><img src={"/images/how-it-works/image3.png"} /></div>
              </div>
            </div>
            <div className={"col-lg-4 col-sm-12 paragraphs-container paragraphs-container-desktop "}>
              <p>{content.howisitpossiblegraphdescriptiondesktop}</p>
              <p>{content.howisitpossiblerevenuedescriptiondesktop}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default HowIsItPossible;
