import React from 'react';
import CardItem from './CardItem'
import './Card.css';


const Card = () => {
    return (
        <div className = 'cards'>
            <h1> Portfolio </h1>
            <div className = 'card-_container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
              src='/img/img.png'
              text='Project Bite-Wallet, deploying a stock website that use JavaScript, html and css. '
              label='Project 1'
              path='/'
            />
            <CardItem
              src='/img/Ranch.png'
              text='A project using Node, Express and Sequelize to deploy a website that is used by horse ranches.'
              label='Project 2'
              path='/'
            />
          </ul>
            </div>
            </div>
        </div>
    )
}

export default Card