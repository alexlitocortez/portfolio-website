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
    animation: ${rotate} 4s linear 360;
  }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
            <Box sx={{ flexGrow: 1 }}>
                <ImageContainer>
                    <AnimatedBorder>
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
                    </AnimatedBorder>
                </ImageContainer>
                <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {/* <Grid item xs={12} md={6} container style={{ justifyContent: 'center', alignItems: 'center' }}> */}
                    <div>
                        <p style={{ padding: 0, fontWeight: 'bolder', fontSize: '5rem' }}>Alex Cortez</p>
                        <p style={{ padding: 0, fontWeight: 'bolder', fontSize: '3rem' }}>Software Engineer</p>
                    </div>
                    {/* </Grid> */}
                    {/* <Grid item xs={12} md={6} container alignItems='center' style={{ justifyContent: 'center' }}> */}
                    <div style={{ margin: 'auto', width: '50vw' }}>
                        <p style={{ padding: 0, textAlign: 'left', fontSize: '1.5rem' }}>
                            Hello! I'm a self-taught developer who has professional experience developing and designing web applications. Some of the projects
                            I've contributed to include a real-time machine learning platform, an internal pricing application, and a generative AI application.
                        </p>
                        <p style={{ padding: 0, textAlign: 'left', fontSize: '1.5rem' }}>
                            My main focus these days is finding ways to become a better developer. That includes learning new frameworks and understanding algorithms better.
                        </p>
                        <p style={{ padding: 0, textAlign: 'left', fontSize: '1.5rem' }}>
                            When I'm not at my computer, I love to spend time lifting weights, playing basketball,
                            or watching a good TV show. If you want to connect, my contact information is located on the top and bottom of this site.
                        </p>
                    </div>
                    {/* </Grid> */}
                </Grid>
            </Box>
        </motion.div>
    )
}

export default AboutMe;