import React from 'react';
import './Dash.css';
import DashItem from './DashItems';

function Dash() {
  return (
    <div className='dash'>
      <h1>A Complete Modern Learning Experience</h1>
      <div className='dash__container'>
        <div className='dash__wrapper'>
          <ul className='dash__items'>
            <DashItem
              src={require('../images/img-3.jpg').default}
              text='What is the 11+?'
              label='Find out here...'
              path='/About'
            />
            <DashItem
              src='images/img-2.jpg'
              text='A new approach to education'
              label='Discover More'
              path='/services'
            />
          </ul>
          <ul className='dash__items'>
            <DashItem
              src='images/img-4.jpg'
              text='Meet The Team'
              label='Get to know us'
              path='/About'
            />
            <DashItem
              src='images/img-8.jpg'
              text='Join our community...'
              label='Keep Up-To-Date'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dash;
