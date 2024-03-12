import React from "react";
import ClientReferralMarketoForm from "./ClientReferralMarketoForm";
import "./_ClientReferralMarketoFormSection.scss";
import DownloadForm from "../../Page/Resources/DownloadForm/DownloadForm";

class ClientReferralMarketoFormSection extends React.Component {
    render() {
        return (
            <>
                <section
                    id={'client-referral-marketo-form-section'}
                    className={
                        "client-referral-marketo-form-section" +
                        (this.props.className ? " " + this.props.className : "")
                    }
                >
                    <div className="container">
                        <div className="title-wrap col-lg-7">
                            <h3 className="title">{this.props.title}</h3>
                        </div>
                    </div>
                    <div className="container marketo-form-container">
                        <div className="col-lg-8">
                            <div className="marketo-form">
                                <ClientReferralMarketoForm custom={true}
                                                           submissionMessage={this.props.submissionMessage}
                                                           formId={this.props.formId}/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
};

export default ClientReferralMarketoFormSection;
