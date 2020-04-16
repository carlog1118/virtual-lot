import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import FilterBar from './FilterBar/FilterBar';
import ListItem from './ListItem/ListItem';

class MainPage extends Component {
  render(){
    const items= this.props.unitList.units;
    return <>
      <NavBar/>
      <FilterBar/>
      <section>
        <h2>Inventory</h2>
        <ul>
          {items.map(item =>
            <li key={item.id}>
              <ListItem
                id={item.id}
                year= {item.year}
                make={item.make}
                model={item.model}
                trim={item.trim}
                vin={item.vin}
                mileage={item.mileage}
                color={item.color}
                price={item.price}
                cost={item.cost}
                status={item.status}              
              />
            </li>    
          )}
        </ul>
      </section>
    </>
  }
}

export default MainPage;