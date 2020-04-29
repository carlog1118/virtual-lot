import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import MainPage from '../MainPage/MainPage';
import AddUnitPage from '../AddUnitPage/AddUnitPage';
import UpdateUnitPage from '../UpdateUnitPage/UpdateUnitPage';
import UnitPage from '../UnitPage/UnitPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import config from '../config';
import UnitsContext from '../UnitsContext';
import PrivateRoute from '../Utils/PrivateRoute';
import TokenService from '../token-service';

class App extends Component {

  state = {
      units: [],
  };

  validateUnitForm = (unit) => {
    if (unit.year.length !== 4) {
      alert('Year must be 4 digits.')
      return false
    }
    if(!this.allNumeric(unit.year)){
      alert('Year must only contain numbers.')
      return false
    }
    if (unit.vin.length !== 14 ) {
      alert('Vin must be 14 characters.')
      return false
    }
    if (!this.alphanumeric(unit.vin)){
      alert('Vin must only contain numbers and letters.')
      return false
    }
    if (!this.allNumeric(unit.mileage)){
      alert('Mileage may only contain numbers.')
      return false
    }
    if (!this.allLetters(unit.color)){
      alert('Color may only include letters.')
      return false
    }
    if (!this.allNumeric(unit.price)){
      alert('Price may only include numbers.')
      return false
    } if (!this.allNumeric(unit.cost)){
      alert('Cost may only include numbers.')
      return false
    } 
    return true;
  };

  alphanumeric = (string) => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if(string.match(letterNumber)){
      return true;
    } 
      return false;
  };

  allNumeric = (string) => {
    const numbers = /^[0-9]+$/;   
    if(string.match(numbers)){
      return true;
    } 
      return false;
  };

  allLetters = (string) => {
    const letters = /^[A-Za-z]+$/;
    if(string.match(letters)){
      return true;
    }
     return false; 
  };

  getUnits = (searchUrl) => {
    const url = `${config.API_ENDPOINT}?${searchUrl}`;
    fetch(url, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then(response => {
        if(!response.ok){
          throw new Error(response.status)
        }
        return response;
      })
      .then(response => response.json())
      .then((data) => {
        this.setUnits(data);
      })
      .catch(error => alert(error))
  };

  renderUnit = (routerProps) => {
    let unitId = parseInt(routerProps.match.params.id)
    let unitArray = this.state.units;
    let foundUnit = unitArray.find(obj => obj.id === unitId)
    return (foundUnit ?  
      <UnitPage 
        onDelete={(id) => this.handleDeleteUnit(id)} 
        unit={foundUnit}
        history= {routerProps.history}
      />
        :  <NotFoundPage/>)
  };

  renderUpdatePage = (routerProps) => {
      let unitId = parseInt(routerProps.match.params.id)
      let unitArray = this.state.units;
      let foundUnit = unitArray.find(obj => obj.id === unitId)
      return (foundUnit ?  
        <UpdateUnitPage
          onUpdate={() => this.getUnits} 
          unit={foundUnit}
          history= {routerProps.history}
        />
          :  <NotFoundPage/>)
  };

  setUnits = data => {
    this.setState({
      units: data,
    })
  };

  handleDeleteUnit = (id) => {
    this.setState({
      units: this.state.units.filter(unit => unit.id !== id)
    })
  };

  handleAddUnit = (unit) => {
    this.setState({ 
      units: [...this.state.units, unit ] 
    })
  };

  handleCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render(){
    const contextValue = {
      units: this.state.units,
      addUnit: this.handleAddUnit,
      handleSearch: this.getUnits,
      handleValidate: this.validateUnitForm,
    };

    return(
      <main className="App">
        <Header/>
        <UnitsContext.Provider value={contextValue}>
          
          <Switch>
            
            <Route exact path='/' component={LandingPage}/>
            <PrivateRoute path='/main' component={MainPage}/>
            <PrivateRoute path='/addunit' component={AddUnitPage}/>
            <PrivateRoute path='/updateunit/:id' component={this.renderUpdatePage}/>
            <PrivateRoute path='/unit/:id' component={this.renderUnit}/>
            <PrivateRoute path='' component={NotFoundPage}/>
          </Switch>
          
        </UnitsContext.Provider>
        <Footer/>
      </main>
    )
  };
};

export default App;
