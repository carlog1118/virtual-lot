import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render(){
    return <footer>
      <p className="footer-text">Created by: Carlo Giustozzi</p>
      <a className="github-anch" target="_blank" rel="noopener noreferrer" href="https://www.github.com/carlog1118">Github</a>
    </footer>
  };
};

export default Footer;