import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import UnitsContext from '../UnitsContext';
import TokenService from '../token-service';
import config from "../config";
import './UpdateUnitPage.css';

class UpdateUnitPage extends Component {
  static defaultProps = {
    onUpdate: () => {},
    unit: [],
  };
  
  state= {
    
  };
  
  static contextType = UnitsContext;
  
  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  handleChange = e => {
    this.setState({[e.target.name]: this.capitalize(e.target.value)})
  };

  handleCancel = () => {
    this.props.history.push('/main')
  };

  handleSubmit = e => {
    e.preventDefault()

    const newUnitInfo = {
      year: e.target.year.value,
      make: this.capitalize(e.target.make.value),
      model: this.capitalize(e.target.model.value),
      trim: this.capitalize(e.target.trim.value),
      vin: this.capitalize(e.target.vin.value),
      mileage: e.target.mileage.value,
      color: this.capitalize(e.target.color.value),
      price: e.target.price.value,
      cost: e.target.cost.value,
      status: this.capitalize(e.target.status.value),
    };

    const id = this.props.unit.id

    const updates = this.state

    if(this.context.handleValidate(newUnitInfo)){
      fetch(`${config.API_ENDPOINT}/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(updates),
      })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
      })
      .then(this.props.onUpdate())
      .catch(e=> alert(e))
      .then(this.props.history.push('/main'))
    }
  };
  
  render(){
    const unit= this.props.unit;
    return <>
      <NavBar/>
      <section className="update-section">
        <h2 className="update-header">Update Unit</h2>  
        <form className="update-form" onSubmit={this.handleSubmit}>
          <label htmlFor="year">Year:</label>
          <input className="update-input" type="text" name="year" id="year" defaultValue={unit.year} onChange={this.handleChange} required/>
        
          <label htmlFor="make">Make:</label>
          <input className="update-input" type="text" name="make" id="make" defaultValue={unit.make} onChange={this.handleChange} required/>
        
          <label htmlFor="model">Model:</label>
          <input className="update-input" type="text" name="model" id="model" defaultValue={unit.model} onChange={this.handleChange} required/>
        
          <label htmlFor="trim">Trim:</label>
          <input className="update-input" type="text" name="trim" id="trim" defaultValue={unit.trim} onChange={this.handleChange} required/>
        
          <label htmlFor="vin">VIN:</label>
          <input className="update-input" type="text" name="vin" id="vin" defaultValue={unit.vin} onChange={this.handleChange} required/>
        
          <label htmlFor="mileage">Mileage</label>
          <input className="update-input" type="text" name="mileage" id="mileage" defaultValue={unit.mileage} onChange={this.handleChange} required/>
        
          <label htmlFor="color">Color:</label>
          <input className="update-input" type="text" name="color" id="color" defaultValue={unit.color} onChange={this.handleChange} required/>

          <label htmlFor="price">Sale Price:</label>
          <input className="update-input" type="text" name="price" id="price" defaultValue={unit.price} onChange={this.handleChange} required/>

          <label htmlFor="cost">Cost:</label>
          <input className="update-input" type="text" name="cost" id="cost" defaultValue={unit.cost} onChange={this.handleChange} required/>

          <label htmlFor="status">Status:</label>
          <select className="update-input" id="status" name="status" defaultValue={unit.status} onChange={this.handleChange} required>
            <option value="Available">Available</option>
            <option value="Pending">Pending</option>
            <option value="Sold">Sold</option>
          </select>

          <button type="submit">Update</button>
          
        </form>
      </section>  
    </>
  };
};

export default UpdateUnitPage;