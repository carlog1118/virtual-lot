import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const UNITS = [
  {
    "year": "2015",
    "make": "Honda",
    "model": "Civic",
    "trim": "EX Coupe",
    "vin": "123456789abcdefg123",
    "mileage": "75,000",
    "color": "Red",
    "sale price": "$10,000",
    "cost": "$7000",
    "status": "Available"
  },
  {
    "year": "2017",
    "make": "Toyota",
    "model": "Avalon",
    "trim": "XLE",
    "vin": "123456789abcdefg124",
    "mileage": "50,000",
    "color": "Blue",
    "sale price": "$20,000",
    "cost": "$16000",
    "status": "Available"
  }
]


function App() {
  return (
    <main className="App">
      <Header/>
      <Footer/>
    </main>
  );
}

export default App;
