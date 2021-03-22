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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  renderAuthButton() {
    if (!this.state.isSignedIn) {
      return <div>Dont know if signed in</div>;
    } else if (this.state.isSignedIn === true) {
      return <div>I am signed in!</div>;
    } else {
      return <div>Not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;