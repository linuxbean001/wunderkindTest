import React from "react";

const LPNav = props => {
  return (
    <header className={"lp-header"}>
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="col-12 col-sm-4 col-logo">
          <a href={"/"}>
            <img
              className="logo-white"
              src="https://wkd.wpengine.com/wp-content/uploads/2021/08/Wunderkind_Logo_rgb_white-01-1.svg"
              width="268"
              alt="Wunderkind Home"
            />
          </a>
        </div>
        <div className="col-12 col-sm-8 d-flex justify-content-end align-items-center gap col-cta cta-top">
          <h2 className="pr-2">eCommerce Marketing Strategy Workshop</h2>
          <a href="/driverevenue/workshop" className="btn btn-fill background-yellow">
            <div className="btn-lbl-helper">Sign Up</div>
            <span className="in background-yellow">Sign Up</span>
            <span className="out"> Sign Up</span>
          </a>
        </div>
      </div>
    </header>
  );
};
export default LPNav;
