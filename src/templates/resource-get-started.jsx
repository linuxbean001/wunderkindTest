import React from "react";

import MainLayout from "../layouts/Main";

//General Components
import Intro from "Components/General/IntroGetADemo/IntroGetADemo";

//Resrouces Components
import { useWindowSize } from "../utils/useWindowSize";
import CaseStudy from "../Components/Page/Resources/CaseStudy/CaseStudy";
import CallToAction from "../Components/Page/Resources/CallToAction/CallToAction";

function ResourcesArticle(props) {
  const { pageContext, uri } = props;
  const lang = pageContext.lang || "us";

  const windowSize = useWindowSize();
  return (
    <MainLayout
      lang={lang}
      headerPattern= {windowSize.width > 768 ? "/images/patterns/pattern-20.svg":"/images/patterns/pattern-22.svg"}
      footerPattern="/images/patterns/pattern-06.svg"
      className="mask2"
      showDemoHeader={true}
      languages={["us", "uk"]}
      {...props}
    >
      <Intro
        bgColor="#f5ebe1"
        color="#191919"
        content={{
          title: "Get Started with Wunderkind",
          subtitle: "Interested in unlocking a new performance channel or discovering our premium content ad experiences? — Get in touch now!",
          badges: []
        }}
        lang={lang}
        className={"single-resource"}
        uri={uri} 
        formId={2293}
      />
      <CaseStudy/>
      <CallToAction/>
    </MainLayout>
  );
}

export default ResourcesArticle;

