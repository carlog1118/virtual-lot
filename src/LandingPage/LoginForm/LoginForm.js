import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends Component {
  render(){
    return <>
      <section>
      <h2>Log In</h2>
      <h3>App is currently in static state. Just click
        Log In to proceed.
      </h3>
      <p>To test the features of this application use the credentials below to log in. The password is case sensitive.</p>
      <ul>
        <li>Username: demouser</li>
        <li>Password: Demopass123</li>
      </ul>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' id='username' placeholder='Username' />
        <label htmlFor="password">Password</label>
        <input type="text" name='password' id='password' placeholder='Password' />
        <Link to='/main'><button type='submit'>Log In</button></Link>
      </form>
    </section>
    </>
  }
}

export default LoginForm;