import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UnitsContext from '../UnitsContext';
import config from "../config";
import './UpdateUnitPage.css';

class UpdateUnitPage extends Component {
  state= {
    
  }
  
  static contextType = UnitsContext;
  
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()

    const id = this.props.unit.id
   
    //const { year, make, model, trim, vin, mileage, color, price, cost, status} = e.target;
    
    /*const unit = {
      year: year.value,
      make: make.value,
      model: model.value,
      trim: trim.value,
      vin: vin.value,
      mileage: mileage.value,
      color: color.value,
      price: price.value,
      cost: cost.value,
      status: status.value,
    }*/

    const updates = this.state

    fetch(`${config.API_ENDPOINT}/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updates),
    })
   /* .then(res => {
      if(!res.ok){
        return res.json().then(e => Promise.reject(e))
      
      }

    }) */

    .catch(error => {
      console.log(error)
    })
  }
  
  render(){
    const unit= this.props.unit;
    return <>
      <NavBar/>
      <section>
        <h2>Update Unit</h2>  
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="year">Year:</label>
          <input type="text" name="year" id="year" defaultValue={unit.year} onChange={this.handleChange}/>
        
          <label htmlFor="make">Make:</label>
          <input type="text" name="make" id="make" defaultValue={unit.make} onChange={this.handleChange}/>
        
          <label htmlFor="model">Model:</label>
          <input type="text" name="model" id="model" defaultValue={unit.model} onChange={this.handleChange}/>
        
          <label htmlFor="trim">Trim:</label>
          <input type="text" name="trim" id="trim" defaultValue={unit.trim} onChange={this.handleChange}/>
        
          <label htmlFor="vin">VIN:</label>
          <input type="text" name="vin" id="vin" defaultValue={unit.vin} onChange={this.handleChange}/>
        
          <label htmlFor="mileage">Mileage</label>
          <input type="text" name="mileage" id="mileage" defaultValue={unit.mileage} onChange={this.handleChange}/>
        
          <label htmlFor="color">Color:</label>
          <input type="text" name="color" id="color" defaultValue={unit.color} onChange={this.handleChange}/>

          <label htmlFor="saleprice">Sale Price:</label>
          <input type="text" name="saleprice" id="saleprice" defaultValue={unit.price} onChange={this.handleChange}/>

          <label htmlFor="cost">Cost:</label>
          <input type="text" name="cost" id="cost" defaultValue={unit.cost} onChange={this.handleChange}/>

          <label htmlFor="status">Status:</label>
          <input type="text" name="status" id="status" defaultValue={unit.status} onChange={this.handleChange}/>

          <button type='submit'>Submit</button>
        </form>
      </section>  
    </>
  }
}

export default UpdateUnitPage;