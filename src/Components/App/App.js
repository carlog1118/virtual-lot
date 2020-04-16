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

class App extends Component {
  static defaultProps = {
    units: [
      {
        id: 1,
        year: "2015",
        make: "Honda",
        model: "Civic",
        trim: "EX Coupe",
        vin: "123456789abcdefg123",
        mileage: "75,000",
        color: "Red",
        price: "$10,000",
        cost: "$7000",
        status: "Available"
      },
      {
        id: 2,
        year: "2017",
        make: "Toyota",
        model: "Avalon",
        trim: "XLE",
        vin: "123456789abcdefg124",
        mileage: "50,000",
        color: "Blue",
        price: "$20,000",
        cost: "$16000",
        status: "Available"
      }
    ]
  }
  
  renderUnit = (routerProps) => {
    let unitId = parseInt(routerProps.match.params.id)
    let unitArray = this.props.units;
    let foundUnit = unitArray.find(obj => obj.id === unitId)
    return (foundUnit ?  <UnitPage unit={foundUnit}/> :  <NotFoundPage/>)
  }

  render(){
    return(
      <main className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route 
            path='/main'
            render={() =>
              <MainPage unitList={this.props}/>
            }
          />
          <Route path='/addunit' component={AddUnitPage}/>
          <Route path='/updateunit' component={UpdateUnitPage}/>
          <Route 
            path='/unit/:id' 
            render={(routerProps) => 
              this.renderUnit(routerProps)
            }
          />
          <Route path='' component={NotFoundPage}/>
        </Switch>
        <Footer/>
      </main>
    )
  }
}

export default App;
