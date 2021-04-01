import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const onClickHandler = () => {
    props.onclick();
  };
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => onClickHandler()}
    >
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">
          <button className="ui primary button">{props.actionProceed}</button>
          <button className="ui button" onClick={() => onClickHandler()}>
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
