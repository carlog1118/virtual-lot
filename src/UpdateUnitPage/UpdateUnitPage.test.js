import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import UpdateUnitPage from './UpdateUnitPage';

 it ('renders without crashing', () => {
  const div = document.createElement('div');
 
  ReactDOM.render(<BrowserRouter><UpdateUnitPage /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});