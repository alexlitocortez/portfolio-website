import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #171d20;
`;

function Home() {
  return (
    <StyledDiv>
      <NavBar />
      <Projects />
      <Footer />
    </StyledDiv>
  );
}

export default Home;
