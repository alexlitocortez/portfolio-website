import React from 'react'
import './Projects.css'
import ReactPlayer from 'react-player'
import { FiGithub } from 'react-icons/fi'
import { SiVercel } from 'react-icons/si'
import styled from "styled-components";
import { motion } from 'framer-motion';
import useIntersectionObserver from '../IntersectionObserver/IntersectionObserver'

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    margin: auto;
    flex-direction: column;
`;

function Projects({ id }) {
  const [setRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={setRef}
      initial="hidden"
      animate={isIntersecting ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
      id={id}
      style={{
        padding: '20px',
      }}
    >
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
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', padding: '20px' }}>
          <img src={require('../../assets/nextjs-icon.svg').default} alt='mySvgImage' style={{ height: 'auto', width: '100px' }} />
          <img src={require('../../assets/typescript-icon-round.svg').default} style={{ height: 'auto', width: '100px' }} alt='mySvgImage' />
          <img src={require('../../assets/prisma.svg').default} alt='mySvgImage' style={{ height: 'auto', width: '100px' }} />
          <img src={require('../../assets/trpc.svg').default} alt='mySvgImage' style={{ height: 'auto', width: '100px' }} />
          <img src={require('../../assets/tailwindcss-icon.svg').default} alt='mySvgImage' style={{ height: 'auto', width: '100px' }} />
        </div>
      </div>
    </motion.div>
  )
}

export default Projects