import React from "react";
import "./_IntroGetADemo.scss";
import Arrow from "Components/Arrow/Arrow";
import Button from "Components/Button/Button";
import { useWindowSize } from "../../../utils/useWindowSize";
import Divider from "../../../Components/General/DividerGetADemo/DividerGetADemo";
import DownloadForm from "../../../Components/Page/Resources/DownloadFormGetADemo/DownloadFormGetADemo";

function Intro (props) {
    const { bgColor, color, content, backArrow } = props;
    const { sideHeading, title, subtitle, button, badges } = content;
    let customForm = false;
    if(props.uri === '/resources/get-started'){
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
         {/* style={{height: "870px"}} */}
        <div className="container">
          <div className="row">
            <div
              className={`col-12 col-lg-6 intro-wrap-get-a-demo ${props.colClass !== undefined ? props.colClass : "col"}`}
            >
              <div className="intro-wrap">
                {backArrow && (
                  <div className="back-arrow-get-a-demo">
                    {
                      <Arrow
                        dark={backArrow.dark !== undefined ? true : false}
                        href={
                          backArrow.href !== undefined ? backArrow.href : ""
                        }
                        left
                        lang={props.lang}
                      />
                    }
                  </div>
                )}
                {sideHeading && (
                  <div className="side-heading">{sideHeading}</div>
                )}
                {title && <h1 className="intro-wrap_h1" dangerouslySetInnerHTML={{ __html: title }}></h1>}
                {subtitle && (
                  <h2 className="intro-wrap_h2" dangerouslySetInnerHTML={{ __html: subtitle }}></h2>
                )}
                {badges && (
                  <>
                  <img src="/images/resources/badgeEasyBusiness.png" className="badges" alt="" />
                  <img src="/images/resources/badgeEasySetup.png" className="badges" alt="" />
                  <img src="/images/resources/badgeRecommend.png" className="badges" alt="" />
                  <img src="/images/resources/badgeLeader.png" className="badges" alt="" />
                  </>
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
            <div className="col-12 col-lg-4 form-section-get-a-demo" id="resources-article-section">
              <DownloadForm
                  formId={props.formId}
                  marketoFormSubtitle="Tell us a bit about yourself, <br/> and we’ll get in touch shortly."
                  custom={customForm}
              />
          </div>
          </div>
        </div>
        <div className="work-with-section">
      <Divider bgColor="transparent" maskColor="#303D78"/>
        {windowSize.width < 1024 && (<img className="workwith-bg" src="/images/resources/workwith-bg.png"/>)}
        <div className="container work-with-container">
          <h2 className="work-with-heading d-none d-lg-block">You’re in good company.</h2>
          <h2 style={{whiteSpace: "pre-line"}} className="work-with-heading d-block d-lg-none">You’re in<br/>good company.</h2>
          <h2 className="work-with-subheading">Wunderkind drives over $5 billion in revenue for top brands each year.</h2>
          <ul className="compaines-work-with">
            <li>
              <img className="d-none d-lg-block" alt="Case Mate" src="/images/resources/Case-Mate.png"/>
              <img className="d-block d-lg-none" alt="Case Mate" src="/images/resources/Case-Mate-mbl.png"/>
            </li>
            <li>
              <img className="d-none d-lg-block" alt="Rag Bone" src="/images/resources/RagBone.png"/>
              <img className="d-block d-lg-none" alt="Rag Bone" src="/images/resources/RagBone-mbl.png"/>
            </li>
            <li>
              <img className="d-none d-lg-block" alt="Hello Fresh" src="/images/resources/HelloFresh.png"/>
              <img className="d-block d-lg-none" alt="Hello Fresh" src="/images/resources/HelloFresh-mbl.png"/>
            </li>
            <li>
              <img className="d-none d-lg-block" alt="Casper" src="/images/resources/Casper.png"/>
              <img className="d-block d-lg-none" alt="Casper" src="/images/resources/Casper-mbl.png"/>
            </li>
            <li>
              <img className="d-none d-lg-block" alt="Corkcicle" src="/images/resources/Corkcicle.png"/>
              <img className="d-block d-lg-none" alt="Corkcicle" src="/images/resources/Corkcicle-mbl.png"/>
            </li>
          </ul>
        </div>
          </div>
      </section>
    );
}

export default Intro;
