import React from "react";

import { Parallax } from "react-scroll-parallax";

import "./_ClientReferralParticipate.scss";

import Image from "Components/Image/Image";
import Button from "Components/Button/Button";
import Divider from "../Divider/Divider";

class ClientReferralParticipate extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.bgColor =
            this.props.bgColor !== undefined ? this.props.bgColor : "#ffbb00";
        this.className =
            this.props.className !== undefined ? " " + this.props.className : "";
        this.sectionClass = "plx-client-referral-participate " + this.className;
        this.sectionClass += this.props.dark ? " dark" : "";
        this.maskColor =
            this.props.maskColor !== undefined ? this.props.maskColor : "#191919";
        this.divider = (
            <Divider
                className={"invert-mask-" + this.className}
                invert={true}
                maskColor={this.bgColor}
            />
            );
    }

    render() {
        // Don't render empty component
        if (!this.props.content.title && !this.props.content.subtitle) {
            return <></>;
        }

        let container = (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-md-7 col-sm-7 col-xs-10">
                        <h1
                            className="title"
                            dangerouslySetInnerHTML={{ __html: this.props.content.title }}
                        ></h1>
                        <div
                            className="subtitle"
                            dangerouslySetInnerHTML={{ __html: this.props.content.subtitle }}
                        ></div>
                        <div className="btn-wrap">
                            <Button
                                scrollTo={true}
                                className={"btn-fill-dark"}
                                lang={this.props.lang}
                                scrollToElement={"client-referral-marketo-form-section"}
                            >
                                {this.props.content.button.label}
                            </Button>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-5 col-sm-5 illu-img">
                        {this.props.content.image && (
                            <Image src={this.props.content.image}></Image>
                        )}
                    </div>
                </div>
            </div>
        );

        container = this.props.hasParallax ? (
            <Parallax y={[-20, 80]}> {container} </Parallax>
        ) : (
            container
        );

        return (
            <>
                <section
                    ref={this.ref}
                    className={`${this.sectionClass} ${
                        this.props.disableParallax ? "rq-no-parallax" : ""
                    }`}
                    style={{
                        backgroundColor: this.bgColor,
                    }}
                >
                    <div className="client-referral-participate-wrap">
                        <div className="client-referral-participate">{container}</div>
                    </div>
                </section>
            </>
        );
    }
}

export default ClientReferralParticipate;
