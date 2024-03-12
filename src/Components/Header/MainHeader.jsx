import React, { useState } from "react";
import Plx from "react-plx";
import Image from "../Image/Image";
import Button from "../Button/Button";
import MegaMenu from "../MainMenu/MegaMenu";
import MobileMenu from "../MainMenu/MobileMenu";
import MobileMenuButton from "../MainMenu/MobileMenuButton";
import MobileMenuButtonSticky from "../MainMenu/MobileMenuButtonSticky";
import { graphql, useStaticQuery } from "gatsby";
import { AddLang } from "../../utils/addLang";
import { getVideoData } from "../../utils/getVideoData";

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

const MainHeader = props => {
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
          case "WordPress_GeneralSettingsHeadless_Hgeneralsettingspage_Links_SubMenu":
          case "WordPress_GeneralSettingsHeadless_Hgeneralsettingspage_LinksUkLinks_SubMenu":
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
              <nav role="navigation" className="menu">
                {menu_items.map((item, index) => {
                  return (
                    <li id={item.label} key={index}>
                      {item.main_menu_item.link !== null ? (
                        <a
                          role="button"
                          onMouseEnter={showMegaMenu.bind(this, item)}
                          href={AddLang(item.main_menu_item.link, props.lang)}
                          {...getVideoData(item.main_menu_item.link)}
                        >
                          {item.main_menu_item.label}
                          {item.subitems !== null &&
                            item.subitems !== undefined && (
                              <svg
                                role="presentation"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 18 11"
                              >
                                <path
                                  id="arrow"
                                  fill="#ffffff"
                                  d="M0.8,0.8c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1l6.4,6.4l6.4-6.4c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1
                                                            c0.4,0.4,0.4,0.9,0.1,1.3l-0.1,0.1L9.3,9.3C8.9,9.6,8.3,9.7,8,9.4L7.9,9.3L0.8,2.2C0.4,1.8,0.4,1.2,0.8,0.8z"
                                />
                              </svg>
                            )}
                        </a>
                      ) : (
                        <a
                          role="button"
                          onMouseEnter={showMegaMenu.bind(this, item)}
                          href={"#" + item.main_menu_item.label}
                        >
                          {item.main_menu_item.label}
                          {item.subitems !== null &&
                            item.subitems !== undefined && (
                              <svg
                                role="presentation"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 18 11"
                              >
                                <path
                                  id="arrow"
                                  fill="#ffffff"
                                  d="M0.8,0.8c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1l6.4,6.4l6.4-6.4c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1
                                                            c0.4,0.4,0.4,0.9,0.1,1.3l-0.1,0.1L9.3,9.3C8.9,9.6,8.3,9.7,8,9.4L7.9,9.3L0.8,2.2C0.4,1.8,0.4,1.2,0.8,0.8z"
                                />
                              </svg>
                            )}
                        </a>
                      )}
                    </li>
                  );
                })}
              </nav>
              {ctaButton.text && ctaButton.url && (
                <Button
                  className="btn-fill"
                  href={ctaButton.url}
                  lang={props.lang}
                >
                  {ctaButton.text}
                </Button>
              )}
              <MobileMenuButton></MobileMenuButton>
            </Plx>
          </div>
        </div>
      </header>

      <header className={"site-header sticky-header" + openClass}>
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
            <div className="col header-nav">
              <ul className="menu">
                {menu_items.map((item, index) => {
                  return (
                    <li id={item.label} key={index}>
                      {item.main_menu_item.link !== null ? (
                        <a
                          onMouseEnter={showMegaMenu.bind(this, item)}
                          href={AddLang(item.main_menu_item.link, props.lang)}
                          {...getVideoData(item.main_menu_item.link)}
                        >
                          {item.main_menu_item.label}
                          {item.subitems !== null &&
                            item.subitems !== undefined && (
                              <svg
                                role="presentation"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 18 11"
                              >
                                <path
                                  id="arrow"
                                  fill="#ffffff"
                                  d="M0.8,0.8c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1l6.4,6.4l6.4-6.4c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1
                                                            c0.4,0.4,0.4,0.9,0.1,1.3l-0.1,0.1L9.3,9.3C8.9,9.6,8.3,9.7,8,9.4L7.9,9.3L0.8,2.2C0.4,1.8,0.4,1.2,0.8,0.8z"
                                />
                              </svg>
                            )}
                        </a>
                      ) : (
                        <a
                          onMouseEnter={showMegaMenu.bind(this, item)}
                          href={"#" + item.main_menu_item.label}
                        >
                          {item.main_menu_item.label}
                          {item.subitems !== null &&
                            item.subitems !== undefined && (
                              <svg
                                role="presentation"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 18 11"
                              >
                                <path
                                  id="arrow"
                                  fill="#ffffff"
                                  d="M0.8,0.8c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1l6.4,6.4l6.4-6.4c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1
                                                            c0.4,0.4,0.4,0.9,0.1,1.3l-0.1,0.1L9.3,9.3C8.9,9.6,8.3,9.7,8,9.4L7.9,9.3L0.8,2.2C0.4,1.8,0.4,1.2,0.8,0.8z"
                                />
                              </svg>
                            )}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
              {ctaButton.text && ctaButton.url && (
                <Button
                  className="btn-fill"
                  href={ctaButton.url}
                  lang={props.lang}
                >
                  {ctaButton.text}
                </Button>
              )}
              <MobileMenuButtonSticky></MobileMenuButtonSticky>
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

      <MobileMenu
        menuItems={menu_items}
        lang={props.lang}
        ctaButton={ctaButton}
      />
    </>
  );
};
export default MainHeader;

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
