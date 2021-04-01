import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../store/actions';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.onFetchStream(this.props.match.params.id);
  }
  onDeleteStream = () => {
    this.props.onDelete(this.props.match.params.id);
  };

  renderInfo = () => {
    if (!this.props.stream) {
      return 'Loading...';
    }
    return `Are you sure you want to delete this stream with title:
    ${this.props.stream.title}`;
  };
  render() {
    return (
      <div>
        <Modal
          onDismissHandler={() => history.push('/')}
          header="Delete Stream"
          actionProceed="Delete"
          actionCancelled="Cancel"
          onProceed={this.onDeleteStream}
          streamInfo={this.renderInfo()}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deleteStream(id)),
    onFetchStream: (id) => dispatch(fetchStream(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
