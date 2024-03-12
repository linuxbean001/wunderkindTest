import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop";
import ModalOverlay from "../UI/ModalOverlay";

let portalElement = null;

if (typeof window !== "undefined") {
  portalElement = document.getElementById("overlays");
}

const Modal = props => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      portalElement = document.getElementById("overlays");
    }
  }, [portalElement]);

  const { onClose, children, isCentered } = props;
  return (
    <Fragment>
      {portalElement && (
        <div>
          {ReactDOM.createPortal(
            <Backdrop bdStyle={props.sfStyle} onClose={onClose} />,
            portalElement
          )}
          {ReactDOM.createPortal(
            <ModalOverlay moStyle={props.sfStyle} isCentered={isCentered}>
              {children}
            </ModalOverlay>,
            portalElement
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
