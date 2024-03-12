import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import KPIs from "Components/General/KPIs/KPIs";
import DownloadForm from "Components/Page/Resources/DownloadForm/DownloadForm";

import "./_ResourcesArticleSection.scss";

function ResourcesArticleSection(props) {
  const {formId, uri, introText, marketoFormSubtitle, marketoFormTitle} = props;
  const stats = props.stats || [];

  const kpis = stats.map(stat => {
    return { number: stat.stat, name: stat.text };
  });
  let customForm = false;
  if(uri === '/resources/get-a-demo'){
    customForm = true;
  }

  useEffect(() => {
    if (document.querySelector(".wp-video-shortcode > source")) {
      var src = document.querySelector(".wp-video-shortcode > source").src;
      document.querySelector(".wp-video-shortcode > source").src += "#t=0.001";
      document.querySelector(".wp-video-shortcode > a").href += "#t=0.001";
      document.querySelector(".wp-video-shortcode > a").text += "#t=0.001";
      src += "#t=0.001";
      var vSrc = src;
      document.querySelector(".wp-video-shortcode").src = vSrc;
      document.querySelector(".wp-video-shortcode").setAttribute('playsinline', 'playsinline');
    }
    }, [formId]);

  return (
    <section className="resources-article-section">
      <div className="container">
        <div className="row">
          <div className={formId ? "col-lg-5" : "col-lg-8"}>
            <div className="simple-texts simple-resource">
              <div dangerouslySetInnerHTML={{ __html: introText }}></div>
            </div>
            <KPIs kpis={kpis} />
          </div>
          { formId &&
            <div className="col-lg-6 offset-lg-1">
              <DownloadForm
                  formId={formId}
                  marketoFormTitle={marketoFormTitle}
                  marketoFormSubtitle={marketoFormSubtitle}
                  custom={customForm}
              />
            </div>
          }
        </div>
      </div>
    </section>
  );
}

export default ResourcesArticleSection;
