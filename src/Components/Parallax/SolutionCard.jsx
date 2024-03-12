import React from "react";

import Image from "./../Image/Image";
import Arrow from "./../Arrow/Arrow";

class SolutionCard extends React.Component {
  render() {
    const { itemImage, itemTitle, itemCopy, cta } = this.props;

    return (
      <div className="swiper-slide">
        <div className="sl-info-box">
          <div className="img">
            {itemImage && itemImage.sourceUrl && (
              <Image src={itemImage.sourceUrl}></Image>
            )}
          </div>

          <div className="title">{itemTitle}</div>
          <div className="text">{itemCopy}</div>
          {cta && cta.buttonUrl && (
            <Arrow
              className="dark-fill"
              href={cta.buttonUrl}
              lang={this.props.lang}
            ></Arrow>
          )}
        </div>
      </div>
    );
  }
}

export default SolutionCard;
