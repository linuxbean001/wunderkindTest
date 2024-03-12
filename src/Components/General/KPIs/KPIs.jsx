import React from "react";
import "./_KPIs.scss";

function KPIs(props) {
  const { kpis } = props;

  return (
    <div className="kpis">
      {kpis.map((e, i) => (
        <div className="kpi" key={"kpi-" + i}>
          <div className="kpi-number">{e.number}</div>
          <div className="kpi-name">{e.name}</div>
        </div>
      ))}
    </div>
  );
}

export default KPIs;
