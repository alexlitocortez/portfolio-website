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
                    margin: 2,
                }}
                >
                    <Grid container spacing={2} style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Grid item xs={12} md={4} container alignItems='top' style={{ justifyContent: 'center' }}>
                            <h1>Experience</h1>
                        </Grid>
                        <Grid item xs={12} md={4} container alignItems='center' style={{ justifyContent: 'center' }}>
                            <div>
                                <p style={{ padding: 0, margin: 0 }}>Fractal Analytics Inc.</p>
                                <p style={{ padding: 0, margin: 0 }}>Software Engineer</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} container alignItems='center' style={{ justifyContent: 'flex-start' }}>
                            <p style={{ margin: 0 }}>June 2022 - February 2024</p>
                        </Grid>
                    </Grid>
                </Box>
            </StyledDiv>
        </motion.div>
    )
}

export default Experience