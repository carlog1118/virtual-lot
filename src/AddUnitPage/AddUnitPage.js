import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import config from '../config';
import UnitsContext from '../UnitsContext';
import TokenService from '../token-service';
import './AddUnitPage.css';


class AddUnitPage extends Component {

  static contextType = UnitsContext;

  cancelAdd = e => {
    e.preventDefault()
    this.props.history.push('/main')
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  handleSubmit = e => {
    e.preventDefault()

    const { year, make, model, trim, vin, mileage, color, price, cost, status} = e.target;
    
    const unit = {
      year: year.value,
      make: this.capitalize(make.value),
      model: this.capitalize(model.value),
      trim: this.capitalize(trim.value),
      vin: this.capitalize(vin.value),
      mileage: mileage.value,
      color: this.capitalize(color.value),
      price: price.value,
      cost: cost.value,
      status: this.capitalize(status.value),
    };

    if (this.context.handleValidate(unit)){
      fetch(config.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(unit),
      })
      .then(res => {
        if(!res.ok){
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(unit => {
        this.context.addUnit(unit)
        this.props.history.push('/main')
      })
      .catch(e=> alert(e))
    }
  };
  
  render(){
    return <>
      <NavBar/>
      <section className="addunit-section">
        <h2 className="addunit-header">Add Unit</h2>  
        <form  className="addunit-form" name="addForm" onSubmit={this.handleSubmit}>
          <label htmlFor="year">Year:</label>
          <input className="addunit-input" type="text" name="year" id="year" placeholder="Year" required/>
        
          <label htmlFor="make">Make:</label>
          <input className="addunit-input" type="text" name="make" id="make" placeholder="Make" required/>
        
          <label htmlFor="model">Model:</label>
          <input className="addunit-input" type="text" name="model" id="model" placeholder="Model" required/>
        
          <label htmlFor="trim">Trim:</label>
          <input className="addunit-input" type="text" name="trim" id="trim" placeholder="Trim" required/>
        
          <label htmlFor="vin">VIN:</label>
          <input className="addunit-input" type="text" name="vin" id="vin" placeholder="VIN" required/>
        
          <label htmlFor="mileage">Mileage</label>
          <input className="addunit-input" type="text" name="mileage" id="mileage" placeholder="Mileage" required/>
        
          <label htmlFor="color">Color:</label>
          <input className="addunit-input" type="text" name="color" id="color" placeholder="Color" required/>

          <label htmlFor="price">Sale Price:</label>
          <input className="addunit-input" type="text" name="price" id="price" placeholder="Sale Price" required/>

          <label htmlFor="cost">Cost:</label>
          <input className="addunit-input" type="text" name="cost" id="cost" placeholder="Cost" required/>

          <label htmlFor="status">Status:</label>
          <select className="addunit-input" id="status" name="Status" required>
            <option value="Available">Available</option>
            <option value="Pending">Pending</option>
            <option value="Sold">Sold</option>
          </select>

          <div>
          <button  type="submit">Add</button>
          <button type="button" onClick={this.cancelAdd}>Cancel</button>
          </div>
        </form>
      </section>  
    </>
  };
};

export default AddUnitPage;

