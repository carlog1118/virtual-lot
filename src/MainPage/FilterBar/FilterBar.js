import React, { Component } from 'react';
import './FilterBar';

class FilterBar extends Component {
  render(){
    const units= this.props.items;
    return <>
      <section >
        <form>
          <label htmlFor="year">Year:</label>
          <select id="year" name="year">
            {units.map(unit => 
              <option value={unit.year} key={unit.id}>{unit.year}</option>  
            )} 
          </select>
          <label htmlFor="make">Make:</label>
          <select id="make" name="make">
            {units.map(unit => 
              <option value={unit.make} key={unit.id}>{unit.make}</option> 
            )} 
          </select>
          <label htmlFor="model">Make:</label>
          <select id="model" name="model">
            {units.map(unit => 
              <option value={unit.model} key={unit.id}>{unit.model}</option> 
            )} 
          </select>
        </form>
      </section>
    </>
  }
}

export default FilterBar;