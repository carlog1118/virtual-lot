import React from 'react';

const UnitsContext = React.createContext({
  units: [],
  setUnits: () => {},
  renderUnits: () => {},

}) 

export default UnitsContext;