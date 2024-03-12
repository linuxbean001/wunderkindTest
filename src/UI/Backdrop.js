import React, { useEffect } from "react";

const Backdrop = props => {
  const { onClose, bdStyle } = props;

  useEffect(() => {}, [bdStyle]);

  return <div className={`${bdStyle} backdrop`} onClick={onClose}></div>;
};

export default Backdrop;
