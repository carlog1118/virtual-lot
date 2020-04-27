import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

 it ('renders without crashing', () => {
  const div = document.createElement('div');
 
  ReactDOM.render(<BrowserRouter><NavBar /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});