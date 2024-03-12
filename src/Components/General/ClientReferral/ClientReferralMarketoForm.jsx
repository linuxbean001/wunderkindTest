import React from "react";
import useMarketo from "utils/useMarketo";
import Cookies from "universal-cookie";
import './_ClientReferralMarketoForm.scss'

function ClientReferralMarketoForm(props) {
    const {formId, marketoFormTitle, marketoFormSubtitle} = props;
    const cookies = new Cookies();

    useMarketo({
        baseUrl: "https://app-ab09.marketo.com",
        munchkinId: "445-FJV-353",
        formId: formId,
        callback: form => {
            var newWindow;
            form.onSubmit(function () {
                newWindow = window.open();
            });


            //Add an onSuccess handler
            form.onSuccess(function (values, followUpUrl) {
                // custom effects for after posting form
                if (followUpUrl && followUpUrl.indexOf("?aliId") === -1) {
                    if (!newWindow) {
                        window.location.href = followUpUrl;
                    } else {
                        newWindow.location.href = followUpUrl;
                    }
                }
                // Return false to prevent the submission handler from taking the lead to the follow up url
                return false;
            });
        },
        hiddenFields: {
            utm_source: cookies.get('utm_source'),
            utm_medium: cookies.get('utm_medium'),
            utm_campaign: cookies.get('utm_campaign'),
            utm_content: cookies.get('utm_content'),
            gclid: cookies.get('gclid')
        }
    });

    return (
        <div className="client-referral-form">
            <div className="client-referral-form-header">
                {marketoFormTitle && (
                    <div className="client-referral-form-title">{marketoFormTitle}</div>
                )}
                {marketoFormSubtitle && (
                    <p
                        className="client-referral-form-subtitle"
                        dangerouslySetInnerHTML={{__html: marketoFormSubtitle}}
                    ></p>
                )}
            </div>
            <form id={`mktoForm_${formId}`}>
                <input type="hidden" id="custId" name="custId" value="3487"/>
            </form>
            <a className={"policy-link"} href={"/client-referral-terms/"}>Terms & Conditions</a>
        </div>
    );
}

export default ClientReferralMarketoForm;
