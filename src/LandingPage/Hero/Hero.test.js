import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Hero from './Hero';

 it ('renders without crashing', () => {
  const div = document.createElement('div');
 
  ReactDOM.render(<BrowserRouter><Hero /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});