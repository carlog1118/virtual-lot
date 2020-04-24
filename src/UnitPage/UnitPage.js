import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import config from '../config';

class UnitPage extends Component {
  static defaultProps = {
    onDelete: () => {},
  };

  handleClickDelete = (id) => {
    fetch(`${config.API_ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then((res) => {
        if(!res.ok) {
          throw new Error(res.status)
        }
      })
      .then(() => {this.props.onDelete(id)})
      .then(this.props.history.push('/main'))
      .catch(error => {console.error({ error })
    })
  };
  
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
        <Link to={`/updateunit/${unit.id}`}><button>Update</button></Link>
        <button onClick={()=> this.handleClickDelete(unit.id)}>Delete</button>
      </section> 
    </>
  }
};

export default UnitPage;