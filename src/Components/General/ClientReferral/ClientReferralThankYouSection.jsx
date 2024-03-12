import React from "react";
import './_ClientReferralThankYouSection.scss';

function ClientReferralThankYouSection(props) {
    const {
        bodyCopy
    } = props;
    return (
        <>
            <section
                className={'client-referral-thank-you-section'}
                style={{
                    backgroundColor: '#3D55CC',
                }}
            >
                <div className="client-referral-thank-you-wrap">
                    <div className="client-referral-thank-you container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div dangerouslySetInnerHTML={{ __html: bodyCopy }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ClientReferralThankYouSection;
