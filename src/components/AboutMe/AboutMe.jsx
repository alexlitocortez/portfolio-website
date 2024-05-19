import React from "react";
import styled, { keyframes } from "styled-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import avatar from '../../assets/avatar.jpeg'


export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
`;

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

function AboutMe() {
    return (
        <StyledDiv>
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
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} container style={{ justifyContent: 'center' }}>
                        <div>
                            <p style={{ textAlign: 'left', padding: 0, fontWeight: 'bolder', fontSize: '5rem' }}>Alex Cortez</p>
                            <p style={{ textAlign: 'left', padding: 0, fontWeight: 'bolder', fontSize: '3rem' }}>Software Engineer</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} container alignItems='center' style={{ justifyContent: 'center', width: '50vw' }}>
                        <p style={{ textAlign: 'left', fontSize: '1.5rem' }}>
                            I'm a self-taught developer who has professional experience developing and designing web applications. A majority of my experience
                            includes frontend development but I have experience with backend development contributing to full-stack applications.
                        </p>
                        <p style={{ textAlign: 'left', fontSize: '1.5rem' }}>
                            I love to learn about cutting-edge technologies and playing around with them. Besides development, I love to spend time in the gymm lifting weights
                            or watching a good TV show. If you want to contact me about professional opportunties or just want to chit-chat my contact information is on the bottom
                            of this site.
                        </p>
                    </Grid>
                </Grid>
            </Box>


            <br />
        </StyledDiv >
    )
}

export default AboutMe;