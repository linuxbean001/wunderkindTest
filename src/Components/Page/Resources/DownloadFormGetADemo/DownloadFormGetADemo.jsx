import React from "react";
import useMarketo from "utils/useMarketo";
import Cookies from "universal-cookie";
import "./_DownloadFormGetADemo.scss";

function DownloadForm(props) {
  const { formId, marketoFormTitle, marketoFormSubtitle, custom, submissionMessage } = props;
  const cookies = new Cookies();

  let successMessage = "Thanks! Enjoy the content.";
  if(custom){
    successMessage = "Thanks! We'll be in touch shortly.";
  }
  if(submissionMessage) {
    successMessage = submissionMessage;
  }
  useMarketo({
    baseUrl: "https://app-ab09.marketo.com",
    munchkinId: "445-FJV-353",
    formId: formId,
    hiddenFields: {
      utm_source: cookies.get('utm_source'),
      utm_medium: cookies.get('utm_medium'),
      utm_campaign: cookies.get('utm_campaign'),
      utm_content: cookies.get('utm_content'),
      gclid: cookies.get('gclid')
    } 
  });

  return (
    <div className="download-form-get-a-demo">
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
        >
        </div>
      </div>
      <form id={`mktoForm_${formId}`}>
        <input type="hidden" id="custId" name="custId" value="3487" />
      </form>
    </div>
  );
}

export default DownloadForm;
