import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useIntersectionObserver from '../IntersectionObserver/IntersectionObserver';
import { motion } from 'framer-motion';

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
`;

const Title = styled.h1`
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

const Experience = ({ id }) => {
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
            }}>
            <StyledDiv>
                <Box sx={{
                    flexGrow: 1,
                    margin: 1,
                }}
                >
                    <Grid container spacing={2} style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Grid item xs={12} md={4} container alignItems='top' style={{ justifyContent: 'center' }}>
                            <Title>Experience</Title>
                        </Grid>
                        <Grid item xs={12} md={4} container alignItems='center' style={{ justifyContent: 'center' }}>
                            <div>
                                <p style={{ padding: 0, margin: 0 }}>Fractal Analytics Inc.</p>
                                <p style={{ padding: 0, margin: 0 }}>Software Engineer</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} container alignItems='center' style={{ justifyContent: 'center' }}>
                            <p style={{ margin: 0 }}>June 2022 - February 2024</p>
                        </Grid>
                        <Grid item xs={12} md={4} container alignItems='top' style={{ justifyContent: 'center' }}>
                        </Grid>
                        <Grid item xs={12} md={4} container alignItems='center' style={{ justifyContent: 'center' }}>
                            <p style={{ padding: 0, margin: 0 }}>Freelance Developer</p>
                        </Grid>
                        <Grid item xs={12} md={4} container alignItems='center' style={{ justifyContent: 'center' }}>
                            <p style={{ margin: 0 }}>March 2022 - May 2022</p>
                        </Grid>
                    </Grid>
                </Box>
            </StyledDiv>
        </motion.div>
    )
}

export default Experience