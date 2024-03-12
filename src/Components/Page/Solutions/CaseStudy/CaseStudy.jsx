import React from "react";
import "./_CaseStudy.scss";

import CaseStudySlider from "./CaseStudySlider";
class CaseStudy extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <section className="case-studies">
        {list && <CaseStudySlider list={list} />}
      </section>
    );
  }
}

export default CaseStudy;
