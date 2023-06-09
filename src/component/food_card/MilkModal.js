import React from "react";

const MilkModal = ({ children }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default MilkModal;
