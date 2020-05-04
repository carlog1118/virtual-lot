import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import FilterBar from '../FilterBar/FilterBar';
import ListItem from './ListItem/ListItem';
import UnitsContext from '../UnitsContext';
import './MainPage.css';

class MainPage extends Component {

  static contextType = UnitsContext;
  
  componentDidMount(){
    this.context.handleSearch()
  };

  render(){
    const items= this.context.units;
    return <>
      <NavBar/>
      <FilterBar/>
      <section className="main-section">
        <h2 className="main-header">Inventory</h2>
        <ul>
          {items.map(item =>
            <li className="unit-li" key={item.id}>
              <ListItem unit={item}/>
            </li>    
          )}
        </ul>
      </section>
    </>
  };
};

export default MainPage;