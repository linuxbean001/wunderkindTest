import React from "react";
import Arrow from "../Components/Arrow/Arrow";

const Card = props => {
  const {
    imageUrl,
    firstSection,
    secondSection,
    thirdSection,
    url,
    item,
  } = props;

  return (
    <a className="no-underline" href={`${url}/${item.slug}`}>
      <div className="ui-card rounded">
        <div className="m-0">
          {imageUrl && (
            <img
              className="ui-card-image rounded rounded-b-none h-auto"
              alt={"Branded Card Logo"}
              src={imageUrl}
            />
          )}
        </div>
        <div className="content-section text-black pl-8 pr-7">
          <p className="content-section__first m-0 mt-4 pb-4 item-industry text-xs">
            {firstSection}
          </p>
          <span
            className="m-0 mb-4 item-title"
            dangerouslySetInnerHTML={{ __html: secondSection }}
          ></span>
          {props.thirdSection && (
            <span className="m-0 mb-4 item-title">: {thirdSection}</span>
          )}
          <div className="arrow-container">
            <Arrow noLink={true} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
