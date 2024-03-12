import React from "react";
import "./_VideoSection.scss";
import { useWindowSize } from "../../../../../utils/useWindowSize";

const VideoSection = ({ videoSrc, videoTakeawaysNumber }) => {
  const { width } = useWindowSize();

  const baseVideoHeight =
    width <= 430
      ? width <= 375
        ? 808
        : 692
      : width >= 1440
      ? 773
      : width <= 768
      ? 583
      : 641;
  let iframeHeight = baseVideoHeight + 16 + 76 * videoTakeawaysNumber;
  if (videoSrc.includes("vimeo.com") || videoSrc.includes("youtube.com")) {
    iframeHeight = "100%";
  }

  return (
    <section className="video-section">
      <div className="container video-section-container">
        <iframe
          className="video-section-iframe"
          src={videoSrc}
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          height={iframeHeight}
          width="100%"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
