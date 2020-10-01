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
              text='Project Bite-Wallet, deploying a stock website that use JavaScript, html and css.'
              label='Bite-Wallet'
              path = 'https://shellynguyen98.github.io/Project-1/'
            />
            <CardItem
              src='/img/Ranch.png'
              text='Project Ranch-hand, using Mongoose database, Node to deploy a website for ranch owners to keep track of the well-being of their horses.'
              label='Ranch-hand'
              path = 'https://gentle-taiga-08855.herokuapp.com/index.html'
            />
           <CardItem
              src='/img/gif.gif'
              text='Creating a read-me generator so that I can quickly create a professional ReadMe.'
              label='Read-Me Generator'
            />
          </ul>
            </div>
            </div>
        </div>
    )
}

export default Card