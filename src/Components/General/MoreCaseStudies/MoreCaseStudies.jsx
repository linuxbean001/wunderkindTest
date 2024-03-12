import React from "react";
import "./_MoreCaseStudies.scss";

import Image from "Components/Image/Image";
import Button from "Components/Button/Button";

class MoreCaseStudies extends React.Component {
  constructor(props) {
    super(props);
    this.cmpClass = "section-more-case-studies " + (this.props.dark ? "dark" : "");
    this.cmpClass += " " + (this.props.className ? this.props.className : "");
  }

  render() {
    return (
      <div className={this.cmpClass}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 class="section-title">{this.props.section_title}</h3>
            </div>
          </div>
          <div className="row">
              {this.props.content.map((value, index) => {
                return (
                  <div className="col-case-study col-xl-4">
                    <div className="image">
                      <Image src={value.image} />
                    </div>
                      <p>{value.text}</p>
                      <div className="btn-wrap">
                        <Button className="btn-dark" href={value.button.href}>{value.button.label}</Button>
                      </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default MoreCaseStudies;
