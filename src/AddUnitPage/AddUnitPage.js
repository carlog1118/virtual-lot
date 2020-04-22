import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import config from '../config';
import UnitsContext from '../UnitsContext';
import './AddUnitPage.css';


class AddUnitPage extends Component {

  static contextType = UnitsContext;

  handleSubmit = e => {
    e.preventDefault()

    const { year, make, model, trim, vin, mileage, color, price, cost, status} = e.target;
    
    const unit = {
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
    }

    fetch(config.API_ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(unit),
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(e => Promise.reject(e))
      
      }
      return res.json()
    })
    .then(unit => {
      this.context.addUnit(unit)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  render(){
    console.log(this.context)
    return <>
      <NavBar/>
      <section>
        <h2>Add Unit</h2>  
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="year">Year:</label>
          <input type="text" name="year" id="year" placeholder="Year" />
        
          <label htmlFor="make">Make:</label>
          <input type="text" name="make" id="make" placeholder="Make" />
        
          <label htmlFor="model">Model:</label>
          <input type="text" name="model" id="model" placeholder="Model" />
        
          <label htmlFor="trim">Trim:</label>
          <input type="text" name="trim" id="trim" placeholder="Trim" />
        
          <label htmlFor="vin">VIN:</label>
          <input type="text" name="vin" id="vin" placeholder="VIN" />
        
          <label htmlFor="mileage">Mileage</label>
          <input type="text" name="mileage" id="mileage" placeholder="Mileage" />
        
          <label htmlFor="color">Color:</label>
          <input type="text" name="color" id="color" placeholder="Color" />

          <label htmlFor="price">Sale Price:</label>
          <input type="text" name="price" id="price" placeholder="Sale Price" />

          <label htmlFor="cost">Cost:</label>
          <input type="text" name="cost" id="cost" placeholder="Cost" />

          <label htmlFor="status">Status:</label>
          <input type="text" name="status" id="status" placeholder="Status" />

          <button  type='submit'>Add</button>
        </form>
      </section>  
    </>
  }
}

export default AddUnitPage;