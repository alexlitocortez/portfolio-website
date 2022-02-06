import { React, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-size: contain;
        height: 30px;
        width: 2rem;
        color: black;
        cursor: pointer;
        position: fixed;
        top: 0.6rem;
        right: 10px;
        z-index: 999;

        &:hover {
            opacity: 0.3;
            transition: 0.2s ease-in-out;
        }
    }
`;



function Hamburger({ open, setOpen }) {

    return (
        <div>
            <MenuBars open={open} onClick={() => setOpen(!open)} />
        </div>
    )
}

export default Hamburger



