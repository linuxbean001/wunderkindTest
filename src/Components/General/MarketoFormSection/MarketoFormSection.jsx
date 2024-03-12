import React from "react";
import Image from "Components/Image/Image";
import "./_MarketoFormSection.scss";
import Divider from "../Divider/Divider";
import DownloadForm from "../../Page/Resources/DownloadForm/DownloadForm";

class MarketoFormSection extends React.Component {
    render() {
        return (
            <>
                <section
                    className={
                        "marketo-form-section" +
                        (this.props.className ? " " + this.props.className : "")
                    }
                >
                    <div className="background-title-wrap">
                        <div className="container">
                            <div className="col-lg-8">
                                <h3 className="background-title">{this.props.title}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-lg-8">
                            <div dangerouslySetInnerHTML={{__html: this.props.copy}}></div>
                        </div>
                    </div>
                    <div className="container marketo-form-container">
                        <div className="col-lg-8">
                            <div className="marketo-form">
                                <DownloadForm custom={true} submissionMessage={this.props.submissionMessage}
                                              formId={this.props.formId}/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
};

export default MarketoFormSection;
