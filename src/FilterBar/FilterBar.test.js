import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import FilterBar from './FilterBar';

 it ('renders without crashing', () => {
  const div = document.createElement('div');
 
  ReactDOM.render(<BrowserRouter><FilterBar /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});