import React from "react";
import "./styles.scss";
import Button from '../../../Button/Button';
import { graphql, useStaticQuery } from "gatsby";

function Partners(props) {

  const query = useStaticQuery(graphql`
  query Partners {
    wordPress {
      hPage(id: "aC1wYWdlOjY1Mjg=") {
        howItWorksEcomm {
          partnersmainheader
          partnersbutton
          partnersbuttonhref
        }
      }
    }
  }
  `)

  const content = query.wordPress.hPage.howItWorksEcomm

  return (
    <section
      className={
        "how-it-works-partners"
      }
    >
      <div className="container">
        <h2>{content.partnersmainheader}</h2>
        <div className={"partner-logos"}>
          <div><img src={"/images/how-it-works/logo1.png"} /></div>
          <div><img src={"/images/how-it-works/logo2.png"} /></div>
          <div><img src={"/images/how-it-works/logo3.png"} /></div>
          <div><img src={"/images/how-it-works/logo4.png"} /></div>
          <div><img src={"/images/how-it-works/logo5.png"} /></div>
        </div>
        <div className={"flex"}>
          <Button href={content.partnersbuttonhref} className={"btn-dark"}>{content.partnersbutton}</Button>
        </div>
      </div>
    </section>
  );

}

export default Partners;
