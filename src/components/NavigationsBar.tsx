import { useState } from 'react';
import './NavigationsBar.css';
import Logo from '../images/logo.png';

export default function NavigationsBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id="bar">
            <img src={Logo} id='bar-logo' alt='logo'></img>
            <div id="menu-icon" onClick={toggleMenu}>
                &#9776; {/* This is the hamburger icon */}
            </div>
            <div id="links" className={isMenuOpen ? 'show' : ''}>
                <a href="/">Forside</a>
                <a href='/rejsetemaer'>Rejsetemaer</a>
                <a href='/overnatning'>Overnatning</a>
                <a href='/info'>Praktisk info</a>
                <a href='/kontakt'>Info & Kontakt</a>
            </div>
        </div>
    );
}
