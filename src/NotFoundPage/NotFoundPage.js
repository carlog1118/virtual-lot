import React, { Component } from 'react';
import './NotFoundPage.css';
import NavBar from '../NavBar/NavBar';

class NotFoundPage extends Component {
  render(){
    return <>
      <NavBar/>
      <section className="not-section">
        <h2 className="not-header">Page Not Found</h2>
      </section>
    </>
  };
};

export default NotFoundPage;