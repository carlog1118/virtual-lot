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
  }
  
  state= {
    
  }
  
  static contextType = UnitsContext;
  
  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  handleChange = e => {
    this.setState({[e.target.name]: this.capitalize(e.target.value)})
  }

  handleCancel = () => {
    this.props.history.push('/main')
  }

  handleSubmit = e => {
    e.preventDefault()

    const id = this.props.unit.id

    const updates = this.state

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
  
  render(){
    const unit= this.props.unit;
    return <>
      <NavBar/>
      <section>
        <h2>Update Unit</h2>  
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="year">Year:</label>
          <input type="text" name="year" id="year" defaultValue={unit.year} onChange={this.handleChange} required/>
        
          <label htmlFor="make">Make:</label>
          <input type="text" name="make" id="make" defaultValue={unit.make} onChange={this.handleChange} required/>
        
          <label htmlFor="model">Model:</label>
          <input type="text" name="model" id="model" defaultValue={unit.model} onChange={this.handleChange} required/>
        
          <label htmlFor="trim">Trim:</label>
          <input type="text" name="trim" id="trim" defaultValue={unit.trim} onChange={this.handleChange} required/>
        
          <label htmlFor="vin">VIN:</label>
          <input type="text" name="vin" id="vin" defaultValue={unit.vin} onChange={this.handleChange} required/>
        
          <label htmlFor="mileage">Mileage</label>
          <input type="text" name="mileage" id="mileage" defaultValue={unit.mileage} onChange={this.handleChange} required/>
        
          <label htmlFor="color">Color:</label>
          <input type="text" name="color" id="color" defaultValue={unit.color} onChange={this.handleChange} required/>

          <label htmlFor="saleprice">Sale Price:</label>
          <input type="text" name="saleprice" id="saleprice" defaultValue={unit.price} onChange={this.handleChange} required/>

          <label htmlFor="cost">Cost:</label>
          <input type="text" name="cost" id="cost" defaultValue={unit.cost} onChange={this.handleChange} required/>

          <label htmlFor="status">Status:</label>
          <input type="text" name="status" id="status" defaultValue={unit.status} onChange={this.handleChange} required/>

          <button type='submit'>Submit</button>
          
        </form>
      </section>  
    </>
  }
}

export default UpdateUnitPage;