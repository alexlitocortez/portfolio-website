import React from 'react';
import './ProjectSection.css';
import curryPicture from '/Users/l/portfolio-website/src/Images/curry.jpg';
import { useHistory, Link } from 'react-router-dom';

function ProjectSection() {
    return (
        <div>
            <section id='projectsection' className='project-wrapper'>
                <div className='projectWrapperZone'><Link to='/warriorstats'>
                    <h1 id='projectHeader'>Projects</h1>
                    <div className='cards'>
                        <div className='card card-one'>
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
                        </div>
                        <div className='card'>

                        </div>
                        <div className='card'>

                        </div>
                    </div>
                </Link></div>
            </section>
        </div>
    )
}

export default ProjectSection
