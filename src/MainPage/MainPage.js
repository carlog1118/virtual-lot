import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import FilterBar from './FilterBar/FilterBar';
import ListItem from './ListItem/ListItem';
import UnitsContext from '../UnitsContext';


class MainPage extends Component {

  static contextType = UnitsContext;

  render(){
    const items= this.context.units;
    return <>
      <NavBar/>
      <FilterBar items={items}/>
      <section>
        <h2>Inventory</h2>
        <ul>
          {items.map(item =>
            <li key={item.id}>
              <ListItem unit={item}/>
            </li>    
          )}
        </ul>
      </section>
    </>
  }
}

export default MainPage;