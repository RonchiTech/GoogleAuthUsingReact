import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  
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
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Loading...</div>;
    } else if (this.state.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={() => this.auth.signOut()}
        >
          <i className="google icon">Sign Out</i>
        </button>
      );
    } else {
      return (
        <button
          className="ui red google button"
          onClick={() => this.auth.signIn()}
        >
          <i className="google icon">Sign In with Google</i>
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
