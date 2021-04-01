import React from 'react';
import Modal from '../Modal';
import history from '../../history';
const StreamDelete = () => {
  onclick = () => {
    history.push('/');
  };
  return (
    <div>
      StreamDelete
      <Modal
        onclick={onclick}
        header="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actionProceed="Delete"
        actionCancelled="Cancel"
      />
    </div>
  );
};

export default StreamDelete;
