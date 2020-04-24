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

class App extends Component {

  state = {
      units: [],
  };


  getUnits = (searchUrl) => {
    console.log(searchUrl)
    const url = `${config.API_ENDPOINT}?${searchUrl}`;
    fetch(url)
      .then(response => {
        if(!response.ok){
          throw new Error(response.status)
        }
        return response;
      })
      .then(response => response.json())
      .then((data) => {
        this.setUnits(data);
      });
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

  componentDidMount() {
    this.getUnits();
  };

  render(){
    const contextValue = {
      units: this.state.units,
      addUnit: this.handleAddUnit,
      handleSearch: this.getUnits,
    };

    return(
      <main className="App">
        <Header/>
        <UnitsContext.Provider value={contextValue}>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/main' component={MainPage}/>
            <Route path='/addunit' component={AddUnitPage}/>
            <Route path='/updateunit/:id' 
              render={(routerProps) =>
                this.renderUpdatePage(routerProps)
              }
            />
            <Route 
              path='/unit/:id' 
              render={(routerProps) => 
                this.renderUnit(routerProps)
              }
            />
            <Route path='' component={NotFoundPage}/>
          </Switch>
        </UnitsContext.Provider>
        <Footer/>
      </main>
    )
  };
};

export default App;
