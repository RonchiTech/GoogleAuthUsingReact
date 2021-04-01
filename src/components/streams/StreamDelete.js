import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import {deleteStream} from '../../store/actions'
const StreamDelete = ({
  match: {
    params: { id },
  },
  onDelete,
}) => {
  const onDeleteStream = () => {
    onDelete(id);
  };
  return (
    <div>
      {console.log(id)}
      StreamDelete
      <Modal
        onDismissHandler={() => history.push('/')}
        header="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actionProceed="Delete"
        actionCancelled="Cancel"
        onProceed={onDeleteStream}
      />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deleteStream(id)),
  };
};
export default connect(null, mapDispatchToProps)(StreamDelete);
