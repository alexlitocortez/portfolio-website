import React from "react";
import styled, { keyframes } from "styled-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import avatar from '../../assets/avatar.jpeg';
import useIntersectionObserver from '../IntersectionObserver/IntersectionObserver';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    border-color: #474973;
  }
  25% {
    border-color: #a69cac;
  }
  50% {
    transform: rotate(180deg);
    border-color: #0000FF;
  }
  75% {
    border-color: #161b33;
  }
  100% {
    transform: rotate(360deg);
    border-color: #0d0c1d;
  }
`;

const AnimatedBorder = styled(motion.div)`
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  border: 5px solid transparent;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 5px solid transparent;
    animation: ${rotate} 2s linear 360;
  }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.p`
  font-weight: bolder;
  font-size: 5rem;

  @media (max-width: 1200px) {
    font-size: 4rem;
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

const Content = styled.div`
  margin: auto;
  width: 50vw;

  p {
    padding: 0;
    text-align: left;
    font-size: 1.5rem;

    @media (max-width: 1200px) {
      font-size: 1.25rem;
    }

    @media (max-width: 992px) {
      font-size: 1.125rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 576px) {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 992px) {
    width: 60vw;
  }

  @media (max-width: 768px) {
    width: 70vw;
  }

  @media (max-width: 576px) {
    width: 80vw;
  }
`;

const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, rotate: 360 },
    hover: { scale: 1.1 },
};

function AboutMe({ id }) {
    const [setRef, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ImageContainer>
                <motion.img
                    src={avatar}
                    alt="Avatar pic"
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    variants={imageVariants}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    style={{ width: '300px', height: '300px', border: '1.5rem solid #152238', borderRadius: '90%' }} // Adjust image size as needed
                />
            </ImageContainer>
            <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div>
                    <Title>Alex Cortez</Title>
                </div>
                <Content>
                    <p>
                        Hello! I'm a self-taught developer who has professional experience developing and designing web applications. Some of the projects
                        I've contributed to include a real-time machine learning platform, an internal pricing application, and a generative AI application.
                    </p>
                    {/* <p style={{ padding: 0, textAlign: 'left', fontSize: '1.5rem' }}> */}
                    <p>
                        My main focus these days is finding ways to become a better developer. That includes learning new frameworks, developing algorithms, and creating projects.
                    </p>
                    {/* <p style={{ padding: 0, textAlign: 'left', fontSize: '1.5rem' }}> */}
                    <p>
                        When I'm not at my computer, I love to spend time lifting weights, playing basketball,
                        or watching a good TV show. If you want to connect, my contact information is located on the top and bottom of this site.
                    </p>
                    {/* </div> */}
                </Content>
            </Grid>
        </Box>
    )
}

export default AboutMe;