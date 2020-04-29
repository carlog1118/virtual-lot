import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

class ListItem extends Component {
  
  render(){
    const unit = this.props.unit
    return <>
    <Link to={`/unit/${unit.id}`}>{unit.year} {unit.make} {unit.model}</Link>
          <ul>
            <li>{unit.year}</li>
            <li>{unit.make}</li>
            <li>{unit.model}</li>
            <li>{unit.trim}</li>
            <li>{unit.vin}</li>
            <li>{unit.mileage}</li>
            <li>{unit.color}</li>
            <li>${unit.price}</li>
            <li>${unit.cost}</li>
            <li>{unit.status}</li>
          </ul>
    </>
  }
}

export default ListItem;