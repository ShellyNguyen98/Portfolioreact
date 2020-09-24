import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Shelly
            </Link>
          </div>
          <small className='website-rights'>Shelly © 2020</small>
          <div className='social-icons'>
            <a href = 'https://www.linkedin.com/in/trang-nguyen-518a4b159/'
              className='social-icon-link Linkedin'
              aria-label='Linkedin'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a href = 'https://github.com/ShellyNguyen98'
              className='social-icon-link Github'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </a>
            </div>
            </div>
            </section>
    
    )
}

export default Footer