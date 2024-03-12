import React from "react";
import CenteredTitle from "Components/General/CenteredTitle/CenteredTitle";

import "./_Process.scss";

function Process(props) {
  const { title, steps } = { ...props };
  return (
    <section className="process-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CenteredTitle>{title}</CenteredTitle>
          </div>
          {steps &&
            steps.map((process, index) => {
              return (
                <div
                  key={"process-" + index}
                  className="col-xl-2 col-md-4 col-sm-12"
                >
                  <div className="row align-items-center">
                    <div className="col-2 col-md-12">
                      <h3 className="process-num">{process.step.number}</h3>
                    </div>
                    <div className="col-10 col-md-12">
                      <p className="process-txt">{process.step.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
export default Process;
