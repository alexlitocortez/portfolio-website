import React from 'react';
import './NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';


function NavBar() {
    return (
        <div>
            <nav className='NavBar'>
                <ul className='NavBar-list'>
                    <li><Link smooth to='/#herosection'>About</Link></li>
                    <li><Link smooth to='/#projectsection'>Projects</Link></li>
                    <li><Link smooth to='/#blogsection'>Blog</Link></li>
                    <li><Link smooth to='/#contactsection'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar



