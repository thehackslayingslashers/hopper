import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

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
