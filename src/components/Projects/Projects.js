import React from 'react'
import './Projects.css'
import ReactPlayer from 'react-player'
import { FiGithub } from 'react-icons/fi'

function Projects() {
  return (
    <div className='project-container'>
        <h1>Civil Engineer Project</h1>
        <div className='video-container'>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=U3FJW2kTZ2o"
            />
        </div>
        <div className='project-github-container'>
          <a href='https://github.com/alexlitocortez/rhafaelherrera'>
            <FiGithub size={30} className='project-github-icon' />
          </a>
        </div>
        <p>Portfolio site for a civil engineer</p>
        <h3>Tech Stack:</h3>
            <ul>JavaScript</ul>
            <ul>React</ul>
            <ul>Styled Components</ul>
    </div>
  )
}

export default Projects