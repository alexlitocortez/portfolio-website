
import React from 'react'
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import './MenuBar.css';


const DropdownContainer = styled.nav`
    display: none;

    @media screen and (max-width: 786px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        position: fixed;
        padding: 1.5rem 1rem;
        border-radius: 0.5rem;
        background-color: #3e3e3e;
        top: 0;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: ease-in-out;

    li {
            padding-right: 1rem;
        }
    }
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
    position: absolute;
    top: 1rem;
    right: 0;
    color: #fff;
    height: 2rem;
    width: 2rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 0;
    }

    @media screen and (max-width: 375px) {
        position: absolute;
        right: 0;
    }
`;



function MenuBar({ open, setOpen }) {    

    return (
        <div>
            <DropdownContainer id='container' open={open}>
                <CloseIcon open={open} onClick={() => setOpen(!open)} />
                <ul className='nav-list' id='dropdownContainer'>
                    <li id='about' className='nav-list-item' onClick={() => setOpen(!open)}><HashLink smooth to='/#about'>About</HashLink></li>
                    <li id='projects' className='nav-list-item' onClick={() => setOpen(!open)}><HashLink smooth to='/#projectsection'>Projects</HashLink></li>
                    <li id='blog' className='nav-list-item' onClick={() => setOpen(!open)}><HashLink smooth to='/#blogsection'>Blog</HashLink></li>
                    <li id='contact' className='nav-list-item' onClick={() => setOpen(!open)}><HashLink smooth to='/#contactsection'>Contact</HashLink></li>
                </ul>
            </DropdownContainer>
            <hr />
        </div>
    )
}

export default MenuBar