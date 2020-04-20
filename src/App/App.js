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

class App extends Component {
  state = {
    units: [],
  }
  
  renderUnit = (routerProps) => {
    let unitId = parseInt(routerProps.match.params.id)
    let unitArray = this.state.units;
    let foundUnit = unitArray.find(obj => obj.id === unitId)
    return (foundUnit ?  <UnitPage unit={foundUnit}/> :  <NotFoundPage/>)
  }

  componentDidMount() {
    const url = config.API_ENDPOINT;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ units: data})
      });
  }

  render(){
    console.log(this.state.units)
    return(
      <main className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route 
            path='/main'
            render={() =>
              <MainPage units={this.state.units}/>
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
