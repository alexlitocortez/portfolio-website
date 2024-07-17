import React from 'react'
import './Projects.css'
import { FiGithub } from 'react-icons/fi'
import { SiVercel } from 'react-icons/si'
import styled from "styled-components";
import { motion } from 'framer-motion';
import useIntersectionObserver from '../IntersectionObserver/IntersectionObserver';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import nextJsIcon from '../../assets/nextjs-icon.svg';
import typescriptIcon from '../../assets/typescript-icon-round.svg';
import prismaIcon from '../../assets/prisma.svg';
import trpcIcon from '../../assets/trpc.svg';
import tailwindIcon from '../../assets/tailwindcss-icon.svg';
import v1 from '../../assets/V1.jpg';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  margin: auto;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3.5rem;

  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }

  @media (max-width: 992px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 992px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    margin-right: 0rem;
  }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: 1rem;

    @media (max-width: 576px) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      flex-direction: column;
      margin: 1rem;
    }
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
        {/* <Box sx={{
          flexGrow: 1,
          margin: 1,
        }}> */}
        <Grid container spacing={2} style={{ flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'column' }}>
          {/* <Grid item xs={12} md={8} container alignItems='top' style={{ justifyContent: 'center', flexDirection: 'column' }}> */}
          <Title>Projects</Title>
          <div style={{ margin: 'auto', padding: '1rem' }}>
            <a href='https://v1-bzfduvh57-acim650gmailcoms-projects.vercel.app/' target='_blank'>
              <img
                src={v1}
                style={{
                  border: '5px solid #FF5733',
                  borderRadius: '10px',
                  maxWidth: '100%',
                  width: '300px',
                  cursor: 'pointer'
                }}
                alt='v1-image'
              />
            </a>
            <SubTitle>V1</SubTitle>
          </div>
          <div className='project-link-container'>
            <div className='github-container'>
              <a href='https://github.com/alexlitocortez/student-api' target='_blank' style={{ color: 'white' }}>
                <FiGithub size={30} className='project-github-icon' />
              </a>
              <a href='https://v1-bzfduvh57-acim650gmailcoms-projects.vercel.app/' target='_blank' style={{ color: 'white' }}>
                <SiVercel size={30} className='project-vercel-icon' />
              </a>
            </div>
          </div>
          <p style={{ fontWeight: 'bold' }}>Scraping and displaying side hustle ideas from different websites.</p>
          <ImageContainer>
            <img src={nextJsIcon} alt='Next.js Icon' className="responsive-image" />
            <img src={typescriptIcon} alt='TypeScript Icon' className="responsive-image" />
            <img src={prismaIcon} alt='Prisma Icon' className="responsive-image" />
            <img src={trpcIcon} alt='TRPC Icon' className="responsive-image" />
            <img src={tailwindIcon} alt='Tailwind Icon' className="responsive-image" />
          </ImageContainer>
          {/* </div> */}
          {/* </Grid> */}
        </Grid>
        {/* </Box> */}
      </div>
    </motion.div >
  )
}

export default Projects