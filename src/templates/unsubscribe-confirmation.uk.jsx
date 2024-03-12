import React from "react";
import MainLayout from "../layouts/Main";
import Intro from "../Components/General/Intro/Intro";
import UnsubscribeConfirmation from "../Components/Page/Unsubscribe/UnsubscribeConfirmation/UnsubscribeConfirmation";

function UnsubscribeConfirmationTemplate(props) {
  return (
    <MainLayout
      lang="us"
      headerPattern="/images/patterns/pattern-14.svg"
      footerPattern="/images/patterns/pattern-14.svg"
      seoMeta={{
        title: `Unsubscribe Confirmation | Wunderkind`,
        metaDesc: `Unsubscribe Confirmation`,
      }}
      languages={["us", "uk"]}
      {...props}
    >
      <Intro
        key={"section-unsubscribe"}
        className="general_intro"
        colClass="col-md-8"
        content={{
          title: "Email preference center confirmation",
          sideHeading: "Unsubscribe",
          subtitle: "",
        }}
        sorted={[]}
        list={[]}
      ></Intro>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <UnsubscribeConfirmation />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default UnsubscribeConfirmationTemplate;
