import React, { Component } from 'react';
import { fetchStream, updateStream } from '../../store/actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
class StreamEdit extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      onFetchStream,
    } = this.props;

    onFetchStream(id);
  }
  onSubmit = (formValues) => {
    this.props.onUpdateStream(this.props.match.params.id, formValues);
  };

  render() {
    // console.log(this.props);
    console.log(this.props);
    return (
      <div>
        <h3>Update a Stream</h3>
        <StreamForm
          initialValues={
            this.props.stream && { 
              title: this.props.stream.title,
              description: this.props.stream.description,
            }
          }
          onsubmit={this.onSubmit}
        />
        {/* {this.props.stream && this.props.stream.title} */}
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
    onFetchStream: (id) => dispatch(fetchStream(id)),
    onUpdateStream: (id, updatedValues) =>
      dispatch(updateStream(id, updatedValues)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
