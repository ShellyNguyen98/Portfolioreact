import React from 'react';
import Card from '../Card';
import Footer from '../Footer'



const Porfolio = () => {
    return (
        <>
            <div className= 'hero-container'>
            <video src = '/videos/video-1.mp4' autoPlay loop muted /> 
            <h1>
                Portfolio Page
            </h1>
        </div>
        <Card/>
        <Footer/>
        </>
    )
}

export default Porfolio