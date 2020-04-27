import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AddUnitPage from './AddUnitPage';

 it ('renders without crashing', () => {
  const div = document.createElement('div');
 
  ReactDOM.render(<BrowserRouter><AddUnitPage /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});