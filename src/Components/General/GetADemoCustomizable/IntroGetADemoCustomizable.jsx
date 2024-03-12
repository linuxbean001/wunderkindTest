import React from "react";
import Arrow from "Components/Arrow/Arrow";
import Button from "Components/Button/Button";
import { useWindowSize } from "../../../utils/useWindowSize";
import Divider from "../DividerGetADemo/DividerGetADemo";
import DownloadForm from "../../Page/Resources/DownloadFormGetADemo/DownloadFormGetADemo";

function addLineBreak(sentence) {
  let words = sentence.split(" ");
  let middleIndex = Math.ceil(words.length / 2);
  words.splice(middleIndex, 0, "<br/>");
  return words.join(" ");
}

function Intro(props) {
  const { bgColor, color, content, backArrow, clientInformation } = props;
  const { sideHeading, title, subtitle, button } = content;
  let customForm = false;
  if (props.uri === "/resources/get-started") {
    customForm = true;
  }
  const windowSize = useWindowSize();
  return (
    <section
      className={
        "inner-heading-get-a-demo" +
        (props.className !== undefined ? " " + props.className : "")
      }
      style={{ backgroundColor: bgColor, color }}
    >
      <div className="container">
        <div className="row">
          <div
            className={`col-12 col-lg-6 intro-wrap-get-a-demo ${
              props.colClass !== undefined ? props.colClass : "col"
            }`}
          >
            <div className="intro-wrap">
              {backArrow && (
                <div className="back-arrow-get-a-demo">
                  {
                    <Arrow
                      dark={backArrow.dark !== undefined ? true : false}
                      href={backArrow.href !== undefined ? backArrow.href : ""}
                      left
                      lang={props.lang}
                    />
                  }
                </div>
              )}
              {sideHeading && <div className="side-heading">{sideHeading}</div>}
              {title && (
                <h1
                  className="intro-wrap_h1"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h1>
              )}
              {subtitle && (
                <h2
                  className="intro-wrap_h2"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></h2>
              )}
              {button && button.link && button.label && (
                <div className="btn-wrap">
                  {
                    <Button
                      href={button.link}
                      className="btn-fill-dark"
                      lang={props.lang}
                      scrollTo={button.scrollTo}
                    >
                      {button.label}
                    </Button>
                  }
                </div>
              )}
            </div>
          </div>
          <div
            className="col-12 col-lg-4 form-section-get-a-demo"
            id="resources-article-section"
          >
            <DownloadForm
              formId={props.formId}
              marketoFormSubtitle={props.formTitle}
              custom={customForm}
            />
          </div>
        </div>
      </div>
      <div className="work-with-section">
        <Divider bgColor="transparent" maskColor="#303D78" />
        {windowSize.width < 1024 && (
          <img
            className="workwith-bg"
            src="/images/resources/workwith-bg.png"
          />
        )}
        <div className="container work-with-container">
          <h2
            className="work-with-heading d-none d-lg-block"
            dangerouslySetInnerHTML={{ __html: clientInformation.title }}
          ></h2>
          <h2
            style={{ whiteSpace: "pre-line" }}
            className="work-with-heading d-block d-lg-none"
            dangerouslySetInnerHTML={{
              __html: addLineBreak(clientInformation.title),
            }}
          ></h2>
          <h2
            className="work-with-subheading"
            dangerouslySetInnerHTML={{
              __html: clientInformation.description,
            }}
          ></h2>
          <ul className="compaines-work-with">
            {clientInformation.featuredCompanies.map(company => (
              <li key={company.alt}>
                <picture>
                  <source
                    media="(min-width:992px)"
                    alt={company.alt}
                    srcSet={company.src}
                  />
                  <img src={company.srcSmall} alt={company.alt} />
                </picture>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Intro;
