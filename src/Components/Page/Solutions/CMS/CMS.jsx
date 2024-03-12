import React from "react";
import "./_CMS.scss";

import CenteredTitle from "Components/General/CenteredTitle/CenteredTitle";
import LogoWallStatic from "Components/General/LogoWallStatic/LogoWallStatic";

class CMS extends React.Component {
  render() {
    const { title, logos } = this.props;

    return (
      <section className={"cms-section" + (this.props.dark ? " dark" : "")}>
        {title && <CenteredTitle>{title}</CenteredTitle>}
        <LogoWallStatic logos={logos} lang={this.props.lang}></LogoWallStatic>
      </section>
    );
  }
}

export default CMS;
