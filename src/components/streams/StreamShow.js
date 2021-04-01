import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../store/actions';
class StreamShow extends Component {
  componentDidMount() {
    this.props.onFetch(this.props.match.params.id);
  }
  render() {
    const { stream } = this.props;
    return (
      <div>
        StreamShow
        {stream && (
          <React.Fragment>
            <h1>{stream.title}</h1>
            <h3>{stream.description}</h3>
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: (id) => dispatch(fetchStream(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
