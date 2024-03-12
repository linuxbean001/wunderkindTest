import React from "react";

import Image from "Components/Image/Image";
import Arrow from "Components/Arrow/Arrow";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const StaffBoxSliderButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  return (
    <div className="carousel-button-group staff-box-slide-nav">
      <div
        className={"slide-arrow prev swiper-button-prev"}
        onClick={() => previous()}
      ></div>
      <div
        className="slide-arrow next swiper-button-next"
        onClick={() => next()}
      ></div>
    </div>
  );
};

class StaffBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedBio: "",
      params: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        shouldSwiperUpdate: true,
      },
    };
    this.openBio = this.openBio.bind(this);
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {

  // }

  _renderSwiper() {
    return (
      <Carousel
        responsive={{
          all: {
            breakpoint: {
              min: 0,
              max: 4000,
            },
            items: 1,
            slidesToSlide: 1,
          },
        }}
        showDots={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<StaffBoxSliderButtonGroup />}
        infinite
        containerClass="container-with-dots"
        itemClass="image-item swiper-slide"
        arrows={false}
      >
        {this.props.content.sillyPhotos.map((value, index) => {
          return (
            <div key={index}>
              <div
                key={index}
                className={"slide-image image"}
                style={{
                  backgroundImage: "url(" + value.photo.sourceUrl + ")",
                }}
              ></div>
            </div>
          );
        })}
      </Carousel>
    );
  }

  openBio() {
    if (this.state.openedBio === "") {
      this.setState({
        openedBio: " bio-opened",
      });
    } else {
      this.setState({
        openedBio: "",
      });
    }
  }

  render() {
    return (
      <div
        className={`staff-box bio-closed staff-box-${this.props.itemIndex}`}
        item-target-class={`staff-box-${this.props.itemIndex}`}
      >
        <div
          className={
            "flip-container " + (this.props.content.sillyPhotos ? "flip" : "")
          }
        >
          <div className="flipper">
            <div
              style={{
                backgroundImage: "url(" + this.props.content.image + ")",
              }}
              className="image front"
            ></div>
            {this.props.content.sillyPhotos &&
              this.props.content.sillyPhotos.length < 2 && (
                <div
                  style={{
                    backgroundImage:
                      "url(" +
                      this.props.content.sillyPhotos[0].photo.sourceUrl +
                      ")",
                  }}
                  className="image back noswip"
                ></div>
              )}
            {this.props.content.sillyPhotos &&
              this.props.content.sillyPhotos.length > 1 && (
                <div className="back swiper">{this._renderSwiper()}</div>
              )}
            {this.props.content.bio && (
              <div className="bio">
                <p
                  dangerouslySetInnerHTML={{ __html: this.props.content.bio }}
                ></p>
              </div>
            )}
          </div>
        </div>

        <div className="info">
          <div
            className={`name ${
              this.props.content.bio ? "bio-available-name" : ""
            }`}
          >
            {this.props.content.name}
          </div>
          <div className="position">{this.props.content.position}</div>
          {this.props.content.bio && (
            <button className="btn-bio js-btn-bio" onClick={this.props.openBio}>
              <Arrow plus={true} lang={this.props.lang}></Arrow>
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default StaffBox;
