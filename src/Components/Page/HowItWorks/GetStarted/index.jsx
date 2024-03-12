import React from "react";
import "./styles.scss";
import Button from '../../../Button/Button';
import { graphql, useStaticQuery } from "gatsby";

function GetStarted(props) {
  //console.log(props.backType)
  const query = useStaticQuery(graphql`
  query GetStarted {
    wordPress {
      hPage(id: "aC1wYWdlOjY1Mjg=") {
        howItWorksEcomm{
          getstartedmainheader
          getstartedbuttonhref
          getstartedbutton
          getstartedmainimage{
            sourceUrl
          }
          getstartedresourcesbutton
          getstartedresourcesbuttonhref
          getstartedresourcesheader
          getstartedresourcesimage {
            sourceUrl
          }
        }
      }
    }
  }
  `)

  const content = query.wordPress.hPage.howItWorksEcomm;
  return (
    <section
      className={`how-it-works-get-started ${props.backType}`}
    >
      <div className="container">
        <div className={"row"}>
          <div className={"col-xl-8 col-lg-12 col-md-12 col-sm-12"}>
          <h2>{(props.backType === 'how-it-works-back-color') ? content.getstartedmainheader : content.getstartedresourcesheader}</h2>
            <Button href={(props.backType === 'how-it-works-back-color') ? content.getstartedbuttonhref : content.getstartedresourcesbuttonhref} className={"get-started-button"}>{(props.backType === 'how-it-works-back-color') ? content.getstartedbutton : content.getstartedresourcesbutton}</Button>
          </div>
          <div className={"col-xl-4 col-lg-12 col-sm-12 image-wrapper"}>
              <img src={(props.backType === 'how-it-works-back-color') ? content.getstartedmainimage.sourceUrl : content.getstartedresourcesimage.sourceUrl}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
