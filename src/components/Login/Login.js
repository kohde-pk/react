import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';

const Login = (props) => (
  
  <nav className="login">
    <h2>Login</h2>
    <hr />
    <section className={props.hideEmail ? 'login-form' : 'login-form login-form-active'}>
      <p className="login-text"> Login to your account</p>
      <input 
        className="login-email" 
        type="email" 
        placeholder="Email" 
        onChange={(event,newValue) => this.setState({ email: newValue})}
        required></input>
      <input 
        className="login-password" 
        type="password" 
          name="password" 
          placeholder="Password" 
          onChange={(event,newValue) => this.setState({ password: newValue})}
          required></input>
      <button 
        className="email-login" 
        onClick={() => props.authenticate('Email')}
        >
        Log In with Email
      </button>
      <hr />
      <button className="github" onClick={() => props.authenticate('Github')}>
        Log In with Github
      </button>
    </section>
    <hr />
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;