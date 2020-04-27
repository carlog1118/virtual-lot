import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import UnitPage from './UnitPage';

 it ('renders without crashing', () => {
  const div = document.createElement('div');
 
  ReactDOM.render(<BrowserRouter><UnitPage /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});