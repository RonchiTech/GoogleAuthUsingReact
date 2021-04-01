import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={() => history.push('/')}
    >
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button" onClick={() => history.push('/')}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};
Modal.defaultProps = {
  header: 'Delete Stream',
  content: 'Are you sure you want to delete this stream?',
};
export default Modal;
