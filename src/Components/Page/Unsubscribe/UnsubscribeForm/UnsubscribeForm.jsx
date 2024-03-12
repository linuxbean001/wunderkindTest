import React from "react";
import useMarketo from "utils/useMarketo";
import "./_UnsubscribeForm.scss";
import {AddLang} from "../../../../utils/addLang";

function UnsubscribeForm(props) {

    useMarketo({
        baseUrl: "https://app-ab09.marketo.com", munchkinId: "445-FJV-353", formId: "1829", callback: (form) => {
            //Add an onSuccess handler
            form.onSuccess(function (values, followUpUrl) {
                if (followUpUrl && followUpUrl.indexOf("?aliId") === -1) {
                    window.location.href = followUpUrl;
                }
                window.location.href = `${window.location.href}-confirmation`;
                // Return false to prevent the submission handler from taking the lead to the follow up url
                return false;
            });
            window.MktoForms2.whenReady(function (form) {
                const unsubscribeAllCheckbox = document.getElementById('Unsubscribed');
                const otherCheckboxes = document.querySelectorAll("input[type='checkbox']:not(#Unsubscribed)");
                unsubscribeAllCheckbox.onchange = function () {
                    if(unsubscribeAllCheckbox.checked) {
                        Array.from(otherCheckboxes).forEach((checkbox) => {
                            checkbox.checked = false;
                            checkbox.disabled = true;
                        });
                    } else {
                        Array.from(otherCheckboxes).forEach((checkbox) => {
                            checkbox.disabled = false;
                        });
                    }

                }

            });
        }
    });
    return (
        <div className="unsubscribe-form">
            <form autocomplete="off" id={`mktoForm_1829`}/>
        </div>
    );
}

export default UnsubscribeForm;
