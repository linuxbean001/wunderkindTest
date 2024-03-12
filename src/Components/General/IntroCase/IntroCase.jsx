import React, { useState, useEffect } from "react";
import Image from "Components/Image/Image";
import BackArrowWithText from "../../BackArrowWithText/BackArrowWithText";
import "./_IntroCase.scss";

function IntroCase(props) {
  const { content } = props;
  const { sideHeading, title, subtitle, image, videoLink } = content;

  const [sanitizedSubtitle, setSanitizedSubtitle] = useState("");

  function extractIframeSrc(subtitle) {
    if (!subtitle) {
      return null;
    }

    const iframeSrcRegex = /<iframe[^>]*src=['"]([^'"]+)['"][^>]*>/i;
    const match = subtitle.match(iframeSrcRegex);

    if (match && match.length > 1 && match[1]) {
      const iframeSrc = match[1];
      return iframeSrc;
    } else if (videoLink) {
      return videoLink;
    } else {
      return null;
    }
  }
  function extractIframeDescription(subtitle) {
    if (!subtitle) {
      return null;
    }

    const pTagsRegex = /<p>((?:(?!<\/?p|<iframe).)*?)<\/p>/gi;
    const matches = subtitle.match(pTagsRegex);
    if (matches) {
      const pTagContents = matches.map(match => {
        return match.replace(/<\/?p|<iframe.*?<\/iframe>/gi, "");
      });
      return pTagContents.join("");
    } else {
      return subtitle;
    }
  }

  const iframeSrc = extractIframeSrc(subtitle);

  useEffect(() => {
    const pAttributes = extractIframeDescription(subtitle);
    let subtitleEl = document.createElement("span");
    subtitleEl.innerHTML = pAttributes;
    let subtitleContent = subtitleEl.textContent;

    if (subtitleContent.startsWith(">") && subtitleContent.endsWith(">")) {
      setSanitizedSubtitle(subtitleContent.slice(1, -1));
    } else {
      setSanitizedSubtitle(subtitleContent);
    }

    return
  }, [subtitle]);

  return (
    <section className="intro-case-section">
      <div className="container intro-case-container">
        <div className="intro-case-navigation">
          <BackArrowWithText
            text={"SUCCESS STORIES"}
            redirectTo="/resources"
            dark={true}
            linkClassName="back-arrow-container"
          />
        </div>
        {sideHeading && (
          <h4 className="intro-case-side-heading">{sideHeading}</h4>
        )}
        <div className="intro-case-main-content-container">
          <div className="intro-case-main-content-text">
            {title && (
              <h1
                className="intro-case-main-content-text-title"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
            )}
            <div className="intro-case-main-content-text-subtitle">
              {sanitizedSubtitle && <p>{sanitizedSubtitle}</p>}
            </div>
          </div>
          <Image
            className="intro-case-main-content-image"
            src={`${image ? image.sourceUrl : ''}`}
          />
        </div>
        {iframeSrc && (
          <div className="intro-case-main-video-wrapper">
            <iframe
              className="intro-case-main-video"
              src={iframeSrc}
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              title="introCase-iframe"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default IntroCase;
