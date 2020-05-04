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
        <Link className="nav-link" to='/main'>List View</Link>
        <Link className="nav-link" to='/addunit'>Add Unit</Link>
        <Link className="nav-link" onClick={this.handleLogOut} to='/'>Log Out</Link> 
      </nav>
    </>
  };
};

export default NavBar;