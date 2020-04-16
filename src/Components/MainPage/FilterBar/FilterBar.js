import React, { Component } from 'react';
import './FilterBar';

class FilterBar extends Component {
  render(){
    return <>
      <section >
        <form>
          <label htmlFor="year">Year:</label>
          <select id="year" name="year">
            <option value="2015">2015</option>
            <option value="2017">2017</option> 
          </select>
          <label htmlFor="make">Make:</label>
          <select id="make" name="mear">
            <option value="honda">honda</option>
            <option value="toyota">Toyota</option> 
          </select>
          <label htmlFor="make">Make:</label>
          <select id="make" name="make">
            <option value="civic">Civic</option>
            <option value="avalon">Avalon</option> 
          </select>
        </form>
      </section>
    </>
  }
}

export default FilterBar;