import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

class ListItem extends Component {
  render(){
    
    return <>
    <Link to={`/unit/${this.props.id}`}>{this.props.year} {this.props.make} {this.props.model}</Link>
          <ul>
            <li>{this.props.year}</li>
            <li>{this.props.make}</li>
            <li>{this.props.model}</li>
            <li>{this.props.trim}</li>
            <li>{this.props.vin}</li>
            <li>{this.props.mileage}</li>
            <li>{this.props.color}</li>
            <li>{this.props.price}</li>
            <li>{this.props.cost}</li>
            <li>{this.props.status}</li>
          </ul>
    </>
  }
}

export default ListItem;