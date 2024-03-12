import React, { useState } from "react";
import Plx from "react-plx";
import Image from "../Image/Image";
import MegaMenu from "../MainMenu/MegaMenu";
import { graphql, useStaticQuery } from "gatsby";
import { AddLang } from "../../utils/addLang";
import "./DemoHeader.scss";

function getHeaderMenuDataUs(data) {
  return data.wordPress.generalSettingsHeadless.hGeneralSettingsPage.links;
}

function getHeaderMenuDataUk(data) {
  return data.wordPress.generalSettingsHeadless.hGeneralSettingsPage
    .linksUkLinks;
}

function getHeaderButtonDataUs(data) {
  return data.wordPress.generalSettingsHeadless.hGeneralSettingsPage.ctaGroup;
}

function getHeaderButtonDataUk(data) {
  return data.wordPress.generalSettingsHeadless.hGeneralSettingsPage
    .ctaGroupUkCtaGroup;
}

function getLogoData(data) {
  return {
    logo: data.wordPress.generalSettingsHeadless.hGeneralSettingsPage.logo,
    logoMegaMenu:
      data.wordPress.generalSettingsHeadless.hGeneralSettingsPage.logoMegaMenu,
  };
}

const DemoHeader = props => {
  const data = useHeaderMetaData();

  const [showMenu, setShowMenu] = useState(false);
  const [menuItem, setMenuItem] = useState(null);
  const [openClass, setOpenClass] = useState("");
  const [ctaButton, setCtaButton] = useState(
    props.lang === "uk"
      ? getHeaderButtonDataUk(data)
      : getHeaderButtonDataUs(data)
  );
  const [menuData, setMenuData] = useState(
    props.lang === "uk" ? getHeaderMenuDataUk(data) : getHeaderMenuDataUs(data)
  );

  const moveHeader = [
    {
      start: ".site-header",
      duration: "30vh",
      startOffset: "0vh",
      properties: [
        {
          startValue: 0,
          endValue: 200,
          unit: "%",
          property: "translateY",
        },
        {
          startValue: 1,
          endValue: 0.5,
          property: "opacity",
        },
      ],
    },
  ];

  const menu_items = !menuData
    ? []
    : menuData.map(item => {
        switch (item.__typename) {
          case "GeneralSettingsHeadless_Hgeneralsettingspage_Links_SubMenu":
          case "GeneralSettingsHeadless_Hgeneralsettingspage_LinksUkLinks_SubMenu":
            return {
              main_menu_item: {
                label: item.itemName,
                link: item.itemDestination,
              },
              subitems: {
                illustrations: !item.illustrations
                  ? []
                  : item.illustrations
                      .map(illu => {
                        return illu.image && illu.image.sourceUrl;
                      })
                      .filter(Boolean),
                items: !item.subMenuEntries
                  ? []
                  : item.subMenuEntries.map(subMenu => {
                      return {
                        main_items: {
                          label: subMenu.subMenuSections.title,
                          link: null,
                        },
                        menu_items: !subMenu.subMenuSections.links
                          ? []
                          : subMenu.subMenuSections.links.map(linkData => {
                              return {
                                label:
                                  linkData.linkGroup && linkData.linkGroup.text,
                                link:
                                  linkData.linkGroup && linkData.linkGroup.url,
                              };
                            }),
                      };
                    }),
              },
            };
          default:
            return {
              main_menu_item: {
                label: item.itemName,
                link: item.itemDestination,
              },
            };
        }
      });

  const logoData = getLogoData(data);

  const showMegaMenu = (item, e) => {
    if (document.querySelector(".menu-item-active") !== null) {
      document
        .querySelector(".menu-item-active")
        .classList.remove("menu-item-active");
    }
    e.currentTarget.classList.add("menu-item-active");
    setShowMenu(true);
    setMenuItem(item);
    setOpenClass(
      item !== null && item.subitems !== null && item.subitems !== undefined
        ? " mega-menu-open"
        : ""
    );
  };

  const mouseLeaveHandler = showMenu => {
    if (document.querySelector(".menu-item-active") !== null) {
      document
        .querySelector(".menu-item-active")
        .classList.remove("menu-item-active");
    }
    if (!showMenu) {
      setShowMenu(false);
      setMenuItem(null);
      setOpenClass("");
    }
  };

  return (
    <>
      <header className={"site-header top-header " + openClass}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <Plx
              animateWhenNotInViewport={true}
              parallaxData={moveHeader}
              className="col col-logo"
            >
              <a href={AddLang("/", props.lang)}>
                {logoData.logo && logoData.logo.sourceUrl && (
                  <Image
                    className="logo-white"
                    src={logoData.logo.sourceUrl}
                    alt={logoData.logo.altText}
                  ></Image>
                )}
                {logoData.logoMegaMenu && logoData.logoMegaMenu.sourceUrl && (
                  <Image
                    className="logo-dark"
                    src={logoData.logoMegaMenu.sourceUrl}
                    alt={logoData.logoMegaMenu.altText}
                  ></Image>
                )}
              </a>
            </Plx>
            <Plx
              animateWhenNotInViewport={true}
              parallaxData={moveHeader}
              className="col header-nav"
            >
              <div className="menu header-button-demo-header">
                <a href="/" className="cross-button-demo-header">
                  X
                </a>
                <a></a>
              </div>
            </Plx>
          </div>
        </div>
      </header>

      <header className={"site-header sticky-header-demo-header" + openClass}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col col-logo">
              <a href={AddLang("/", props.lang)}>
                {logoData.logo && logoData.logo.sourceUrl && (
                  <Image
                    className="logo-white"
                    src={logoData.logo.sourceUrl}
                    alt={logoData.logo.altText}
                  ></Image>
                )}
                {logoData.logoMegaMenu && logoData.logoMegaMenu.sourceUrl && (
                  <Image
                    className="logo-dark"
                    src={logoData.logoMegaMenu.sourceUrl}
                    alt={logoData.logoMegaMenu.altText}
                  ></Image>
                )}
              </a>
            </div>
            <div className="group-together">
              <div className="col header-nav">
                <div className="menu sticky-header-button-demo-header">
                  <a href="/" className="cross-button-demo-header">
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MegaMenu
        mouseLeaveHandler={mouseLeaveHandler}
        showMenu={showMenu}
        menuItem={menuItem}
        lang={props.lang}
      />
    </>
  );
};
export default DemoHeader;

const useHeaderMetaData = () => {
  const header = useStaticQuery(
    graphql`
      query {
        wordPress {
          generalSettingsHeadless {
            hGeneralSettingsPage {
              links {
                ... on WordPress_GeneralSettingsHeadless_Hgeneralsettingspage_Links_SubMenu {
                  subMenuEntries {
                    subMenuSections {
                      links {
                        linkGroup {
                          text
                          url
                        }
                      }
                      title
                    }
                  }
                  itemName
                  itemDestination
                  illustrations {
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                ... on WordPress_GeneralSettingsHeadless_Hgeneralsettingspage_Links_SimpleMenuItem {
                  itemDestination
                  itemName
                }
              }
              linksUkLinks {
                ... on WordPress_GeneralSettingsHeadless_Hgeneralsettingspage_LinksUkLinks_SubMenu {
                  subMenuEntries {
                    subMenuSections {
                      links {
                        linkGroup {
                          text
                          url
                        }
                      }
                      title
                    }
                  }
                  itemName
                  itemDestination
                  illustrations {
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
                ... on WordPress_GeneralSettingsHeadless_Hgeneralsettingspage_LinksUkLinks_SimpleMenuItem {
                  itemDestination
                  itemName
                }
              }
              ctaGroup {
                text
                url
              }
              ctaGroupUkCtaGroup {
                text
                url
              }
              logo {
                altText
                sourceUrl
              }
              logoMegaMenu {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    `
  );
  return header;
};
