import React from "react";
import "./_FlipCard.scss";

import Plus from "Components/ButtonSigns/Plus";
import Minus from "Components/ButtonSigns/Minus";

class FlipCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flippedClass: "",
    };
    this.flipTheCard = this.flipTheCard.bind(this);
  }

  flipTheCard() {
    if (this.state.flippedClass === "") {
      this.setState({
        flippedClass: " flipped",
      });
    } else {
      this.setState({
        flippedClass: "",
      });
    }
  }

  render() {
    const {
      backContent,
      backTitle,
      frontTitle,
      backgroundImage,
      note,
    } = this.props;

    return (
      <div
        className={
          "flip-card-container email-info-card" + this.state.flippedClass
        }
      >
        <div className="card">
          <div
            style={{
              backgroundColor: "#303D78",
            }}
            className="front"
          >
            <div
              style={{
                backgroundImage: `url( ${(backgroundImage &&
                  backgroundImage.sourceUrl) ||
                  "/images/cards/cardsshape4.svg"})`,
              }}
              className="heading-shape"
            ></div>
            <div className="info">
              <div className="title">{frontTitle}</div>
              <button className="btn-wrap" onClick={this.flipTheCard}>
                <Plus />
              </button>
              {note && <div className="note">{note}</div>}
            </div>
          </div>
          <div className="back">
            <div className="info">
              <div className="title">{backTitle}</div>
              <div
                className="subtitle"
                dangerouslySetInnerHTML={{ __html: backContent }}
              ></div>
              <button className="btn-wrap" onClick={this.flipTheCard}>
                <Minus />
              </button>
              {note && <div className="note">{note}</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCard;
