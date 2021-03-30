import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/';
import StreamForm from './StreamForm';
//npm install redux-form --legacy-peer-deps
class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.onCreateStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        {/* <StreamForm onsubmit={this.onSubmit} /> */}
        <StreamForm onsubmit={(value)=>this.onSubmit(value)} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateStream: (formData) => dispatch(action.createStream(formData)),
  };
};
// export default connect()(reduxForm({
//   form: 'streamCreate',
//   validate,
// })(StreamCreate));

export default connect(null, mapDispatchToProps)(StreamCreate);
