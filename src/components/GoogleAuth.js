import React from 'react';
import { connect } from 'react-redux';
import * as action from '../store/actions';
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '239609994499-olc3gvfu5j70nfhnskvgistvt1j7dntg.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //this
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          //or this
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if (isSignedIn) {
      this.props.onSignInClick(this.auth.currentUser.get().getId());
    } else {
      this.props.onSignOutClick();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return;
    } else if (this.props.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={() => this.auth.signOut()}
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui red google button"
          onClick={() => this.auth.signIn()}
        >
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProp = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSignInClick: (id) => dispatch(action.signIn(id)),
    onSignOutClick: () => dispatch(action.signOut()),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(GoogleAuth);
