import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../Context/Authprovider';


const Header = () => {
    const scrollTo = (ref) => {
        const el = document.getElementById(ref)
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    const AuthData = useContext(AuthContext);
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
                    <li onClick={() => { scrollTo("Home") }}>Home</li>
                    <li onClick={() => { scrollTo("about") }}>Know Me</li>
                    <li onClick={() => { scrollTo("project") }}>Project</li>
                    <li onClick={() => { scrollTo("contact") }}>Contact</li>
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
        </div >
    )
}

export default Header