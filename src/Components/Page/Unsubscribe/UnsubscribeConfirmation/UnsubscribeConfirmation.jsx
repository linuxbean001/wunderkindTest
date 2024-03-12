import React from "react";
import "./_UnsubscribeConfirmation.scss";

function UnsubscribeConfirmation(props) {
    let successMessage = "Your email preferences have been successfully updated..";
    return (
        <div className="unsubscribe-confirmation">
                <div className="unsubscribe-success-info">
                    <div
                        className="js-success-message unsubscribe-success-message"
                        dangerouslySetInnerHTML={{__html: successMessage}}>
                    </div>
                    <div className="unsubscribe-success-action">
                        Want to make changes? You can return to the <a
                        href={"/unsubscribe/"}>email preference center here</a>
                    </div>
                </div>
        </div>
    );
}

export default UnsubscribeConfirmation;
