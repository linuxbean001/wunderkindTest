import React from "react";

import "./_WorkWith.scss";
import { useWindowSize } from "../../../../utils/useWindowSize";
import Divider from "../../../General/DividerGetADemo/DividerGetADemo";

function WorkWith() {
  
  const windowSize = useWindowSize();

  return (
    <>
    {windowSize.width > 767 && (<img className="workwith-bg" src="/images/resources/workwith-bg.png"/>)}
    <section className="work-with-section">
      <Divider bgColor="transform" maskColor="#303D78"/>
        {windowSize.width < 1024 && (<img className="workwith-bg" src="/images/resources/workwith-bg.png"/>)}
        <div className="container work-with-container">
          <h1 className="work-with-heading d-none d-lg-block">You’re in good company.</h1>
          <h1 style={{whiteSpace: "pre-line"}} className="work-with-heading d-block d-lg-none">You’re in<br/>good company.</h1>
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
    </section>
    </>
  );
}

export default WorkWith;
