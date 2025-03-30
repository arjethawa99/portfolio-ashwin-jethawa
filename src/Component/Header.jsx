import React from 'react'
import { useState } from 'react'


const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div className='Header'>
            <div className='LogoName'>
                Ashwin Jethawa
            </div>
            <div className={`listMenu ${isMenuOpen ? 'showMenu' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>Know Me</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='downloadBtn'>
                <a href='#'>Download CV</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    )
}

export default Header