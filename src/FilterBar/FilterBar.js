import React, { Component } from 'react';
import UnitsContext from '../UnitsContext';
import './FilterBar';

class FilterBar extends Component {
  static contextType = UnitsContext;
  
  onSearch = (e) => {
    e.preventDefault();
    const { make, model } = e.target;
    const query = `${make.name}=${make.value}&${model.name}=${model.value}`
    this.context.handleSearch(query);
  };

  onReset = (e) => {
    e.preventDefault();
    this.context.handleSearch();
  }

  render(){
    return <>
        <form onSubmit={this.onSearch}>
          <label htmlFor='make'></label>
          <input name='make' id='make' placeholder='Make'></input>
          <label htmlFor='model'></label>
          <input name='model' id='model' placeholder='Model'></input>
          <button type='submit'>Filter</button>
          <button type='button' onClick={this.onReset}>Reset Filter</button>
        </form>

    </>
  }
}

export default FilterBar;
