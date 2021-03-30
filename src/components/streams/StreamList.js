import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../store/actions';
import { Link } from 'react-router-dom';
class StreamList extends Component {
  componentDidMount() {
    this.props.onFetch();
  }
  renderAdmin = (stream) => {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="ui button primary"
          >
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreateStreamBtn = () => {
    if (this.props.currentUserId) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div>{this.renderCreateStreamBtn()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.stream),
    currentUserId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => dispatch(fetchStreams()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
