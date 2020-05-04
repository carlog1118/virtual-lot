import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render(){
    return <>
      <section className="hero">      
        <h2 id="hero-header">Auto Inventory Made Easy</h2>
        <p id="hero-text">Virtual Lot is an application used to help auto dealers
           maintain an inventory database. Use this application to add, remove, and
           keep track of the sale status of your inventory with ease.
        </p>
      </section>
    </>
  };
};

export default Hero;