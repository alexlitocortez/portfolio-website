import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import AboutMe from "../components/AboutMe/AboutMe";
import Experience from "../components/Experience/Experience";
import RadialGradient from "../components/RadialGradient/RadialGradient"

export const StyledDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #171d20;
`;

function Home() {
  return (
    <StyledDiv>
      {/* <RadialGradient /> */}
      <NavBar />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </StyledDiv>
  );
}

export default Home;
