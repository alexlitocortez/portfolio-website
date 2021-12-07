import React from 'react';
import './HeroSection.css';
import myImage from '/Users/l/portfolio-website/src/Images/caricature.jpg';

function HeroSection() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='fit'>
                        <img className='heroImage' src={myImage} />
                    </div>
                    <div className='about-text'>
                        <h1>Hi, I'm<strong> Alex Cortez</strong>.</h1>
                        <p>I'm a <strong id='about-job'>Web Developer</strong>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
