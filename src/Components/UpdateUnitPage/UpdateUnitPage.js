import React, { Component } from 'react';
import './UpdateUnitPage.css'

class UpdateUnitPage extends Component {
  render(){
    return <>
      <section>
        <h2>Update Unit</h2>  
        <form>
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

          <label htmlFor="saleprice">Sale Price:</label>
          <input type="text" name="saleprice" id="saleprice" placeholder="Sale Price" />

          <label htmlFor="cost">Cost:</label>
          <input type="text" name="cost" id="cost" placeholder="Cost" />

          <label htmlFor="status">Status:</label>
          <input type="text" name="status" id="status" placeholder="Status" />

          <button type='submit'>Update</button>
        </form>
      </section>  
    </>
  }
}

export default UpdateUnitPage;