import React, {useState} from "react";
import "./styles.scss";
import Button from '../../../Button/Button';
import Quote from '../../HowItWorks/Quote';

function LogosSection(props) {
  return (
    <section
      className={
        "how-it-works-ads-logos-section"
      }
    >
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-7 hiw-title-container"}>
            <h1>{"A respectful and brand-safe user experience is at the heart of everything we do."}</h1>
          </div>
          <div className={"col-lg-5 big-image"}>
            <img src={"/images/how-it-works/Artist-w-Innovator.png"} />
          </div>
        </div>
        <div className={"row hiw-ads-ul-wrapper"}>
          <div className={"col-lg-6"}>
            <h4>{"For Advertisers:"}</h4>
            <ul>
              <li><strong>Exclusive Publisher Inventory:</strong> Access 300+ top publishing partners in Wunderkind’s premium marketplace.</li>
              <li><strong>Qualified Engagement:</strong> Emphasize UX to garner true qualified engagement with ad messaging.</li>
            </ul>
          </div>
          <div className={"col-lg-6"}>
            <h4>{"For Publishers:"}</h4>
            <ul>
              <li><strong>Unique Premium Demand:</strong> We work directly with media buyers across 200+ brands to deliver on their goals.</li>
              <li><strong>Impactful CPMs:</strong> Advertisers bid more for our top performance, allowing us to deliver higher CPMs to publishers to drive increased revenue.</li>
            </ul>
          </div>
        </div>
        <div className={"flex flex-wrap all-logos-wrapper justify-center align-items-center"}>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo1.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo2.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo3.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo4.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo5.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo6.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo7.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo8.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo9.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo10.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo11.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo12.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo13.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo14.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo15.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo16.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo17.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo18.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo19.png"} />
          </div>
          <div className={"hiw-ads-logo"}>
            <img src={"/images/how-it-works/logos/logo20.png"} />
          </div>
        </div>
        <div className={"flex justify-content-center footer"}>
          <div>We’ve built a marketplace of <span>200+</span> premium brands and <span>300+</span> top publishers who recognize the importance of a user-first ad experience.</div>
        </div>
        <div className={"flex justify-content-center footer"}>
          <Button href={"/resources/get-started/"}>{"Get Started"}</Button>
        </div>
      </div>
    </section>
  );

}

export default LogosSection;
