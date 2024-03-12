import React from "react";
import "./styles.scss";
import Button from '../../../Button/Button';
import {Carousel} from 'react-responsive-carousel';
import Quote from '../Quote';
import { graphql, useStaticQuery } from "gatsby";

function TeamTools(props) {

  const query = useStaticQuery(graphql`
  query TeamTools {
    wordPress {
      hPage(id: "aC1wYWdlOjY1Mjg=") {
        howItWorksEcomm {
          teamtoolsmainheadermobile
          teamtoolscircleimage {
            sourceUrl
          }
          teamtoolsmainheaderdesktop
          teamtoolsheaderdescription
          teamtoolsdescription
          teamtoolsquote
          teamtoolsquoteauthor
          teamtoolsquote2
          teamtoolsquoteauthor2
          teamtoolsquote3
          teamtoolsquoteauthor3
        }
      }
    }
  }
  `)

  const content = query.wordPress.hPage.howItWorksEcomm


  const renderPrevButton = (clickHandler, hasPrev, label) => {
    return hasPrev && (
      <div
        className={"prevButton"}
        onClick={clickHandler}
      >
        <img alt="" className="img" src="/images/arrow.svg" />
      </div>
    )
  }
  const renderNextButton = (clickHandler, hasNext, label) => {
    return hasNext && (
      <div
        className={"nextButton"}
        onClick={clickHandler}
      >
        <img width={20} alt="" className="img" src="/images/arrow.svg" />
      </div>
    )
  }
  return (
    <section
      className={
        "how-it-works-team-tools"
      }
    >
      <div className="container">
        <div className={"row"}>
          <div className={"col-lg-6 col-sm-12 header-mobile"}>
            <h2>{content.teamtoolsmainheadermobile}</h2>
          </div>
          <div className={"col-lg-6 col-sm-12"}>
            <img src={content.teamtoolscircleimage.sourceUrl} />
          </div>
          <div className={"col-lg-6 col-sm-12 header-desktop"}>
            <h2>{content.teamtoolsmainheaderdesktop}</h2>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-lg-5 col-sm-12"}>
            <h4>
              {content.teamtoolsheaderdescription}
            </h4>
            <p>
              {content.teamtoolsdescription}
            </p>
          </div>
          <div className={"col-1"}></div>
          <div className={"col-lg-6 col-sm-10"}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              renderArrowPrev={renderPrevButton}
              renderArrowNext={renderNextButton}
              selectedItem={0}
              dynamicHeight={true}
            >
              <Quote
                quote={content.teamtoolsquote}
                author={content.teamtoolsquoteauthor}
              />
              <Quote
                quote={content.teamtoolsquote2}
                author={content.teamtoolsquoteauthor2}
              />
              <Quote
                quote={content.teamtoolsquote3}
                author={content.teamtoolsquoteauthor3}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );

}

export default TeamTools;
