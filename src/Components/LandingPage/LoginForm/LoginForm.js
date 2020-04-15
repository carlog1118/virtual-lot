import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  render(){
    return <>
      <section>
      <h2>Log In</h2>
      <p>To test the features of this application use the credentials below to log in. The password is case sensitive.</p>
      <ul>
        <li>Username: demouser</li>
        <li>Password: Demopass123</li>
      </ul>
      <form>
        <label for="username">Username</label>
        <input type="text" name='username' id='username' placeholder='Username' />
        <label for="password">Password</label>
        <input type="text" name='password' id='password' placeholder='Password' />
        <button type='submit'>Log In</button>
      </form>
    </section>
    </>
  }
}

export default LoginForm;