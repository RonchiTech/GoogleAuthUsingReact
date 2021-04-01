import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={props.onDismissHandler}
    >
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">
          <button className="ui negative button" onClick={props.onProceed}>{props.actionProceed}</button>
          <button className="ui button" onClick={props.onDismissHandler}>
            {props.actionCancelled}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};
// Modal.defaultProps = {
//   header: 'Delete Stream',
//   content: 'Are you sure you want to delete this stream?',
// };
export default Modal;
