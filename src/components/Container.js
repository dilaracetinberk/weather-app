import React from 'react';
import Card from './WeatherCard';
import Location from './Form';
import Header from './Header';

function Container() {
  return (
    <div className='container'>
      <Header/>
      <Location/>
      <Card/>
    </div>
  )
}

export default Container