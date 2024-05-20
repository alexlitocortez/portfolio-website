import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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

  return (
    <NavBarContainer>
      <p style={{ margin: 0, padding: 0, textAlign: 'left' }}>Contact me <ArrowRightAltIcon /> <span style={{ textDecoration: 'underline', fontSize: '1.2rem' }}>alexlitocortez@gmail.com </span></p>
    </NavBarContainer>
  );
}

export default NavBar;
