import React, { Component } from 'react';
import AuthApiService from '../auth-api-service';
import TokenService from '../token-service';
import UnitsContext from '../UnitsContext'
import './LoginForm.css';

class LoginForm extends Component {
  static contextType = UnitsContext;

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.history.push('/main')
        this.context.handleSearch()
      })
      .catch(res => {
        alert(res.error)
      })
  }

  render(){
    return <>
      <section>
      <h2>Log In</h2>
      <h3>App is currently in static state. Just click
        Log In to proceed.
      </h3>
      <p>To test the features of this application use the credentials below to log in. The password is case sensitive.</p>
      <ul>
        <li>Username: Demouser</li>
        <li>Password: Demopass123</li>
      </ul>
      <form onSubmit={this.handleSubmitJwtAuth}>
        <label htmlFor="user_name">Username</label>
        <input type="text" name='user_name' id='user_name' placeholder='Username' />
        <label htmlFor="password">Password</label>
        <input type="text" name='password' id='password' placeholder='Password' />
        <button type='submit'>submit</button>
      </form>
    </section>
    </>
  }
}

export default LoginForm;