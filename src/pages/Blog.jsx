import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import firstBlog from "../assets/switching careers thumbnail.jpeg";
import SwitchingCareers from "../pages/Blog Pages/HowISwitchedCareers2TimesAndGotADeveloperJob";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { matchRoutes, useLocation, Outlet } from "react-router-dom";
import { ROUTES } from "../components/Approutes/AppRoutes";
import { Link } from "@mui/material";

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
  const location = useLocation();
  const navigate = useNavigate();
  const crumbs = matchRoutes(ROUTES, location);

  const navigationHomeButton = () => {
    navigate("/");
  };

  const navigateToBlog = () => {
    navigate("/blog");
  };

  const handleClick = () => {
    navigate("/blog/switching-careers");
  };

  return (
    <StyledDiv>
      <NavBarContainer>
        <Breadcrumbs />
      </NavBarContainer>
      <Container
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        <button
          style={{
            cursor: "pointer",
            color: "#fff",
            fontWeight: "bold",
            backgroundColor: "#171d20",
            borderColor: "#fff",
            borderStyle: "solid",
            borderWidth: "thick",
            outline: "none",
            padding: "2rem",
            width: "10vw",
          }}
          onClick={() => navigate("/blog/switching-careers")}
        >
          Switching Careers 2 Times
        </button>
        <button
          style={{
            cursor: "pointer",
            color: "#fff",
            fontWeight: "bold",
            backgroundColor: "#171d20",
            borderColor: "#fff",
            borderStyle: "solid",
            borderWidth: "thick",
            outline: "none",
            padding: "2rem",
            width: "10vw",
          }}
          onClick={() => navigate("/blog/react-breadcrumbs")}
        >
          How To Create Breadcrumbs With React
        </button>
      </Container>
      <Outlet />
    </StyledDiv>
  );
};

export default Blog;
