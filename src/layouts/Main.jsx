import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import "./Main.scss";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useCookies } from "react-cookie";
import axios from "axios";
import ModalVideo from "react-modal-video";
import CookieConsent, { Cookies } from "react-cookie-consent";
import useUtmCookies from "../utils/useUtmCookies";

function getFaviconData(data) {
  return data.generalSettingsHeadless.hGeneralSettingsPage.favicon;
}

function renderSeoMetaTags(defaultSeoMeta, pageSeoMeta) {
  let finalMeta = [];
  // Default meta for pages
  if (pageSeoMeta) {
    const windowLocation =
      typeof window !== `undefined` ? window.location : null;
    finalMeta = finalMeta.concat({
      name: "description",
      content: pageSeoMeta.metaDesc,
    });
    finalMeta = finalMeta.concat({
      property: "og:url",
      content:
        windowLocation &&
        windowLocation.protocol + windowLocation.host + windowLocation.pathname,
    });
    finalMeta = finalMeta.concat({
      property: "og:type",
      content: "website",
    });
    finalMeta = finalMeta.concat({
      property: "og:title",
      content: pageSeoMeta.title,
    });
    finalMeta = finalMeta.concat({
      property: "og:description",
      content: pageSeoMeta.opengraphDescription || pageSeoMeta.metaDesc,
    });
    finalMeta = finalMeta.concat({
      name: "twitter:description",
      content: pageSeoMeta.twitterDescription || pageSeoMeta.metaDesc,
    });
    finalMeta = finalMeta.concat({
      name: "twitter:title",
      content: pageSeoMeta.twitterTitle || pageSeoMeta.title,
    });
  }
  // Twitter meta
  if (
    pageSeoMeta &&
    defaultSeoMeta &&
    defaultSeoMeta.social &&
    defaultSeoMeta.social.twitter
  ) {
    finalMeta = finalMeta.concat({
      name: "twitter:card",
      content: defaultSeoMeta.social.twitter.cardType,
    });
    finalMeta = finalMeta.concat({
      name: "twitter:site",
      content: "@" + defaultSeoMeta.social.twitter.username,
    });
    finalMeta = finalMeta.concat({
      name: "twitter:creator",
      content: "@" + defaultSeoMeta.social.twitter.username,
    });
  }

  //Facebook and Twitter Images
  if (
    defaultSeoMeta &&
    defaultSeoMeta.social &&
    defaultSeoMeta.social.facebook &&
    pageSeoMeta
  ) {
    const twitterImageData =
      pageSeoMeta && pageSeoMeta.twitterImage
        ? pageSeoMeta.twitterImage
        : defaultSeoMeta.social.facebook.defaultImage ?? null;
    finalMeta = finalMeta.concat({
      name: "twitter:image",
      content: twitterImageData && twitterImageData.sourceUrl,
    });
    finalMeta = finalMeta.concat({
      name: "twitter:image:alt",
      content: twitterImageData && twitterImageData.altText,
    });

    const facebookImageData =
      pageSeoMeta && pageSeoMeta.opengraphImage
        ? pageSeoMeta.opengraphImage
        : defaultSeoMeta.social.facebook.defaultImage ?? null;
    finalMeta = finalMeta.concat({
      property: "og:image",
      content: facebookImageData && facebookImageData.sourceUrl,
    });
    finalMeta = finalMeta.concat({
      property: "og:image:alt",
      content: facebookImageData && facebookImageData.altText,
    });
  }
  return finalMeta;
}

const htmlDecode = input => {
  var e =
    typeof document !== `undefined` ? document.createElement("div") : false;
  if (e) {
    e.innerHTML = input;
  }
  return !e || e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};

const MainLayout = props => {
  const [cookies, setCookie] = useCookies([]);
  const meta = useMetaData();
  const defaultSeoMeta = meta.seo;
  const pageSeoMeta = props.seoMeta;
  const favicon = getFaviconData(meta);
  const lang = props.lang === "uk" ? "en-gb" : "us";
  const [openModal, setOpenModal] = useState(false);
  const [modalVideoId, setModalVideoId] = useState(false);
  const [toggleHref, setToggleHref] = useState("");
  const [modalVideoService, setModalVideoService] = useState(false);
  const hideHeader = props.hideHeader ?? false;
  const hideFooter = props.hideFooter ?? false;
  const expires = new Date(Date.now() + 12096e5);
  // const expires = new Date(Date.now() + 12096e5);
  // const expires = new Date(Date.now() + 12096e5);
  const availableLanguages = props.languages ?? [];
  // const expires = new Date(Date.now()+900000);
  const hideHeaderFooter = props.hideHeaderFooter ?? false;
  useUtmCookies();

  useEffect(() => {
    if (cookies.locationProcessed === undefined) {
      axios.get(`https://ipapi.co/json/`).then(res => {
        const data = res.data;
        const location = data.continent_code === "EU" ? "uk" : "us";
        setCookie("locationProcessed", true, { path: "/", expires: expires });
        if (needsRedirect(location)) {
          startRedirect();
        }
      });
    }
  }, []);

  const needsRedirect = lang => {
    if (!(typeof window !== `undefined`)) {
      return false;
    }

    if (window.location.hostname.endsWith("wunderkind.co")) {
      return false;
    }

    const currentLocation = window.location;
    const { pathname } = currentLocation;
    /**
     * Cases
     * /uk/resources -> us -> redirect to /resources
     * /uk/resources -> uk -> no redirect needed
     * /resources -> us -> no redirect needed
     * /resources -> uk -> redirect to /uk/resources
     */
    return (
      !(pathname.startsWith("/uk/") && lang === "uk") &&
      !(!pathname.startsWith("/uk/") && lang === "us")
    );
  };

  const getRedirectUrl = () => {
    const pathname = window.location.pathname;

    if (pathname.startsWith("/uk/")) {
      return pathname.substring(3);
    } else {
      return "/uk" + pathname;
    }
  };

  const startRedirect = () => {
    const redUrl = getRedirectUrl();
    setTimeout(function() {
      window.location.replace(redUrl);
    }, 0);
  };

  const getToggleHref = () => {
    if (!(typeof window !== `undefined`)) {
      return "";
    }
    const { origin, pathname } = window.location;
    if (pathname.startsWith("/uk/")) {
      return origin + pathname.substring(3);
    } else {
      return origin + "/uk" + pathname;
    }
  };

  const openModalVideo = e => {
    e.preventDefault();
    const itemVideoId = e.currentTarget.attributes.getNamedItem("videoid")
      ? e.currentTarget.attributes.getNamedItem("videoid").value
      : "";
    const itemVideoService = e.currentTarget.attributes.getNamedItem(
      "videotype"
    )
      ? e.currentTarget.attributes.getNamedItem("videotype").value
      : "";
    const body = document.getElementsByTagName("body");
    body[0].classList.add("modal-video-active");
    setModalVideoService(itemVideoService);
    setModalVideoId(itemVideoId);
    setOpenModal(true);
  };

  const closeModalVideo = () => {
    const body = document.getElementsByTagName("body");
    body[0].classList.remove("modal-video-active");
    setOpenModal(false);
  };

  const defUrl = props.pageContext?.hrefLangs?.us;
  const defUrlUk = props.pageContext?.hrefLangs?.uk;

  useEffect(() => {
    const modalButtons = document.querySelectorAll("[videotype]");
    if (typeof window !== "undefined") {
      let urlDef = window.location.origin;
      let urlHref = window.location.href;
      let fields = urlHref.split(urlDef);
      if (!fields[1].includes("uk")) {
        setToggleHref(defUrlUk);
      }
      if (fields[1].includes("uk")) {
        setToggleHref(defUrl);
      }
    }
    modalButtons &&
      modalButtons.forEach(item => {
        item.addEventListener("click", openModalVideo);
      });
  }, [lang]);

  const getDefaultHreflang = () => {
    const hasUsPage = availableLanguages.includes("us");
    const hasUkPage = availableLanguages.includes("uk");
    if (!hasUsPage && !hasUkPage) {
      return "";
    }
    if (hasUkPage && !hasUsPage) {
      return <link rel="alternate" href={defUrlUk} hrefLang="x-default" />;
    }
    return <link rel="alternate" href={defUrl} hrefLang="x-default" />;
  };
  return (
    <div className={`App ${props.className || ""}`}>
      <Helmet
        title={pageSeoMeta && htmlDecode(pageSeoMeta.title)}
        meta={renderSeoMetaTags(defaultSeoMeta, pageSeoMeta)}
      >
        {/* Start BounceX tag */}
        <script>{`
                    (function(d) {
                        var e = d.createElement('script');
                        e.src = d.location.protocol + '//tag.bounceexchange.com/3958/i.js';
                        e.async = true;
                        d.getElementsByTagName("head")[0].appendChild(e);
                    }(document));
                `}</script>
        {/* End BounceX tag */}
        {favicon && <link rel="icon" href={favicon.sourceUrl} />}
        {availableLanguages.includes("us") && (
          <link rel="alternate" href={defUrl} hrefLang="en-us" />
        )}
        {availableLanguages.includes("uk") && (
          <link rel="alternate" href={defUrlUk} hrefLang="en-gb" />
        )}
        {getDefaultHreflang()}
        <html lang="en" />
      </Helmet>

      {!hideHeader && (
        <Header
          bgPattern={props.headerPattern}
          className={props.className || ""}
          lang={props.lang}
          showDemoHeader={props.showDemoHeader}
          defaultSticky={props.defaultStickyMenu}
        ></Header>
      )}

      <div id="overlays"></div>
      <main style={{ overflow: "hidden" }} className={props.mainClass || ""}>
        {props.children}
      </main>

      {!hideFooter && (
        <Footer
          lang={lang}
          renderer={props.renderer}
          bgPattern={props.footerPattern}
          hideLanguageSwitch={props.hideLanguageSwitch}
          toggleHref={toggleHref}
        ></Footer>
      )}

      <ModalVideo
        channel={modalVideoService}
        isOpen={openModal}
        videoId={modalVideoId}
        onClose={closeModalVideo}
      />

      {/* <CookieConsent
                enableDeclineButton
                hideOnAccept
                hideOnDecline
                flipButtons
                buttonStyle={{borderStyle: 'solid', borderRadius: 35, color: '#191919', border: 1, paddingLeft: 29.025, paddingRight: 29.025, textDecoration: 'none', fontWeight: 'bold', fontWeight: 'bold', fontSize: 16, fontFamily: 'Larsseit', minHeight: 40, textAlign: 'center', background: '#f5ebe1', cursor: 'pointer', overflow: 'hidden' }}
                declineButtonStyle={{borderStyle: 'solid', borderRadius: 35, color: 'white', border: 1, paddingLeft: 29.025, paddingRight: 29.025, textDecoration: 'none', fontWeight: 'bold', fontWeight: 'bold', fontSize: 16, fontFamily: 'Larsseit', minHeight: 40, textAlign: 'center', background: '#191919', cursor: 'pointer', overflow: 'hidden'}}
                location="bottom"
                buttonText="I Accept"
                declineButtonText="I Decline"
                cookieName="gatsby-gdpr-google-analytics"
                onAccept={() => {
                  Cookies.set("gatsby-gdpr-google-analytics", true)
                }}
                onDecline={() => {
                  Cookies.set("gatsby-gdpr-google-analytics", false)
                }}
                >
      We value your privacy, we use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. We also share information about your use of our site with our social media, advertising and analytics partners, which may be deemed a sale of data. See our <a style={{textDecoration: 'underline', color: 'white'}} target="_blank" href="https://www.wunderkind.co/privacy/">privacy policy</a> and <a style={{textDecoration: 'underline', color: 'white'}} target="_blank" href="https://www.wunderkind.co/privacy/data-request-instructions/">Do Not Sell or Share My Data link.</a> By clicking "Accept", you consent to our use of cookies.
      </CookieConsent> */}
      {/* <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/e97c20dcfb76c85716e4be5c/script.js"></script> */}
    </div>
  );
};
export default MainLayout;

const useMetaData = () => {
  const meta = useStaticQuery(
    graphql`
      query {
        wordPress {
          seo {
            social {
              facebook {
                url
                defaultImage {
                  sourceUrl
                  altText
                }
              }
              twitter {
                cardType
                username
              }
            }
          }
          generalSettingsHeadless {
            hGeneralSettingsPage {
              favicon {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    `
  );
  return meta.wordPress;
};
