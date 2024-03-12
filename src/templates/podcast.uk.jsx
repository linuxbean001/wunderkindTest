import React from "react";
import MainLayout from "../layouts/Main";
import HeroSectionPodcast from "../Components/Page/Resources/Podcasts/HeroSection/Hero";
import ParticipantsSectionPodcast from "../Components/Page/Resources/Podcasts/ParticipantSection/Participants";
import WatchNextSection from "../Components/Page/Resources/Podcasts/WatchNextSection/WatchNext";

function formatParticipantsData(participants) {
  return (
    participants &&
    participants.length > 0 &&
    participants.map(participant => ({
      firstName: participant.pcSpeakerFirstNameUk,
      lastName: participant.pcSpeakerLastNameUk,
      companyPosition: participant.pcCompanyPositionUk,
      linkedinUrl: participant.pcSpeakerLinkedinUrlUk,
      sourceUrl: participant.pcSpeakerImageUk.sourceUrl,
      altText: participant.pcSpeakerImageUk.altText,
    }))
  );
}

function getPodcastData(podcast) {
  const {
    pcHeroTitleUk,
    pcHeroSubtitleUk,
    pcHeroVideoUrlUk,
    pcAmountOfKeyTakeawaysUk,
    pcSpeakerTitleUk,
    pcRecommendedTitleUk,
    pcSpeakerUk,
    seo,
    // recommendedPodcasts,
  } = podcast;

  return {
    heroTitle: pcHeroTitleUk,
    heroSubtitle: pcHeroSubtitleUk,
    heroVideoSrc: pcHeroVideoUrlUk,
    keyTakeawaysNumber: pcAmountOfKeyTakeawaysUk,
    participantsSectionTitle: pcSpeakerTitleUk,
    participantsInfo: formatParticipantsData(pcSpeakerUk),
    recommendedSectionTitle: pcRecommendedTitleUk,
    seo,
    // watchNextItems: recommendedPodcasts,
  };
}

const Podcast = props => {
  const { pageContext } = props;
  const lang = pageContext.lang || "uk";
  const availablePodcastLanguages = props.pageContext.availableLanguages;
  const { podcast } = pageContext;
  const {
    heroTitle,
    heroSubtitle,
    heroVideoSrc,
    keyTakeawaysNumber,
    participantsSectionTitle,
    participantsInfo,
    // recommendedSectionTitle,
    seo,
    // watchNextItems,
  } = getPodcastData(podcast);

  // const watchNextItems = [
  //   {
  //     backgroundImageSrc:
  //       "https://wkd.wpengine.com/wp-content/uploads/2023/11/Djalal-Lougouev.png",
  //     backgroundImageAlt: "Djalal Lougouev",
  //     title: "Martech Companies and AI",
  //     link:
  //       "/resources/podcasts/how-martech-companies-are-leveraging-ai-with-djalal-lougouev-president-ometria/",
  //     category: "podcast",
  //     isFeatured: false,
  //     fullTitle: "AI in Practice: How Martech Companies Are Leveraging AI",
  //     titleImage: null,
  //     isVideo: true,
  //     altTitleImage: null,
  //     backgroundImageHoveredSrc:
  //       "https://wkd.wpengine.com/wp-content/uploads/2023/11/Djalal-Lougouev_Hover-Image.png",
  //     backgroundImageHoveredAlt: "Djalal Lougouev",
  //   },
  //   {
  //     backgroundImageSrc:
  //       "https://wkd.wpengine.com/wp-content/uploads/2023/11/Spencer-Sterling-V2.png",
  //     backgroundImageAlt: "Spencer Sterling",
  //     title: "The Foundations of AI",
  //     link: "/resources/podcasts/back-to-the-basics-the-foundations-of-ai/",
  //     category: "podcast",
  //     isFeatured: false,
  //     fullTitle: "Back to the Basics: The Foundations of AI",
  //     titleImage: null,
  //     isVideo: true,
  //     altTitleImage: null,
  //     backgroundImageHoveredSrc:
  //       "https://wkd.wpengine.com/wp-content/uploads/2023/11/Spencer-Sterling_Hover-Image.png",
  //     backgroundImageHoveredAlt: "Spencer Sterling",
  //   },
  //   {
  //     backgroundImageSrc:
  //       "https://wkd.wpengine.com/wp-content/uploads/2023/11/John-Bates.png",
  //     backgroundImageAlt: "John Bates",
  //     title: "Dissecting iOS17",
  //     link:
  //       "/resources/podcasts/individuality-unleashed-ios-17-dissected-insights-from-wunderkinds-vp-of-product/",
  //     category: "podcast",
  //     isFeatured: false,
  //     fullTitle: "iOS 17 Dissected: Insights From Wunderkind’s VP of Product",
  //     titleImage: null,
  //     isVideo: true,
  //     altTitleImage: null,
  //     backgroundImageHoveredSrc:
  //       "https://wkd.wpengine.com/wp-content/uploads/2023/11/John-Bates_Hover-Image.png",
  //     backgroundImageHoveredAlt: "John Bates",
  //   },
  // ];

  return (
    <MainLayout
      lang={lang}
      footerPattern="/images/patterns/pattern-06.svg"
      languages={availablePodcastLanguages}
      className={"mask5"}
      defaultStickyMenu={true}
      seoMeta={seo}
      {...props}
    >
      <HeroSectionPodcast
        title={heroTitle}
        subtitle={heroSubtitle}
        videoSrc={heroVideoSrc}
        videoTakeawaysNumber={keyTakeawaysNumber ?? 0}
      />
      {participantsInfo && participantsInfo.length > 0 && (
        <ParticipantsSectionPodcast
          sectionTitle={participantsSectionTitle}
          participantsInfo={participantsInfo}
        />
      )}

      {/* {watchNextItems && watchNextItems.length > 0 && (
        <WatchNextSection
          sectionTitle={recommendedSectionTitle}
          items={watchNextItems}
        />
      )} */}
    </MainLayout>
  );
};

export default Podcast;
