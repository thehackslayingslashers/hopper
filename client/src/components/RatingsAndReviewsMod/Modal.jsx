import React from 'react';

const Modal = (props) => {
  const { content, closeModal } = props;
  return (
    <div className="reviewModalOutter">
      <div className="reviewModalInner">
          {content}
          <div className="modalButton" onClick={closeModal}>Close</div>
      </div>
    </div>
  );
};

export default Modal;
