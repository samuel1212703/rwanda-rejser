import { useState } from 'react';
import './NavigationsBar.css';
import Logo from '../images/logo.png';
import { sider } from '../AppRouter';

export default function NavigationsBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id="bar">
            <img src={Logo} id='bar-logo' alt='logo'></img>
            <div id="menu-icon" onClick={toggleMenu}>
                &#9776; {/* hamburger toggle icon */}
            </div>
            <div id="links" className={isMenuOpen ? 'show' : ''}>
                {sider.map((side) => {
                    return (
                        <a href={"/" + side.sti}>{side.titel}</a>
                    )
                })}
            </div>
        </div>
    );
}
