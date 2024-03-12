import React from "react";
import RisingCurve from "../../../../../UI/SVGComponents/RisingCurve";
import BackArrowWithText from "../../../../../Components/BackArrowWithText/BackArrowWithText";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import VideoSection from "../VideoSection/VideoSection";
import "./_Hero.scss";

const HeroSectionPodcast = ({
  title,
  subtitle,
  videoSrc,
  videoTakeawaysNumber,
}) => {
  return (
    <section className="main-section">
      <div className="container main-section-content-container">
        <BackArrowWithText
          text="Podcasts"
          dark={false}
          redirectTo={"/resources"}
        />
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
      </div>
      <RisingCurve fillColor="#fbfcfd" complementColor="#F6EBE2" />
      {videoSrc && (
        <VideoSection
          videoSrc={videoSrc}
          videoTakeawaysNumber={videoTakeawaysNumber}
        />
      )}
    </section>
  );
};

export default HeroSectionPodcast;
