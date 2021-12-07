import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <nav className='NavBar'>
                <ul className='NavBar-list'>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
