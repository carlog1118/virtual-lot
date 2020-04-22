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
  constructor(props) {
    super(props);

    this.state = {
      units: [],
    }
  }
  
  renderUnit = (routerProps) => {
    let unitId = parseInt(routerProps.match.params.id)
    let unitArray = this.state.units;
    let foundUnit = unitArray.find(obj => obj.id === unitId)
    return (foundUnit ?  
      <UnitPage 
        onDelete={(id) => this.handleDeleteUnit(id)} 

        unit={foundUnit}
      />
        :  <NotFoundPage/>)
  }

  setUnits = data => {
    this.setState({
      units: data,
    })
  }

  handleDeleteUnit = (id) => {
    console.log(`handle delete item ${id} called`)
    this.setState({
      units: this.state.units.filter(unit => unit.id !== id)
    });
  }

  handleAddUnit = (unit) => {
    this.setState({
      units: [...this.state.units, unit]
    })
    console.log(`added ${unit}`)
  }

  componentDidMount() {
    const url = config.API_ENDPOINT;
    fetch(url)
      .then(response => {
        if(!response.ok){
          throw new Error(response.status)
        }
        return response;
      })
      .then(response => response.json())
      .then((data) => {
        //this.setState({ units: data })
        this.setUnits(data);
      });
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
              <MainPage 
                units={this.state.units} 
                onDeleteUnit={() => this.handleDeleteUnit()}
                history ={this.props.history}
              />
            }
          />
          <Route 
            path='/addunit' 
            render={() => 
              <AddUnitPage onAddnit={() => this.handleAddUnit()}/>
            }  
          />
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
