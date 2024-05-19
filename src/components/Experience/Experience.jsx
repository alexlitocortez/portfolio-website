import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
`;

const Experience = () => {
    return (
        <StyledDiv>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={4} container alignItems='top' style={{ justifyContent: 'flex-end' }}>
                        <h1>Experience</h1>
                    </Grid>
                    <Grid item xs={12} md={4} container alignItems='center' style={{ justifyContent: 'flex-start' }}>
                        <div>
                            <p style={{ textAlign: 'left', padding: 0, margin: 0 }}>Fractal Analytics Inc.</p>
                            <p style={{ textAlign: 'left', padding: 0, margin: 0 }}>Software Engineer</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} container alignItems='top' style={{ justifyContent: 'flex-start' }}>
                        <p style={{ margin: 0 }}>June 2022 - February 2024</p>
                    </Grid>
                </Grid>
            </Box>
        </StyledDiv>
    )
}

export default Experience