import React from 'react'
import './Projects.css'
import ReactPlayer from 'react-player'
import { FiGithub } from 'react-icons/fi'
import { SiVercel } from 'react-icons/si'
import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    margin: auto;
    flex-direction: column;
`;

function Projects() {
  return (
    <div className='project-container'>
      <h1>Projects</h1>

      <h2>SaaS Marketplace</h2>
      <div className='project-github-container'>
        <div className='github-container'>
          <a href='https://github.com/alexlitocortez/student-api' target='_blank' style={{ color: 'white' }}>
            <FiGithub size={30} className='project-github-icon' />
          </a>
        </div>
      </div>
      <p>Scraping and displaying SaaS from different marketplaces</p>
      <h3>Tech Stack: Next.js, TypeScript, Prisma, TRPC, Tailwind CSS, NextAuth.js</h3>

      {/* <h1>Civil Engineer Portfolio</h1>
      <div className='video-container'>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=U3FJW2kTZ2o"
        />
      </div>
      <div className='project-github-container'>
        <div className='github-container'>
          <a href='https://github.com/alexlitocortez/rhafaelherrera' target='_blank' style={{ color: 'white' }}>
            <FiGithub size={30} className='project-github-icon' />
          </a>
        </div>
        <div className='vercel-container'>
          <div className='v-s'>
            <a href='https://rhafaelherrera.vercel.app/' target='_blank' style={{ color: 'white' }}>
              <SiVercel size={30} className='project-github-icon' />
            </a>
            <p style={{ padding: 0, fontSize: '1rem' }}>(Live Demo)</p>
          </div>
        </div>
      </div>
      <p>Portfolio site displaying a civil engineer's projects</p>
      <h3>Tech Stack: JavaScript, React, HTML, CSS, Styled Components</h3> */}
    </div>
  )
}

export default Projects