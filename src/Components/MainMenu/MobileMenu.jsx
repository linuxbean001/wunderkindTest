import React from "react";

import Image from "../Image/Image";
import Button from "../Button/Button";

import "./_MobileMenu.scss";
import { AddLang } from "../../utils/addLang";
import { getVideoData } from "../../utils/getVideoData";

function MobileMenu(props) {
  const openSubMenu = e => {
    e.preventDefault();
    e.stopPropagation();
    let menu_item = e.currentTarget.parentNode.parentNode;

    if (menu_item.classList.contains("open")) {
      menu_item.classList.remove("open");
    } else {
      if (document.querySelector(".mob-menu-item.open") !== null) {
        document.querySelector(".mob-menu-item.open").classList.remove("open");
      }
      menu_item.classList.add("open");
    }
  };

  return (
    <div className={"mobile-menu"}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mobile-menu-wrap">
              {props.menuItems.map((menu_item, index) => {
                return (
                  <div key={index} className="mob-menu-item">
                    <div className="main-menu-item-wrap">
                      <a
                        onClick={openSubMenu.bind(this)}
                        href={AddLang(
                          menu_item.main_menu_item.link,
                          props.lang
                        )}
                        {...getVideoData(menu_item.main_menu_item.link)}
                      >
                        {menu_item.main_menu_item.label}
                      </a>
                      {menu_item.subitems !== null &&
                        menu_item.subitems !== undefined && (
                          <button
                            onClick={openSubMenu.bind(this)}
                            className="btn-sub"
                          >
                            <Image src="/images/icons/caret-down.svg"></Image>
                          </button>
                        )}
                    </div>
                    {menu_item.subitems !== null &&
                      menu_item.subitems !== undefined && (
                        <div className="mob-submenu">
                          <div className="row">
                            {menu_item.subitems.items.map((value, index) => {
                              return (
                                <div
                                  key={index}
                                  className={
                                    menu_item.subitems.items.length > 1
                                      ? "col-6"
                                      : "col"
                                  }
                                >
                                  {value.main_items !== undefined && (
                                    <div className="mm-menu-main-item">
                                      {value.main_items.label}
                                    </div>
                                  )}

                                  <ul className="mm-sub-items">
                                    {value.menu_items.map((value, index) => {
                                      return (
                                        <li key={index}>
                                          <a
                                            href={AddLang(
                                              value.link,
                                              props.lang
                                            )}
                                            {...getVideoData(value.link)}
                                          >
                                            {value.label}
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                  </div>
                );
              })}

              <div className="illustrations">
                {props.menuItems[0] &&
                  props.menuItems[0].subitems &&
                  props.menuItems[0].subitems.illustrations &&
                  props.menuItems[0].subitems.illustrations.map(
                    (value, index) => {
                      return (
                        <Image
                          key={index}
                          src={value}
                          className={"illu-" + index}
                        ></Image>
                      );
                    }
                  )}
              </div>
              {props.ctaButton && props.ctaButton.url && props.ctaButton.text && (
                <div className="btn-wrap">
                  <Button
                    className="btn-dark"
                    lang={props.lang}
                    href={props.ctaButton.url}
                  >
                    {props.ctaButton.text}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
