import React, {useEffect, useRef, useState} from "react";
import "./styles.scss";

function AdsComponent(props) {

  const [hoverCard, setHoverCard] = useState(false);
  const [hoverCard2, setHoverCard2] = useState(false);
  const [hoverCard3, setHoverCard3] = useState(false);
  const [hoverCard4, setHoverCard4] = useState(false);
  const [hoverCard5, setHoverCard5] = useState(false);
  const [hoverCard6, setHoverCard6] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  const item6Ref = useRef();
  const itemsContainerRef = useRef();

  function relativeCoords ( event ) {
    const bounds = itemsContainerRef.current.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    setMouseX(x);
  }


  const handleMouseOver = () => {
    setHoverCard(true)
  }

  const handleMouseOut = () => {
    setHoverCard(false)
  }
  const handleMouseOver2 = () => {
    setHoverCard2(true)
  }

  const handleMouseOut2 = () => {
    setHoverCard2(false)
  }
  const handleMouseOver3 = () => {
    setHoverCard3(true)
  }

  const handleMouseOut3 = () => {
    setHoverCard3(false)
  }
  const handleMouseOver4 = () => {
    setHoverCard4(true)
  }
  const handleMouseOut4 = () => {
    setHoverCard4(false)
  }

  const handleMouseOut5 = () => {
    setHoverCard5(false)
  }
  const handleMouseOver5 = () => {
    setHoverCard5(true)
  }

  const handleMouseOut6 = async() => {
    await setHoverCard6(false)
  }
  const handleMouseOver6 = async() => {
    await setHoverCard6(true);
  }

  function scrollLeft(element, total, duration) {
    const start = element.scrollLeft;
    let currentTime = 0;
    let increment = 20;

    const animateScroll = function(){
      currentTime += increment;
      let change;
      let left;
      if(total > start) {
        change = total - start;
        left = true
      } else {
        change = start - total;
        left =false;
      }
      var val = Math.easeInOutQuad(currentTime, start, change, duration, left);
      element.scrollLeft = val;
      if(currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

//t = current time
//b = start value
//c = change in value
//d = duration
  Math.easeInOutQuad = function (t, b, c, d, e) {
    t /= d/2;
    if (t < 1){
      if(e) {
        return c/2*t*t + b;
      } else {
        return b - (c/2*t*t);
      }
    }
    t--;
    if(e) {
      return -c/2 * (t*(t-2) - 1) + b;
    } else {
      return b - (-c/2 * (t*(t-2) - 1));
    }
  };

  useEffect(() => {
    let scrollValue = 0;
    if(hoverCard2) {
      if(mouseX < 500) {
        scrollValue = 160;
      } else {
        scrollValue = 120;
      }
    }
    if(hoverCard3) {
      if(mouseX < 500) {
        scrollValue = 270;
      } else {
        scrollValue = 180;
      }
    }
    if(hoverCard4) {
      if(mouseX < 500) {
        scrollValue = 480;
      } else {
        scrollValue = 240;
      }
    }
    if(hoverCard5) {
      if(mouseX < 500) {
        scrollValue = 850;
      } else {
        scrollValue = 380;
      }
    }
    if(hoverCard6) {
      scrollValue = 850;
    }
    if(hoverCard || hoverCard2 || hoverCard3 || hoverCard4 || hoverCard5 || hoverCard6) {
      setTimeout(() => {
        scrollLeft(itemsContainerRef.current, scrollValue, 500);
      }, 500);
    }
  }, [hoverCard, hoverCard2, hoverCard3, hoverCard4, hoverCard5, hoverCard6])

  return (
    <div ref={itemsContainerRef} onMouseMove={relativeCoords} className="performance-marketing-container">
      <div className="performance-marketing-flex-container">

        <div className="performance-marketing-card-container">
          <div className={`performance-marketing-card ${hoverCard ? "hover" : ""}`}
               onMouseEnter={handleMouseOver}
               onMouseLeave={handleMouseOut}
               style={{backgroundColor: '#25B8D9'}}
          >
            {hoverCard ?
              <img className="performance-marketing-card-plus-remove" src={"/images/how-it-works/plus.png"} alt="plus sign" />:
              <img className="performance-marketing-card-plus" src={"/images/how-it-works/plus.png"} onClick={() => handleMouseOver()} alt="plus sign" />
            }
            <div className={`performance-marketing-image-overlay ${hoverCard ? "hovered" : ""}`}></div>
            <div className={`performance-marketing-card-pattern ${!hoverCard ? "pattern1" : "pattern1-big"}`} />
            {!hoverCard && <h6 className="performance-marketing-card-category">{"Exit intent"}</h6>}
            {hoverCard && (
              <>
                <span className={"card-arrow-right"}>
                  <img src={"/images/how-it-works/close.svg"} onClick={() => handleMouseOut()} />
                </span>
                <h2 className="performance-marketing-card-header">{"Exit intent"}</h2>
                <h6 className="performance-marketing-card-description">{"When a user’s cursor crosses over the browser plane (desktop) or their finger touches down on the URL window (mobile) to leave the site."}</h6>
              </>
            )}
            <div className={`main-image ${hoverCard ? "hovered" : ""}`}>
              <img src={"/images/how-it-works/adds-laptop.png"} />
            </div>
            {hoverCard && <div className={`main-gif ${hoverCard ? "hovered" : ""}`}>
              <img src={"/images/how-it-works/Exit_Intent_500x307.gif"}/>
            </div>}
          </div>
          <div className={`performance-marketing-card ${hoverCard2 ? "hover" : ""}`}
               onMouseEnter={handleMouseOver2}
               onMouseLeave={handleMouseOut2}
               style={{backgroundColor: '#000000'}}
          >
            {!hoverCard2 && <h6 className="performance-marketing-card-category">{"Up-scroll"}</h6>}
            {hoverCard2 ?
              <img className="performance-marketing-card-plus-remove" src={"/images/how-it-works/plus.png"} alt="plus sign" />:
              <img className="performance-marketing-card-plus" src={"/images/how-it-works/plus.png"} onClick={() => handleMouseOver2()} alt="plus sign" />
            }
            <div className={`performance-marketing-image-overlay ${hoverCard2 ? "hovered" : ""}`}></div>
            <div className={`performance-marketing-card-pattern ${!hoverCard2 ? "pattern2" : "pattern2-big"}`} />
            {hoverCard2 && (
              <>
                <a className={"card-arrow-right"}>
                  <img src={"/images/how-it-works/close.svg"} onClick={() => handleMouseOut2()}/>
                </a>
                <h2 className="performance-marketing-card-header">{"Up-scroll"}</h2>
                <h6 className="performance-marketing-card-description">{"When a user scrolls significantly below the fold and then all the way back to the top of the page."}</h6>
              </>
            )}
            <div className={`main-image main-image-mobile ${hoverCard2 ? "hovered" : ""}`}>
              <img src={"/images/how-it-works/adds-mobile.png"} />
            </div>
            <div className={`main-gif main-gif-mobile ${hoverCard2 ? "hovered" : ""}`}>
              <img src={"/images/how-it-works/Up_scroll_200x430.gif"}/>
            </div>
          </div>
          <div className={`performance-marketing-card ${hoverCard3 ? "hover" : ""}`}
               onMouseEnter={handleMouseOver3}
               onMouseLeave={handleMouseOut3}
               style={{backgroundColor: '#303C78'}}
          >
            {!hoverCard3 && <h6 className="performance-marketing-card-category">{"Refocus"}</h6>}
            {hoverCard3 ?
              <img className="performance-marketing-card-plus-remove" src={"/images/how-it-works/plus.png"} alt="plus sign" />:
              <img className="performance-marketing-card-plus" src={"/images/how-it-works/plus.png"} onClick={() => handleMouseOver3()} alt="plus sign" />
            }
            <div className={`performance-marketing-image-overlay ${hoverCard3 ? "hovered" : ""}`}></div>
            <div className={`performance-marketing-card-pattern ${!hoverCard3 ? "pattern3" : "pattern3-big"}`} />
            {hoverCard3 && (
              <>
                <a className={"card-arrow-right"}>
                  <img src={"/images/how-it-works/close.svg"} onClick={() => handleMouseOut3()} />
                </a>
                <h2 className="performance-marketing-card-header">{"Refocus"}</h2>
                <h6 className="performance-marketing-card-description">{"When a user is inactive for 10 seconds and then scrolls away or moves their cursor away from content."}</h6>
              </>
            )}
            <div className={`main-image ${hoverCard3 ? "hovered" : ""}`}>
              <img src={"/images/how-it-works/adds-laptop.png"} />
            </div>
            {hoverCard3 && <div className={`main-gif ${hoverCard3 ? "hovered" : ""}`}>
              <img src={"/images/how-it-works/Refocus_500x307.gif"}/>
            </div>}
          </div>
          <div className={`performance-marketing-card ${hoverCard4 ? "hover" : ""}`}
               onMouseEnter={handleMouseOver4}
               onMouseLeave={handleMouseOut4}
               style={{backgroundColor: '#FF4133'}}
          >
            {!hoverCard4 && <h6 className="performance-marketing-card-category">{"Inactivity"}</h6>}
            {hoverCard4 ?
              <img className="performance-marketing-card-plus-remove" src={"/images/how-it-works/plus.png"} alt="plus sign" />:
              <img className="performance-marketing-card-plus" src={"/images/how-it-works/plus.png"} onClick={() => handleMouseOver4()} alt="plus sign" />
            }
            <div className={`performance-marketing-image-overlay ${hoverCard4 ? "hovered" : ""}`}></div>
            <div className={`performance-marketing-card-pattern ${!hoverCard4 ? "pattern4" : "pattern4-big"}`} />
            {hoverCard4 && (
              <>
                <a className={"card-arrow-right"}>
                  <img src={"/images/how-it-works/close.svg"} onClick={() => handleMouseOut4()} />
                </a>
                <h2 className="performance-marketing-card-header">{"Inactivity"}</h2>
                <h6 className="performance-marketing-card-description">{"When a user is inactive on a publisher’s site for a full 30 seconds before becoming active on the page again."}</h6>
              </>
            )}
            <div className={`main-image main-image-mobile ${hoverCard4 ? "hovered" : ""}`}>
              <img src={"/images/how-it-works/adds-mobile.png"} />
            </div>
            <div className={`main-gif main-gif-mobile ${hoverCard4 ? "hovered" : "static"}`}>
              <img src={"/images/how-it-works/Inactivity-wireframe-mobile.png"}/>
            </div>
          </div>


          <div className={`performance-marketing-card ${hoverCard5 ? "hover" : ""}`}
               onMouseEnter={handleMouseOver5}
               onMouseLeave={handleMouseOut5}
               style={{backgroundColor: '#25B8D9'}}
          >
            {!hoverCard5 && <h6 className="performance-marketing-card-category">{"Downscroll"}</h6>}
            {hoverCard5 ?
              <img className="performance-marketing-card-plus-remove" src={"/images/how-it-works/plus.png"} alt="plus sign" />:
              <img className="performance-marketing-card-plus" src={"/images/how-it-works/plus.png"} onClick={() => handleMouseOver5()} alt="plus sign" />
            }
            <div className={`performance-marketing-image-overlay ${hoverCard5 ? "hovered" : ""}`}></div>
            <div className={`performance-marketing-card-pattern ${!hoverCard5 ? "pattern5" : "pattern5-big"}`} />

            {hoverCard5 && (
              <>
                <a className={"card-arrow-right"}>
                  <img src={"/images/how-it-works/close.svg"} onClick={() => handleMouseOut5()} />
                </a>
                <h2 className="performance-marketing-card-header">{"Downscroll"}</h2>
                <h6 className="performance-marketing-card-description">{"When a user scrolls all the way to the bottom of a finite-scroll page."}</h6>
              </>
            )}
            <div className={`main-image ${hoverCard5 ? "hovered" : ""}`}>
              <img src={"/images/how-it-works/adds-laptop.png"} />
            </div>
            <div className={`main-gif ${hoverCard5 ? "hovered" : "static"}`}>
              <img src={"/images/how-it-works/Downscroll-wireframe-desktop.png"}/>
            </div>
          </div>
          <div className={`performance-marketing-card ${hoverCard6 ? "hover" : ""}`}
               ref={item6Ref}
               onMouseEnter={handleMouseOver6}
               onMouseLeave={handleMouseOut6}
               style={{backgroundColor: '#FFBB00'}}
          >
            {!hoverCard6 && <h6 className="performance-marketing-card-category">{"Reactivity"}</h6>}
            {hoverCard6 ?
              <img className="performance-marketing-card-plus-remove" src={"/images/how-it-works/plus.png"} alt="plus sign" />:
              <img className="performance-marketing-card-plus" src={"/images/how-it-works/plus.png"} onClick={() => handleMouseOver6()} alt="plus sign" />
            }
            <div className={`performance-marketing-image-overlay ${hoverCard6 ? "hovered" : ""}`}></div>
            <div className={`performance-marketing-card-pattern ${!hoverCard6 ? "pattern6" : "pattern6-big"}`} />
            {hoverCard6 && (
              <>
                <a className={"card-arrow-right"}>
                  <img src={"/images/how-it-works/close.svg"} onClick={() => handleMouseOut6()} />
                </a>
                <h2 className="performance-marketing-card-header">{"Reactivity"}</h2>
                <h6 className="performance-marketing-card-description">{"When a user switches tabs for at least 10 seconds and then returns to their original tab."}</h6>

              </>
            )}
            <div className={`main-image main-image-mobile ${hoverCard6 ? "hovered" : ""}`}>
              <img src={"/images/how-it-works/adds-mobile.png"} />
            </div>
            <div className={`main-gif main-gif-mobile ${hoverCard6 ? "hovered" : "static"}`}>
              <img src={"/images/how-it-works/Reactivity-wireframe-mobile.png"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default AdsComponent;
