import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render(){
    return <>
      <nav>
        <Link to='/main'>List View</Link>
        <Link to='/addunit'>Add Unit</Link>
        <button>Log Out</button>
      </nav>
    </>
  }
}

export default NavBar;