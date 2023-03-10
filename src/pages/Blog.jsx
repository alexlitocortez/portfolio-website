import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import firstBlog from "../assets/switching careers thumbnail.jpeg";
import SwitchingCareers from "../pages/Blog Pages/HowISwitchedCareers2TimesAndGotADeveloperJob";
import { useNavigate } from "react-router-dom";

export const StyledDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #171d20;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavBarLink = styled.a`
  cursor: pointer;
  height: 100%;
  max-width: 100%;
  color: #fff;
  font-weight: 900;
  font-size: 1.3rem;
  text-decoration: none;
  &:hover {
    font-size: 1.5rem;
    transition: 0.3s;
  }
  @media (max-width: 425px) {
    margin: auto;
  }
`;

const Blog = () => {
  const navigate = useNavigate();

  const navigationHomeButton = () => {
    navigate("/");
  };

  const handleClick = () => {
    navigate("/blog/how-i-switched-careers-2-times-and-got-a-developer-job");
  };

  return (
    <StyledDiv>
      <NavBarContainer>
        <p>Alex Cortez</p>
        <NavBarLink onClick={navigationHomeButton}>Home</NavBarLink>
      </NavBarContainer>
      <Container>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={firstBlog} />
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  padding: "1rem",
                  marginBottom: "5rem",
                }}
              >
                How I Switched Careers 2 Times And Got A Developer Job
              </Card.Title>
              {/* <Card.Text
                style={{ color: "black", textAlign: "left", fontSize: "1rem" }}
              >
                Looking at the title looks crazy to me. If you’re an employer,
                you probably think I’m not the best applicant considering the
                title.
              </Card.Text> */}
              <Button variant="primary" onClick={handleClick}>
                Read
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </StyledDiv>
  );
};

export default Blog;
