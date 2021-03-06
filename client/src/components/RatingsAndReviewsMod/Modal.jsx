import React from 'react';

const Modal = (props) => {
  const { content, closeModal } = props;
  return (
    <div className="modal">
      <div className="modal-box">
          {content}
          <div className="modal-button" onClick={closeModal}>Close</div>
      </div>
    </div>
  );
};

export default Modal;
