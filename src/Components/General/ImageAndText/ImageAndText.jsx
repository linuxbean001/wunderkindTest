import React from "react";

import Image from "Components/Image/Image";
import Button from "Components/Button/Button";

import ImageText from "Components/General/ImageText/ImageText";
import "./_ImageAndText.scss";

class ImageAndText extends React.Component {
  render() {
    const {
      textAlign,
      sectionTitle,
      introCopy,
      image,
      icon,
      ctaGroup,
      colorMode,
      bodyCopy,
      title,
      className,
    } = this.props;
    let sectionIndex = (this.props.sectionIndex || 0) + 1;
    const dark = colorMode && colorMode === "dark";
    const renderTitle = () => {
      return (
          title.indexOf('__') === -1 ?
              <h3 className="title">{title}</h3> :
              <>
                <h3 className="title title-first-row">{title.split('__')[0]}</h3>
                <h3 className="title">{title.split('__')[1]}</h3>
              </>
      );
    }
    if (!image) {
      return (
            bodyCopy ?
                <div className="container body-only-content">
                  <div className="row">
                    <div className="col-lg-8">
                      <div dangerouslySetInnerHTML={{ __html: bodyCopy }}></div>
                    </div>
                  </div>
                </div> :
                <></>
      );
    }

    const iconClassName = "oval-icon" + (icon ? "" : " empty");
    return (
      <section className={className} id={"main-section-" + sectionIndex}>
        <ImageText
          image={{
            url: image && image.sourceUrl,
            rightAlign: textAlign === "left",
          }}
          dark={dark}
        >
          <div className="info">
            {icon && (
              <div className={iconClassName}>
                <Image src={icon.sourceUrl} alt={icon.altText} />
              </div>
            )}

            <div className="title-wrap">
              <div className="side-heading">
                {icon && (
                  <div className={iconClassName}>
                    <Image src={icon.sourceUrl} alt={icon.altText} />
                  </div>
                )}
                {sectionTitle}
              </div>
              {
                title && renderTitle()
              }
            </div>

            <div className="mob-only">
              {image && (
                <Image src={image.sourceUrl} alt={image.altText}></Image>
              )}
            </div>

            <div dangerouslySetInnerHTML={{ __html: introCopy }}></div>

            <div dangerouslySetInnerHTML={{ __html: bodyCopy }}></div>

            {ctaGroup && ctaGroup.url && (
              <Button
                href={ctaGroup.url}
                lang={this.props.lang}
                className={`${dark ? "btn-fill-dark" : ""}`}
              >
                {ctaGroup.text}
              </Button>
            )}
          </div>
        </ImageText>
      </section>
    );
  }
}

export default ImageAndText;
