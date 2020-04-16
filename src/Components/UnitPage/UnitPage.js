import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


class UnitPage extends Component {
  render(){
    const unit = this.props.unit;
    return <>
      <NavBar/>
      <section className="unit-section">
        <h2>{unit.year} {unit.make} {unit.model}</h2>
          <ul className="unit-details">
            <li>Year: {unit.year}</li>
            <li>Make: {unit.make}</li>
            <li>Model: {unit.model}</li>
            <li>Trim: {unit.trim}</li>
            <li>VIN: {unit.vin}</li>
            <li>Mileage: {unit.mileage}</li>
            <li>Color: {unit.color}</li>
            <li>Sale Price: {unit.price}</li>
            <li>Cost: {unit.cust}</li>
            <li>Status: {unit.status}</li>
          </ul>
      </section>
      <section className="edit-section">
        <Link to='/updateunit'><button>Update</button></Link>
        <button>Delete</button>
      </section> 
    </>
  }
}

export default UnitPage;