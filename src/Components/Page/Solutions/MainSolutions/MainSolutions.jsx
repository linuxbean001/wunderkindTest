import React from "react";
import "./_MainSolutions.scss";

import Image from "Components/Image/Image";

import ImageText from "Components/General/ImageText/ImageText";
import CMS from "./../CMS/CMS";
import TabbedContent from "Components/General/TabbedContent/TabbedContent";

class MainSolutions extends React.Component {
  render() {
    return (
      <section className="main-solutions">
        <ImageText
          image={{
            url: "/images/solutions/banner-email.jpg",
            rightAlign: true,
          }}
        >
          <div className="info">
            <div className="oval-icon">
              <Image src="/images/icons/contact/email.svg"></Image>
            </div>
            <div className="mob-only">
              <Image src="/images/solutions/banner-email.jpg"></Image>
            </div>
            <div className="title-wrap">
              <div className="side-heading">Email</div>
              <h3 className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
            </div>
            <h4 className="subtitle">
              Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc condimentum faucibus ligula, vitae posuere velit sagittis at.
              Sed et neque ligula. Nulla et mauris sagittis, ultrices odio nec,
              rhoncus.
            </h4>

            <h5 className="subheading">
              Recognize more customers, in real-time
            </h5>
            <p className="text">
              Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc condimentum faucibus ligula, vitae posuere velit sagittis at.
              Sed et neque ligula. Nulla et mauris sagittis, ultrices odio nec,
              rhoncus ipsum.{" "}
            </p>
          </div>
        </ImageText>

        <TabbedContent />

        <ImageText image={{ url: "/images/solutions/banner-website.jpg" }}>
          <div className="info">
            <div className="oval-icon">
              <Image src="/images/icons/contact/website.svg"></Image>
            </div>
            <div className="mob-only">
              <Image src="/images/solutions/banner-website.jpg"></Image>
            </div>
            <div className="title-wrap">
              <div className="side-heading">Website</div>
              <h3 className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
            </div>
            <h4 className="subtitle">
              Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc condimentum faucibus ligula, vitae posuere velit sagittis at.
              Sed et neque ligula. Nulla et mauris sagittis, ultrices odio nec,
              rhoncus.
            </h4>

            <h5 className="subheading">
              Recognize more customers, in real-time
            </h5>
            <p className="text">
              Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc condimentum faucibus ligula, vitae posuere velit sagittis at.
              Sed et neque ligula. Nulla et mauris sagittis, ultrices odio nec,
              rhoncus ipsum.{" "}
            </p>
          </div>
        </ImageText>

        <ImageText
          dark={true}
          image={{ url: "/images/solutions/banner-sms.jpg", rightAlign: true }}
        >
          <div className="info">
            <div className="oval-icon">
              <Image src="/images/icons/contact/sms.svg"></Image>
            </div>
            <div className="mob-only">
              <Image src="/images/solutions/banner-sms.jpg"></Image>
            </div>
            <div className="title-wrap">
              <div className="side-heading">SMS</div>
              <h3 className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
            </div>
            <h4 className="subtitle">
              Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc condimentum faucibus ligula, vitae posuere velit sagittis at.
              Sed et neque ligula. Nulla et mauris sagittis, ultrices odio nec,
              rhoncus.
            </h4>

            <h5 className="subheading">
              Recognize more customers, in real-time
            </h5>
            <p className="text">
              Body copy lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc condimentum faucibus ligula, vitae posuere velit sagittis at.
              Sed et neque ligula. Nulla et mauris sagittis, ultrices odio nec,
              rhoncus ipsum.{" "}
            </p>
          </div>
        </ImageText>

        <CMS dark={true} lang={this.props.lang} />
      </section>
    );
  }
}

export default MainSolutions;
