import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../token-service';
import './NavBar.css';

class NavBar extends Component {
  
  handleLogOut= () => {
    TokenService.clearAuthToken();
  };

  render(){
    return <>
      <nav>
        <Link to='/main'>List View</Link>
        <Link to='/addunit'>Add Unit</Link>
        <Link onClick={this.handleLogOut} to='/'>Log Out</Link> 
      </nav>
    </>
  };
};

export default NavBar;