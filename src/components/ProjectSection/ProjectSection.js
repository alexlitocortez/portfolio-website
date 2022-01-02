import React from 'react';
import './ProjectSection.css';
import curryPicture from '/Users/l/portfolio-website/src/Images/curry.jpg';
import civilEngineer from '/Users/l/portfolio-website/src/Images/civil-engineer copy.jpg';
import { Link } from 'react-router-dom';

function ProjectSection() {
    return (
        <div>
            <section id='projectsection' className='project-wrapper'>
                <div className='projectWrapperZone'>
                    <h1 id='projectHeader'>Projects</h1>
                    <div className='cards-container'>
                        <div className='card'><Link to='/warriorstats'>
                            <img className='projectImage' src={curryPicture} />
                            <h1>2020-2021 Golden State Warriors</h1>
                            <hr className='project-hr' />
                            <div className='projectDescription'>
                                <p>
                                    An app that shows the 2020-2021 Golden State Warriors' 
                                    picture and statistics 
                                </p>
                            </div>
                            <div className='features'>
                                <p>HTML/CSS</p>
                                <p>Javascript</p>
                                <p>React</p>
                            </div>
                        </Link></div>

                        <div className='card card-two'><a href='https://rhafaelherrera.vercel.app/'>
                            <img className='projectImage' src={civilEngineer} />
                            <h1>Civil Engineer Portfolio Website</h1>
                            <hr className='project-hr' />
                            <div className='projectDescription'>
                                <p className='card-two-description'>
                                    A portfolio website for a civil engineer displaying projects 
                                    in the field
                                </p>
                            </div>
                            <div className='features features-two'>
                                <p>HTML/CSS</p>
                                <p>Javascript</p>
                                <p>React</p>
                            </div>
                        </a></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectSection
