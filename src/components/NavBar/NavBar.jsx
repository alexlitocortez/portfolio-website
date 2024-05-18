import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
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

function NavBar() {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/blog");
  // };

  return (
    <NavBarContainer>
      {/* <p style={{ margin: 0, padding: 0, textAlign: 'left' }}>Alex Cortez</p>
      <p style={{ margin: 0, padding: 0, textAlign: 'left' }}>Software Engineer</p> */}
      {/* <NavBarLink onClick={handleClick}>Blog</NavBarLink> */}
    </NavBarContainer>
  );
}

export default NavBar;
