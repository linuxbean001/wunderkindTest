import React from "react";
import Image from "Components/Image/Image";
import "./_LogoTable.scss";
import Plx from "react-plx";
import {ParallaxProvider} from "react-scroll-parallax";

const renderLogos = logos => {
    return logos.map(logo => {
        return (
            <div className="col-lg-3 logo-image align-content-center justify-content-center">
                <Image src={logo.logo.sourceUrl}/>
            </div>
        );
    });
}

class LogoTable extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.bigTitle = "";

        this.state = {};
    }

    componentDidMount() {
        let windowWidth = window.innerWidth;

        if (windowWidth < 768) {

            this.setState({
                moveParagraph: [
                    {
                        start: this.ref.current,
                        duration: "480vh",
                        startOffset: "-60vh",
                        properties: [
                            {
                                startValue: 15,
                                endValue: -20,
                                unit: "rem",
                                property: "translateY",
                            },
                        ],
                    },
                ],
            });
        } else if (windowWidth >= 768 && windowWidth < 1025) {
            this.setState({
                moveParagraph: [
                    {
                        start: this.ref.current,
                        duration: "480vh",
                        startOffset: "60vh",
                        properties: [
                            {
                                startValue: 5,
                                endValue: -30,
                                unit: "rem",
                                property: "translateY",
                            },
                        ],
                    },
                ],
            });
        } else {
            this.setState({
                moveParagraph: [
                    {
                        start: this.ref.current,
                        duration: "480vh",
                        startOffset: "-20vh",
                        properties: [
                            {
                                startValue: 15,
                                endValue: -50,
                                unit: "rem",
                                property: "translateY",
                            },
                        ],
                    },
                ],
            });
        }
    }

    renderContent = () => {
        return (
            <>
                <div className={"sub-title-wrap"}>
                    <div className={"container"}>
                        <div className="row align-items-end">
                            {this.props.subtitleImage && (
                                <div className="col-lg-5 col-md-5">
                                    <Image src={this.props.subtitleImage.sourceUrl}></Image>
                                </div>
                            )}
                            <div className={this.props.subtitleImage ? "col-xl-5 col-lg-6 col-md-7 col-sm-12" : "col-lg-9 col-md-9 col-sm-12"}>
                                <h4 className="subtitle">{this.props.subtitle}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-10">
                        {
                            renderLogos(this.props.logos)
                        }
                    </div>
                    <div className="col-lg-2"></div>
                    </div>
                </div>
            </>
        );
    }

    render() {
        return (
            <ParallaxProvider>
                <section
                    className={
                        "logo-table" +
                        (this.props.className ? " " + this.props.className : "")
                    }
                    style={{backgroundColor: this.props.bgColor}}
                >
                    <div className="background-title-wrap">
                        <div className="container">
                            <h3 className="background-title">{this.props.title}</h3>
                        </div>
                    </div>
                    {this.props.title ? <Plx
                        parallaxData={this.state.moveParagraph}
                        className="col-md-10 col-lg-10 order-1 order-md-2"
                    >
                        {this.renderContent()}
                    </Plx> : this.renderContent()}

                </section>
            </ParallaxProvider>
        );
    }
};

export default LogoTable;
