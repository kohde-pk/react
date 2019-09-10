import React, { Component } from 'react';
import firebase from 'firebase';

import './Login.scss';
import { firebaseApp } from '../../base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        provider: 'Github',
        hideEmail: false
    }
    this.handleLogout = this.handleLogout.bind(this);
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    console.log('User Data', authData);
    this.setState({
        uid: authData.user.uid,
        userEmail: authData.user.email
      });
}

  authenticate = () => {
    console.log("Authenticating!");
      const authProvider = new firebase.auth[`${this.state.provider}AuthProvider`]();
      console.log(authProvider);
      firebaseApp
          .auth()
          .signInWithPopup(authProvider)
          .then(this.authHandler);
  };

handleLogout = async () => {
  console.log(this.state.uid);
  console.log("Logging out!", this.state.uid);
  await firebase.auth().signOut();
  this.setState({ uid: null });
  console.log("Logged Out", this.state.uid);
};
  
render() {
  console.log('login render')
  return (
    <nav className="login">
      <h2>Login</h2>
      <hr />
      <section className={this.state.hideEmail ? 'login-form' : 'login-form login-form-active'}>
        <hr />
        <button 
          className="github" 
          onClick={this.authenticate}>
          Log In with Github
        </button>
        <button 
          className="logout" 
          onClick={this.handleLogout}>
          Log Out
        </button>
      </section>
      <hr />
    </nav>
  )
};
}

export default Login;