import React from 'react';
import CardInfo from './CardInfo';
import Form from './Form';
import Header from './Header';

function Container() {
  return (
    <div className='container'>
      <Header/>
      <CardInfo/>
      <Form/>
    </div>
  )
}

export default Container