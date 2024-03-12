import React from "react";
import "./_MainMenu.scss";
import { animateScroll } from "react-scroll";

class MobileMenuButtonSticky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: typeof window !== `undefined` ? window.scrollY : false,
    };
  }

  updateScrollPosition = scrollPos => {
    this.setState({
      scrollPosition: scrollPos,
    });
  };

  handleEvent = () => {
    if (this.innerWidth > 1025) {
      document.body.classList.remove("mob-open");
    }
  };

  componentDidMount() {
    const self = this;
    document
      .getElementById("mob-btn-sticky")
      .addEventListener("click", function(e) {
        e.stopPropagation();
        if (!document.body.classList.contains("mob-open")) {
          self.updateScrollPosition(window.scrollY);
          document.body.classList.add("mob-open");
          setTimeout(function() {
            document.body.classList.add("mob-open-overflow");
          }, 300);
        } else {
          document.body.classList.remove("mob-open");
          document.body.classList.remove("mob-open-overflow");
          animateScroll.scrollTo(self.state.scrollPosition, {
            duration: 0,
          });
        }
      });

    window.addEventListener("resize", this.handleEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleEvent);
  }
  render() {
    return (
      <button className="mob-btn-wrap" id="mob-btn-sticky">
        <span className="sr-only">Mobile button</span>
        <span></span>
      </button>
    );
  }
}

export default MobileMenuButtonSticky;
