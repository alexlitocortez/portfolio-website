import React from 'react';
import './About.css';
import myImage from '/Users/l/portfolio-website/src/Images/caricature.jpg';

function About() {
    return (
        <div>
            <section id='about'>
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
            </section>
        </div>
    )
}

export default About
