import React, { Component } from 'react';
import Hero from './Hero/Hero';
import LoginForm from './LoginForm/LoginForm';

class LandingPage extends Component {
  
  render(){
    return <>
      <Hero/>
      <LoginForm/>
    </>
  }
}

export default LandingPage;