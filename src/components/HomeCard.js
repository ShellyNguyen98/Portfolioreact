import React from 'react';
import './HomeCard.css';

const HomeCard = () => {
    return (
        <div className="cardsnone">
            <div className="card">
                <div className="card-image"></div>
                <div className="card-text">
                    <span className="date">About Me</span>
                    <h2>Shelly Nguyen</h2>
                    <p>I am currently attending UCI Coding Bootcamp to learn about CSS/HTML, Node and React!</p>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <a href="https://www.linkedin.com/in/trang-nguyen-518a4b159/"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><i className="fab fa-linkedin-in"></i></a>

                    </div>
                    <div className="stat border">
                        <a href="https://github.com/ShellyNguyen98"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard