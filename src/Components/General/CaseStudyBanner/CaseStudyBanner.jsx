import React from "react";
import './_CaseStudyBanner.scss'
import Button from "../../Button/Button";

export const CaseStudyBanner = (props) => {
    const { backgroundImg, title, buttonLabel, buttonUrl, img } = props;
    const backgroundSrc = backgroundImg ? backgroundImg : "/images/patterns/pattern-20.png";
    const buttonTitle = buttonLabel ? buttonLabel : "Get Started";
    const buttonHref = buttonUrl ? buttonUrl : "/resources/get-a-demo/";
    const imgSrc = img ? img : "/images/illustrations/wk-case-study-banner.png"
    const bannerTitle = title ? title : "See how much additional revenue we can make for you, backed by a guarantee."
    return (
        <div className="case-study-banner" style={{ backgroundImage: "url(" + backgroundSrc + ")" }}>
            <div className="banner-content">
                <div className="container banner-container">
                    <div className="banner-cta">
                        <h3>{bannerTitle}</h3>
                        <Button className={"banner-button"} href={buttonHref}>{buttonTitle}</Button>
                    </div>
                    <div className="banner-img">
                        {imgSrc !== undefined && <img src={imgSrc} />}
                    </div>
                </div>
            </div>
        </div>
    );
}