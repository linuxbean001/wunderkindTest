import React from "react";
import MainLayout from "../layouts/Main";
import Intro from "../Components/General/Intro/Intro";
import UnsubscribeForm from "../Components/Page/Unsubscribe/UnsubscribeForm/UnsubscribeForm";

function UnsubscribeTemplate(props) {
  return (
    <MainLayout
      lang="uk"
      headerPattern="/images/patterns/pattern-14.svg"
      footerPattern="/images/patterns/pattern-14.svg"
      seoMeta={{
        title: `Unsubscribe | Wunderkind`,
        metaDesc: `Unsubscribe`,
      }}
      languages={["us", "uk"]}
      {...props}
    >
      <Intro
        key={"section-unsubscribe"}
        className="general_intro"
        colClass="col-md-8"
        content={{
          title: "Email preference center",
          sideHeading: "Unsubscribe",
          subtitle: "",
        }}
        sorted={[]}
        list={[]}
      ></Intro>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <UnsubscribeForm lang="uk" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default UnsubscribeTemplate;
