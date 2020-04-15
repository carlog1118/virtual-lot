import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render(){
    return <>
        <li className="list-item">
          <a href=""><h3>2015 Honda Civic</h3></a>
          <ul>
            <li>Year: 2015</li>
            <li>Make: Honda</li>
            <li>Model: Civic</li>
            <li>Trim: EX coupe</li>
            <li>VIN: 123456789abcdefg123</li>
            <li>Mileage: 75,000</li>
            <li>Color: Red</li>
            <li>Sale Price: $10,000</li>
            <li>Cost: $7,000</li>
            <li>Status: Available</li>
          </ul>
      </li>
    </>
  }
}

export default ListItem;