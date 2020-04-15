import React, { Component } from 'react';

class UnitPage extends Component {
  render(){
    return <>
      <section className="unit-section">
        <h2>2015 Honda Civic</h2>
          <ul className="unit-details">
            <li>Year: 2015</li>
            <li>Make: Honda</li>
            <li>Model</li>
            <li>Trim: EX coupe</li>
            <li>VIN: 123456789abcdefg123</li>
            <li>Mileage: 75,000</li>
            <li>Color: Red</li>
            <li>Sale Price: $10,000</li>
            <li>Cost: $7,000</li>
            <li>Status: Available</li>
          </ul>
      </section>
      <section className="edit-section">
        <button>Update</button>
        <button>Delete</button>
      </section> 
    </>
  }
}

export default UnitPage;