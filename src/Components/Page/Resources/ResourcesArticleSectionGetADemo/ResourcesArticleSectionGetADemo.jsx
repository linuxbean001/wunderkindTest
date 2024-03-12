import React from "react";

import DownloadForm from "Components/Page/Resources/DownloadFormGetADemo/DownloadFormGetADemo";

import "./_ResourcesArticleSectionGetADemo.scss";
import { useWindowSize } from "../../../../utils/useWindowSize";

function ResourcesArticleSection(props) {
  let customForm = false;
  if(props.uri === '/resources/get-started'){
    customForm = true;
  }
  const windowSize = useWindowSize();

  return (
    <section className="resources-article-section-get-a-demo">
      <div className="container">
        <div className="row resources-article-section-row">
          <div className={`section-image-get-a-demo col-12 col-lg-5`}>
            <div className="simple-texts simple-resource">
              <img className="simple-resource-image-get-a-demo" src={`/images/resources/wk-Artist-w-innovator${windowSize.width > 767 ? ".png":"-mbl.png"}`}/>
            </div>
          </div>
          <div className="col-12 col-lg-4 form-section-get-a-demo" id="resources-article-section">
              <img src={`/images/resources/circle-background${windowSize.width > 767 ? ".png":"-mbl.png"}`} className="form-section-background-get-a-demo"/>
              <DownloadForm
                  formId={props.formId}
                  marketoFormSubtitle="Tell us a bit about yourself, <br/> and we’ll get in touch shortly."
                  custom={customForm}
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesArticleSection;
