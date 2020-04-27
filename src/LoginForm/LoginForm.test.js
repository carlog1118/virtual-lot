import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';

 it ('renders without crashing', () => {
  const div = document.createElement('div');
 
  ReactDOM.render(<BrowserRouter><LoginForm /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});