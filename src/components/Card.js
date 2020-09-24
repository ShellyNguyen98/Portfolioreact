import React from 'react';
import './Card.css';
import CardItem from './CardItem'


const Card = () => {
    return (
        <div className = 'cards'>
            <h1> Projects </h1>
            <div className = 'card-_container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
              src='/img/img.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/'
            />
            <CardItem
              src=''
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
            </div>
            </div>
        </div>
    )
}

export default Card