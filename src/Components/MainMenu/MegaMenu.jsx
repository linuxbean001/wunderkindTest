import React from "react";
import equal from "fast-deep-equal";

import Image from "../Image/Image";

import "./_MegaMenu.scss";

class MegaMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menuItem: null,
    };
  }

  componentDidUpdate(prevState) {
    if (!equal(this.props.menuItem, prevState.menuItem)) {
      try {
        if (
          this.menuItem !== null &&
          this.props.menuItem.subitems !== null &&
          this.props.menuItem.subitems !== undefined
        ) {
          this.setState({
            showMenu: this.props.showMenu,
            menuItem: this.props.menuItem,
          });
        } else {
          this.setState({
            showMenu: false,
            menuItem: null,
          });
        }
      } catch (err) {
        this.setState({
          showMenu: false,
          menuItem: null,
        });
      }
    }
  }

  leftTrim(string) {
    return string.replace(/^\/+/, "");
  }

  addLang(url) {
    if (
      !(
        url.indexOf("http://") === 0 ||
        url.indexOf("https://") === 0 ||
        url.indexOf("#") === 0
      )
    ) {
      url = this.props.lang === "uk" ? "/uk/" + this.leftTrim(url) : url;
    }
    return url;
  }

  parseVideo(url) {
    // - Supported YouTube URL formats:
    //   - http://www.youtube.com/watch?v=My2FRPA3Gf8
    //   - http://youtu.be/My2FRPA3Gf8
    //   - https://youtube.googleapis.com/v/My2FRPA3Gf8
    // - Supported Vimeo URL formats:
    //   - http://vimeo.com/25451551
    //   - http://player.vimeo.com/video/25451551
    // - Also supports relative URLs:
    //   - //player.vimeo.com/video/25451551

    url.match(
      /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
    );

    if (RegExp.$3.indexOf("youtu") > -1) {
      var type = "youtube";
    } else if (RegExp.$3.indexOf("vimeo") > -1) {
      var type = "vimeo";
    }

    return {
      type: type,
      id: RegExp.$6,
    };
  }

  getVideoData(url) {
    if (url) {
      const videoType = this.parseVideo(url);
      const videoProps =
        typeof videoType.type !== "undefined"
          ? { videotype: videoType.type, videoid: videoType.id }
          : {};

      return videoProps;
    }

    return {};
  }

  render() {
    return (
      <div
        role={`navigation`}
        onMouseLeave={() => this.props.mouseLeaveHandler(false)}
        style={{
          opacity:
            this.state.showMenu !== null && this.state.showMenu ? "1" : "0",
          visibility:
            this.state.showMenu !== null && this.state.showMenu
              ? "visible"
              : "hidden",
        }}
        className={"mega-menu"}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="illustrations">
                {this.state.showMenu &&
                  this.state.menuItem.subitems &&
                  this.state.menuItem.subitems.illustrations &&
                  this.state.menuItem.subitems.illustrations.map(
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
            </div>
            <div className="col-lg-6 offset-lg-1">
              {this.state.showMenu && (
                <div className="mm-submenu-row row">
                  {this.state.menuItem.subitems.items.map((value, index) => {
                    return (
                      <div key={index} className="col-md-6">
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
                                  href={this.addLang(value.link)}
                                  {...this.getVideoData(value.link)}
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
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MegaMenu;
