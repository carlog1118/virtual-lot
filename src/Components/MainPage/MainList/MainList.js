import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';
import './MainList.css';

class MainList extends Component {
  
  render(){
    const cars= this.props.unitList.units;
    console.log(cars)
    return <>
      <section>
        <h2>Inventory</h2>
        <ul>
            <ListItem/>
            <ListItem/>
        </ul>
      </section>
    </>
  }
}

export default MainList;