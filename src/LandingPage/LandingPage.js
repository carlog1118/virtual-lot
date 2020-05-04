import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';

class LandingPage extends Component {
  
  render(){
    return <>
      <Hero/>
      <LoginForm history={this.props.history}/>
      <Footer></Footer>
    </>
  };
};

export default LandingPage;