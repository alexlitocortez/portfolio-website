
import React from 'react'
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { bool } from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import './MenuBar.css';


const DropdownContainer = styled.nav`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        position: absolute;
        padding: 1.5rem 1rem;
        border-radius: 0.5rem;
        background-color: #3e3e3e;
        top: 0;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: 0.3s ease-in-out;

    li {
            padding-right: 1rem;
        }
    }
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #fff;
    height: 2rem;
    width: 2rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 1rem;
    }

    @media screen and (max-width: 375px) {
        position: absolute;
        right: 4rem;
    }
`;



function MenuBar({ open, setOpen }) {
    return (
        <div>
            <DropdownContainer open={open}>
                <CloseIcon open={open} onClick={() => setOpen(!open)} />
                <ul className='nav-list'>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Projects</li>
                    <li className='nav-list-item'>Blog</li>
                    <li className='nav-list-item'>Contact</li>
                </ul>
            </DropdownContainer>
            <hr />
        </div>
    )
}

MenuBar.propTypes = {
    open: bool.isRequired,
}

export default MenuBar