import React from "react";
import ReactDOM from "react-dom";
import ModalInner from './modal-inner'

const JSX_MODAL = (
  <div className="ui dimmer modals visible active">  
    <div className="ui standard modal visible active">
      {content}
    </div>
  </div>
);


function Modal(props) {
  return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
}


export default Modal;