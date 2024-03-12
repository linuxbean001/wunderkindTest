import React from "react";
import useMarketo from "utils/useMarketo";
import Cookies from "universal-cookie";
import "./_CampaignForm.scss";

function CampaignForm(props) {
  const {
    formId,
    marketoFormTitle,
    marketoFormSubtitle,
    custom,
    submissionMessage,
  } = props;
  const cookies = new Cookies();

  let successMessage = "Thank you!";
  if (custom) {
    successMessage = "Thanks! We'll be in touch shortly.";
  }
  if (submissionMessage) {
    successMessage = submissionMessage;
  }
  useMarketo({
    baseUrl: "https://app-ab09.marketo.com",
    munchkinId: "445-FJV-353",
    formId: formId,
    callback: form => {
      var newWindow;
      if (!custom) {
        form.onSubmit(function() {
          newWindow = window.open();
        });
      }

      //Add an onSuccess handler
      form.onSuccess(function(values, followUpUrl) {
        // Get the form's jQuery element and hide it
        form.getFormElem().hide();
        document.getElementsByClassName("js-success-message")[0].style.display =
          "block";
        if (custom) {
          document.getElementsByClassName(
            "js-success-message"
          )[0].style.marginTop = "25px";
        }
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
      utm_source: cookies.get("utm_source"),
      utm_medium: cookies.get("utm_medium"),
      utm_campaign: cookies.get("utm_campaign"),
      utm_content: cookies.get("utm_content"),
      gclid: cookies.get("gclid"),
    },
  });

  return (
    <div className="download-form">
      <div className="download-form-header">
        {marketoFormTitle && (
          <div className="download-form-title">{marketoFormTitle}</div>
        )}
        {marketoFormSubtitle && (
          <p
            className="download-form-subtitle"
            dangerouslySetInnerHTML={{ __html: marketoFormSubtitle }}
          ></p>
        )}
        <div
          className="js-success-message download-form-title"
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{ __html: successMessage }}
        ></div>
      </div>
      <form id={`mktoForm_${formId}`}>
        <input type="hidden" id="custId" name="custId" value="3487" />
      </form>
    </div>
  );
}

export default CampaignForm;
