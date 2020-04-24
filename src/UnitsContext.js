import React from 'react';

const UnitsContext = React.createContext({
  units: [],
  addUnit: () => {
  },
  onCancel: () =>{
  },
  handleSearch: () => {  
  },
}); 

export default UnitsContext;