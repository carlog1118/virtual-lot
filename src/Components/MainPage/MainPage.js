import React, { Component } from 'react';
import FilterBar from './FilterBar/FilterBar';
import MainList from './MainList/MainList';



class MainPage extends Component {
  render(){
    return <>
    <FilterBar/>
    <MainList/>
    </>
  }
}

export default MainPage;