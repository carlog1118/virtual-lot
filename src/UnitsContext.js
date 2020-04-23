import React from 'react';

const UnitsContext = React.createContext({
  units: [],
  addUnit: () => {
  },
  onCancel: () =>{
  },
  capitalize: () => {  
  },
}); 

export default UnitsContext;