import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

class ListItem extends Component {
  
  render(){
    const unit = this.props.unit
    return <>
    <Link className="unit-link" to={`/unit/${unit.id}`}>{unit.year} {unit.make} {unit.model}</Link>
          <ul>
            <li>Year: {unit.year}</li>
            <li>Make: {unit.make}</li>
            <li>Model: {unit.model}</li>
            <li>Trim: {unit.trim}</li>
            <li>VIN: {unit.vin}</li>
            <li>Mileage: {unit.mileage}</li>
            <li>Color: {unit.color}</li>
            <li>Sale Price: ${unit.price}</li>
            <li>Dealer Cost: ${unit.cost}</li>
            <li>Availability: {unit.status}</li>
          </ul>
    </>
  };
};

export default ListItem;